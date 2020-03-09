import React, { Fragment } from 'react';
import {
  Button,
  RichTextField,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

import CustomConfirm from 'ra-custom-confirm';

// Define your custom title of confirm dialog
const CustomConfirmTitle = 'Are you sure you want to do?';

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

const SendButton = ({ selectedIds }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleConfirm = () => {
    // do something here
    setOpen(false);
  };

  return (
    <Fragment>
      <Button label="Send" onClick={handleClick} />
      <CustomConfirm
        isOpen={open}
        loading={loading}
        title={CustomConfirmTitle}      // your custom title of confirm dialog
        content={CustomConfirmContent}  // your custom contents of confirm dialog
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
}

export default SendButton;