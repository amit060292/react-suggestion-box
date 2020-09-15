"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("bootstrap/dist/css/bootstrap.min.css");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var style = {
  app: {
    position: 'relative',
    margin: '8px auto'
  },
  dropdown: {
    position: 'relative',
    zIndex: 1
  },
  selectedItem: {
    position: 'absolute',
    top: 'calc(1.5em + .75rem + 4px)',
    width: 'inherit'
  }
};
App.propTypes = {
  inputValue: _propTypes.default.string.isRequired,
  onInputChange: _propTypes.default.func.isRequired,
  data: _propTypes.default.array.isRequired,
  onItemSelect: _propTypes.default.func.isRequired
};

function App(_ref) {
  var inputValue = _ref.inputValue,
      onInputChange = _ref.onInputChange,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      onItemSelect = _ref.onItemSelect;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      suggestionList = _useState2[0],
      updateSuggestionList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showSuggestion = _useState4[0],
      toggleSuggestionList = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedItem = _useState6[0],
      updateSelectedItem = _useState6[1];

  (0, _react.useEffect)(function () {
    if (data.length) {
      toggleSuggestionList(true);
      updateSuggestionList(data);
    } else {
      toggleSuggestionList(false);
    }
  }, [data]);

  var removeItem = function removeItem(item) {
    var index = selectedItem.findIndex(function (list) {
      return list.value === item.value;
    });

    if (index !== -1) {
      var newList = _toConsumableArray(selectedItem);

      newList.splice(index, 1);
      updateSelectedItem(newList);
    }
  };

  var handleSelectSuggestion = function handleSelectSuggestion(suggestion) {
    toggleSuggestionList(false);
    updateSelectedItem([].concat(_toConsumableArray(selectedItem), [suggestion]));
    onItemSelect && onItemSelect([].concat(_toConsumableArray(selectedItem), [suggestion]));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: style.app
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
    as: "input",
    type: "text",
    value: inputValue,
    onChange: function onChange(e) {
      return onInputChange(e.target.value);
    }
  }), suggestionList.length && showSuggestion ? /*#__PURE__*/_react.default.createElement("div", {
    style: style.dropdown
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup, null, suggestionList.map(function (suggestion, index) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.ListGroup.Item, {
      action: true,
      active: selectedItem.filter(function (item) {
        return item.value === suggestion.value;
      })[0],
      key: index,
      onClick: function onClick() {
        return handleSelectSuggestion(suggestion);
      }
    }, suggestion.label);
  }))) : null), selectedItem.length ? /*#__PURE__*/_react.default.createElement("div", {
    style: style.selectedItem
  }, selectedItem.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: item.value,
      onClick: function onClick() {
        return removeItem(item);
      },
      style: {
        margin: '8px',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Badge, {
      variant: "secondary"
    }, "".concat(item.label)));
  })) : null);
}

var _default = App;
exports.default = _default;