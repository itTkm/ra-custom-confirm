"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _ErrorOutline = _interopRequireDefault(require("@material-ui/icons/ErrorOutline"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _raCore = require("ra-core");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    contentText: {
      minWidth: 400
    },
    confirmPrimary: {
      color: theme.palette.primary.main
    },
    confirmWarning: {
      color: theme.palette.error.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.error.main, 0.12),
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    iconPaddingStyle: {
      paddingRight: '0.5em'
    }
  };
}, {
  name: 'RaConfirm'
});

var ConfirmContent = function ConfirmContent(props) {
  var content = props.content;
  return _react["default"].createElement(content, props);
};
/**
 * Confirmation dialog
 *
 * @example
 * <CustomConfirm
 *     isOpen={true}
 *     title="Are you sure you want to do?"
 *     content={YourCustomConfirmContent}
 *     confirm="Yes"
 *     confirmColor="primary"
 *     ConfirmIcon=ActionCheck
 *     CancelIcon=AlertError
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */


var CustomConfirm = function CustomConfirm(_ref) {
  var _classnames;

  var isOpen = _ref.isOpen,
      loading = _ref.loading,
      title = _ref.title,
      confirm = _ref.confirm,
      cancel = _ref.cancel,
      confirmColor = _ref.confirmColor,
      ConfirmIcon = _ref.ConfirmIcon,
      CancelIcon = _ref.CancelIcon,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm,
      classesOverride = _ref.classes,
      _ref$translateOptions = _ref.translateOptions,
      translateOptions = _ref$translateOptions === void 0 ? {} : _ref$translateOptions;
  var classes = useStyles({
    classes: classesOverride
  });
  var translate = (0, _raCore.useTranslate)();
  var handleConfirm = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    onConfirm();
  }, [onConfirm]);
  var handleClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
  }, []);
  return _react["default"].createElement(_Dialog["default"], {
    open: isOpen,
    onClose: onClose,
    onClick: handleClick,
    "aria-labelledby": "alert-dialog-title"
  }, _react["default"].createElement(_DialogTitle["default"], {
    id: "alert-dialog-title"
  }, translate(title, _objectSpread({
    _: title
  }, translateOptions))), _react["default"].createElement(_DialogContent["default"], null, _react["default"].createElement(ConfirmContent, _this.props)), _react["default"].createElement(_DialogActions["default"], null, _react["default"].createElement(_Button["default"], {
    disabled: loading,
    onClick: onClose
  }, _react["default"].createElement(CancelIcon, {
    className: classes.iconPaddingStyle
  }), translate(cancel, {
    _: cancel
  })), _react["default"].createElement(_Button["default"], {
    disabled: loading,
    onClick: handleConfirm,
    className: (0, _classnames2["default"])('ra-confirm', (_classnames = {}, _defineProperty(_classnames, classes.confirmWarning, confirmColor === 'warning'), _defineProperty(_classnames, classes.confirmPrimary, confirmColor === 'primary'), _classnames)),
    autoFocus: true
  }, _react["default"].createElement(ConfirmIcon, {
    className: classes.iconPaddingStyle
  }), translate(confirm, {
    _: confirm
  }))));
};

CustomConfirm.propTypes = {
  cancel: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].object,
  confirm: _propTypes["default"].string.isRequired,
  confirmColor: _propTypes["default"].string.isRequired,
  ConfirmIcon: _propTypes["default"].elementType.isRequired,
  CancelIcon: _propTypes["default"].elementType.isRequired,
  content: _propTypes["default"].element.isRequired,
  isOpen: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  onClose: _propTypes["default"].func.isRequired,
  onConfirm: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string.isRequired
};
CustomConfirm.defaultProps = {
  cancel: 'ra.action.cancel',
  classes: {},
  confirm: 'ra.action.confirm',
  confirmColor: 'primary',
  ConfirmIcon: _CheckCircle["default"],
  CancelIcon: _ErrorOutline["default"],
  isOpen: false
};
var _default = CustomConfirm;
exports["default"] = _default;