import BookIcon from '@material-ui/icons/Book';
import Chip from '@material-ui/core/Chip';
import { useMediaQuery, makeStyles } from '@material-ui/core';
import React, { Children, Fragment, cloneElement, useState } from 'react';
import lodashGet from 'lodash/get';
import jsonExport from 'jsonexport/dist';
import {
  BooleanField,
  BulkDeleteButton,
  BulkExportButton,
  Button,
  ChipField,
  Datagrid,
  DateField,
  downloadCSV,
  EditButton,
  Filter,
  List,
  NumberField,
  ReferenceArrayField,
  SearchInput,
  ShowButton,
  SimpleList,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
  TextInput,
  useTranslate,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import ResetViewsButton from './ResetViewsButton';
export const PostIcon = BookIcon;

import DeleteWithCustomConfirmButton from "ra-delete-with-custom-confirm-button";
import {
  DeleteConfirmTitle,
  DeleteConfirmContent
} from './PostDeleteConfirm';

import CustomConfirm from 'ra-custom-confirm';

const useQuickFilterStyles = makeStyles(theme => ({
  chip: {
    marginBottom: theme.spacing(1),
  },
}));
const QuickFilter = ({ label }) => {
  const translate = useTranslate();
  const classes = useQuickFilterStyles();
  return <Chip className={classes.chip} label={translate(label)} />;
};

const PostFilter = props => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <TextInput
      source="title"
      defaultValue="Qui tempore rerum et voluptates"
    />
    <QuickFilter
      label="resources.posts.fields.commentable"
      source="commentable"
      defaultValue
    />
  </Filter>
);

const exporter = posts => {
  const data = posts.map(post => ({
    ...post,
    backlinks: lodashGet(post, 'backlinks', []).map(
      backlink => backlink.url
    ),
  }));
  jsonExport(data, (err, csv) => downloadCSV(csv, 'posts'));
};

const useStyles = makeStyles(theme => ({
  title: {
    maxWidth: '20em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  hiddenOnSmallScreens: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  publishedAt: { fontStyle: 'italic' },
}));

const PostListBulkActions = props => (
  <Fragment>
    <ResetViewsButton {...props} />
    <BulkDeleteButton {...props} />
    <BulkExportButton {...props} />
  </Fragment>
);

const usePostListActionToolbarStyles = makeStyles({
  toolbar: {
    alignItems: 'center',
    display: 'flex',
    marginTop: -1,
    marginBottom: -1,
  },
});

const PostListActionToolbar = ({ children, ...props }) => {
  const classes = usePostListActionToolbarStyles();
  return (
    <div className={classes.toolbar}>
      {Children.map(children, button => cloneElement(button, props))}
    </div>
  );
};

// Define your custom title of confirm dialog
const CustomConfirmTitle = 'Are you sure you want to do?';

// Define your custom contents of confirm dialog
const CustomConfirmContent = props => {
  return (
    <SimpleShowLayout {...props}>
      <TextField source="id" />
      <TextField source="title" />
      <DateField
        source="published_at"
      />
      <ReferenceArrayField
        label="Tags"
        reference="tags"
        source="tags"
        sortBy="tags.name"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
    </SimpleShowLayout>
  );
};

const PostConfirmButton = props => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();            // support with rowClick on Datagrid
    setOpen(true);
  };

  const handleDialogClose = () => setOpen(false);

  const handleConfirm = () => {
    // do something here
    alert('Confirmed!!');
    setOpen(false);
  };

  return (
    <Fragment>
      <Button label="Send" onClick={handleClick} />
      <CustomConfirm {...props}
        isOpen={open}
        title={CustomConfirmTitle}      // your custom title of confirm dialog
        content={CustomConfirmContent}  // your custom contents of confirm dialog
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
}

const rowClick = (id, basePath, record) => {
  if (record.commentable) {
    return 'edit';
  }

  return 'show';
};

const PostPanel = ({ id, record, resource }) => (
  <div dangerouslySetInnerHTML={{ __html: record.body }} />
);

const PostList = props => {
  const classes = useStyles();
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List
      {...props}
      bulkActionButtons={<PostListBulkActions />}
      filters={<PostFilter />}
      sort={{ field: 'published_at', order: 'DESC' }}
      exporter={exporter}
    >
      {isSmall ? (
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
          <Datagrid rowClick={rowClick} expand={PostPanel} optimized>
            <TextField source="id" />
            <TextField source="title" cellClassName={classes.title} />
            <DateField
              source="published_at"
              cellClassName={classes.publishedAt}
            />

            <BooleanField
              source="commentable"
              label="resources.posts.fields.commentable_short"
              sortable={false}
            />
            <NumberField source="views" />
            <ReferenceArrayField
              label="Tags"
              reference="tags"
              source="tags"
              sortBy="tags.name"
              cellClassName={classes.hiddenOnSmallScreens}
              headerClassName={classes.hiddenOnSmallScreens}
            >
              <SingleFieldList>
                <ChipField source="name" />
              </SingleFieldList>
            </ReferenceArrayField>
            <PostListActionToolbar>
              <EditButton />
              <ShowButton />
              <PostConfirmButton />
              <DeleteWithCustomConfirmButton
                confirmTitle={DeleteConfirmTitle}
                confirmContent={DeleteConfirmContent}
              />
            </PostListActionToolbar>
          </Datagrid>
        )}
    </List>
  );
};

export default PostList;
