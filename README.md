# ra-custom-confirm

[![npm version](https://img.shields.io/npm/v/ra-custom-confirm.svg)](https://www.npmjs.com/package/ra-custom-confirm)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](./LICENSE)
[![Build Status](https://travis-ci.org/itTkm/ra-custom-confirm.svg?branch=master)](https://travis-ci.org/itTkm/ra-custom-confirm)

Your custom confirm dialog for [React-admin](https://marmelab.com/react-admin/).

![Demo](img/ra-custom-confirm.gif?raw=true "Demo")

## Installation

```bash
# via npm
npm install --save ra-custom-confirm

# via yarn
yarn add ra-custom-confirm
```

## Demo

After having cloned this repository, run the following commands:

```bash
cd example/
yarn install
yarn start
```

And then browse to [http://localhost:8080/](http://localhost:8080/).

The credentials are *login/password*

## Usage

```js
import React, { Fragment, useState } from 'react';
import Share from '@material-ui/icons/Share';
import AlertError from '@material-ui/icons/ErrorOutline';
import CustomConfirm from 'ra-custom-confirm';

// Define your custom title of confirm dialog
const CustomConfirmTitle = 'Are you sure you want to share?';

// Define your custom contents of confirm dialog
const CustomConfirmContent = props => {
  return (
    <SimpleShowLayout {...props} >
      <TextField source='title' label='title' />
      <TextField source='user' label='user' />
      <TextField source='date' label='date' />
      <RichTextField source='description' label='description' />
    </SimpleShowLayout>
  );
};

const ShareButton = props => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();            // support with rowClick on Datagrid
    setOpen(true);
  };

  const handleDialogClose = () => setOpen(false);

  const handleConfirm = () => {
    // do something here
    setOpen(false);
  };

  return (
    <Fragment>
      <Button label="Share" onClick={handleClick}><Share /></Button>
      <CustomConfirm {...props}
        isOpen={open}
        title={CustomConfirmTitle}      // your custom title of confirm dialog
        content={CustomConfirmContent}  // your custom contents of confirm dialog
        confirm='Share'                 // label of confirm button (default: 'Confirm')
        confirmColor='primary'          // color of confirm button ('primary' or 'warning', default: 'primary')
        ConfirmIcon={Share}             // icon of confirm button (default: 'ActionCheck')
        cancel='Cancel'                 // label of cancel button (default: 'Cancel')
        CancelIcon={AlertError}         // icon of cancel button (default: 'AlertError')
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
}

const PostList = props => {
  const translate = useTranslate();
  return (
    <List {...props} >
      <Datagrid>
        <TextField source='title' label='title' />
        <TextField source='date' label='date' />
        <TextField source='user' label='user' />
        <ShareButton />
      </Datagrid>
    </List>
  );
};

export default PostList;
```

## License

This library is licensed under the [MIT License](./LICENSE).
