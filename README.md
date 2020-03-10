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

## Usage

```js
import React, { Fragment, useState } from 'react';
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

const SendEmailButton = ({ selectedIds }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();    // support with rowClick on Datagrid
    setOpen(true);
  };

  const handleDialogClose = () => setOpen(false);

  const handleConfirm = () => {
    // do something here
    console.log('Confirmed!!!!');
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

const InformationList = props => {
  const translate = useTranslate();
  return (
    <List {...props} >
      <Datagrid>
        <TextField source='title' label='title' />
        <TextField source='date' label='date' />
        <TextField source='user' label='user' />
        <SendEmailButton />
      </Datagrid>
    </List>
  );
};

export default InformationList;
```

## License

This library is licensed under the [MIT License](./LICENSE).
