import React, { Component } from 'react';
import { Button } from 'react-admin';
import { translate } from 'ra-core';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ActionCheck from '@material-ui/icons/CheckCircle';
import AlertError from '@material-ui/icons/ErrorOutline';

const styles = theme =>
  createStyles({
    contentText: {
      minWidth: 400,
    },
    confirmPrimary: {
      color: theme.palette.primary.main,
    },
    confirmWarning: {
      color: theme.palette.error.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.error.main, 0.12),
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
    iconPaddingStyle: {
      paddingRight: '0.5em',
    },
  });

const CustomConfirmContent = (props) => {
  const { content } = props;
  return React.createElement(content, props);
}

/**
 * Confirmation dialog
 *
 * @example
 * <CustomConfirm
 *     isOpen={true}
 *     title="Are you sure to do?"
 *     content={YourCustomConfirmContent}
 *     confirm="Yes"
 *     confirmColor="primary"
 *     ConfirmIcon={ActionCheck}
 *     cancel="Cancel"
 *     CancelIcon={AlertError}
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
class CustomConfirm extends Component {
  state = { loading: false };

  handleConfirm = e => {
    e.stopPropagation();
    this.setState({ loading: true });
    this.props.onConfirm(e);
    this.setState({ loading: false });
  };

  handleClick = e => {
    e.stopPropagation();
  };

  render() {
    const {
      isOpen,
      title,
      confirm,
      cancel,
      confirmColor,
      ConfirmIcon,
      CancelIcon,
      onClose,
      classes,
      translate,
      translateOptions = {},
    } = this.props;
    const { loading } = this.state;

    return (
      <Dialog
        fullWidth
        open={isOpen}
        onClose={onClose}
        onClick={this.handleClick}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {translate(title, { _: title, ...translateOptions })}
        </DialogTitle>
        <DialogContent>
          <CustomConfirmContent {...this.props} />
        </DialogContent>
        <DialogActions>
          <Button
            label={cancel}
            disabled={loading}
            onClick={onClose}
          >
            <CancelIcon className={classes.iconPaddingStyle} />
          </Button>
          <Button
            label={confirm}
            disabled={loading}
            onClick={this.handleConfirm}
            className={classnames('ra-confirm', {
              [classes.confirmWarning]:
                confirmColor === 'warning',
              [classes.confirmPrimary]:
                confirmColor === 'primary',
            })}
            autoFocus
          >
            <ConfirmIcon className={classes.iconPaddingStyle} />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

CustomConfirm.propTypes = {
  cancel: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  confirm: PropTypes.string.isRequired,
  confirmColor: PropTypes.string.isRequired,
  ConfirmIcon: PropTypes.elementType.isRequired,
  CancelIcon: PropTypes.elementType.isRequired,
  content: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
};

CustomConfirm.defaultProps = {
  cancel: 'ra.action.cancel',
  CancelIcon: AlertError,
  classes: {},
  confirm: 'ra.action.confirm',
  confirmColor: 'primary',
  ConfirmIcon: ActionCheck,
  isOpen: false,
};

export default compose(
  withStyles(styles),
  translate
)(CustomConfirm);