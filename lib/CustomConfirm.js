"use strict";

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

var _compose = _interopRequireDefault(require("recompose/compose"));

var _raCore = require("ra-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return (0, _styles.createStyles)({
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
  });
};

var CustomConfirmContent = function CustomConfirmContent(props) {
  var content = props.content;
  return _react["default"].createElement(content, props);
};
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
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */


var CustomConfirm = /*#__PURE__*/function (_Component) {
  _inherits(CustomConfirm, _Component);

  function CustomConfirm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomConfirm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomConfirm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleConfirm", function (e) {
      e.stopPropagation();

      _this.setState({
        loading: true
      });

      _this.props.onConfirm();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      e.stopPropagation();
    });

    return _this;
  }

  _createClass(CustomConfirm, [{
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          title = _this$props.title,
          confirm = _this$props.confirm,
          cancel = _this$props.cancel,
          confirmColor = _this$props.confirmColor,
          onClose = _this$props.onClose,
          classes = _this$props.classes,
          translate = _this$props.translate,
          _this$props$translate = _this$props.translateOptions,
          translateOptions = _this$props$translate === void 0 ? {} : _this$props$translate;
      var loading = this.state.loading;
      return _react["default"].createElement(_Dialog["default"], {
        open: isOpen,
        onClose: onClose,
        onClick: this.handleClick,
        "aria-labelledby": "alert-dialog-title"
      }, _react["default"].createElement(_DialogTitle["default"], {
        id: "alert-dialog-title"
      }, translate(title, _objectSpread({
        _: title
      }, translateOptions))), _react["default"].createElement(_DialogContent["default"], null, _react["default"].createElement(CustomConfirmContent, this.props)), _react["default"].createElement(_DialogActions["default"], null, _react["default"].createElement(_Button["default"], {
        disabled: loading,
        onClick: onClose
      }, _react["default"].createElement(_ErrorOutline["default"], {
        className: classes.iconPaddingStyle
      }), translate(cancel, {
        _: cancel
      })), _react["default"].createElement(_Button["default"], {
        disabled: loading,
        onClick: this.handleConfirm,
        className: (0, _classnames2["default"])('ra-confirm', (_classnames = {}, _defineProperty(_classnames, classes.confirmWarning, confirmColor === 'warning'), _defineProperty(_classnames, classes.confirmPrimary, confirmColor === 'primary'), _classnames)),
        autoFocus: true
      }, _react["default"].createElement(_CheckCircle["default"], {
        className: classes.iconPaddingStyle
      }), translate(confirm, {
        _: confirm
      }))));
    }
  }]);

  return CustomConfirm;
}(_react.Component);

CustomConfirm.propTypes = {
  cancel: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].object.isRequired,
  confirm: _propTypes["default"].string.isRequired,
  confirmColor: _propTypes["default"].string.isRequired,
  content: _propTypes["default"].element.isRequired,
  isOpen: _propTypes["default"].bool,
  onClose: _propTypes["default"].func.isRequired,
  onConfirm: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string.isRequired,
  translate: _propTypes["default"].func.isRequired
};
CustomConfirm.defaultProps = {
  cancel: 'ra.action.cancel',
  classes: {},
  confirm: 'ra.action.confirm',
  confirmColor: 'primary',
  isOpen: false
};

var _default = (0, _compose["default"])((0, _styles.withStyles)(styles), _raCore.translate)(CustomConfirm);

exports["default"] = _default;