"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FileUploader =
/*#__PURE__*/
function (_Component) {
  _inherits(FileUploader, _Component);

  function FileUploader(props) {
    var _this;

    _classCallCheck(this, FileUploader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FileUploader).call(this, props));
    _this.fileType = _this.props.fileType !== undefined ? _this.props.fileType : [];

    _this.onChangeFile = function (e) {
      var file = e.target.files[0];

      if (_this.extensionValidation(file)) {
        _this.setState({
          errorMgs: null,
          fileName: file !== undefined ? file.name : "",
          error: false
        }, function () {
          return _this.sizeValidation(file);
        });
      } else {
        _this.setState({
          error: true,
          fileName: file !== undefined ? file.name : "",
          errorMgs: _this.props.extErrorMsg !== undefined ? _this.props.extErrorMsg : "Choose a file with correct extension"
        });
      }
    };

    _this.extensionValidation = function (val) {
      var extension = val != undefined ? val.name.split(".").pop() : null;
      return _this.fileType.length > 0 ? _this.fileType.includes(extension) : true;
    };

    _this.sizeValidation = function (val) {
      var _this$props = _this.props,
          name = _this$props.name,
          onSelectFile = _this$props.onSelectFile,
          maxSize = _this$props.maxSize,
          sizeErrorMsg = _this$props.sizeErrorMsg;
      var mxSize = maxSize > 0 ? maxSize * 1000 : 0;

      if (val.size > mxSize) {
        _this.setState({
          errorMgs: sizeErrorMsg !== undefined ? sizeErrorMsg : "max size is ".concat(mxSize, " KB"),
          error: true
        });

        return;
      } else {
        _this.setState({
          errorMgs: null,
          error: false
        }, function () {
          onSelectFile({
            name: name ? name : "",
            value: val
          });
        });
      }

      return;
    };

    _this.state = {
      fileName: null,
      error: false,
      errorMgs: null
    };
    return _this;
  } // fileType = ["xls", "pdf", "doc", "docx", "xlsx"];


  _createClass(FileUploader, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          errorMgs = _this$state.errorMgs,
          fileName = _this$state.fileName;
      return _react["default"].createElement("div", {
        className: "form-group f-part-row-cont"
      }, _react["default"].createElement("div", {
        className: "d-flex flex-column"
      }, ">", _react["default"].createElement("div", {
        className: "f-cont-wrap"
      }, _react["default"].createElement("input", {
        className: "inputfile inputfile-1",
        style: {
          display: "none"
        },
        type: "file",
        id: "file",
        accept: this.fileType,
        onChange: this.onChangeFile
      }), _react["default"].createElement("label", {
        htmlFor: "file",
        className: "btn btn-outline-primary m-0"
      }, "Browse"), " ", _react["default"].createElement("label", {
        className: "form-control file-name"
      }, _react["default"].createElement("span", {
        className: "file-name-text"
      }, fileName))), _react["default"].createElement("div", {
        className: "error-message"
      }, errorMgs && error && _react["default"].createElement("span", {
        className: "error-message-text"
      }, errorMgs))));
    }
  }]);

  return FileUploader;
}(_react.Component);

exports["default"] = FileUploader;
