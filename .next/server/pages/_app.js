(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/auth.js":
/*!*****************************!*\
  !*** ./src/context/auth.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": function() { return /* binding */ AuthProvider; },
/* harmony export */   "useAuthDispatch": function() { return /* binding */ useAuthDispatch; },
/* harmony export */   "useAuthState": function() { return /* binding */ useAuthState; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\Sparsh\\Desktop\\Forum-Bulletin-Board\\src\\context\\auth.js";

const AuthDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const initialState = {
  isAuthenticated: true
};

function reducer(state, {
  payload,
  type
}) {
  switch (type) {
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
}

function AuthProvider({
  children
}) {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthDispatchContext.Provider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthStateContext.Provider, {
        value: state,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

function useAuthDispatch() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthDispatchContext);
  if (context === undefined) throw new Error("useAuthDispatch must be used within an AuthProvider");
  return context;
}

function useAuthState() {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthStateContext);
  if (context === undefined) throw new Error("useAuthState must be used within an AuthProvider");
  return context;
}



/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/app.css */ "./src/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth.js */ "./src/context/auth.js");

var _jsxFileName = "C:\\Users\\Sparsh\\Desktop\\Forum-Bulletin-Board\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_auth_js__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/styles/app.css":
/*!****************************!*\
  !*** ./src/styles/app.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC8uL3NyYy9jb250ZXh0L2F1dGguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBdXRoRGlzcGF0Y2hDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhTdGF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJwYXlsb2FkIiwidHlwZSIsIkVycm9yIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ1c2VBdXRoRGlzcGF0Y2giLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVuZGVmaW5lZCIsInVzZUF1dGhTdGF0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsbUJBQW1CLGdCQUFHQyxvREFBYSxFQUF6QztBQUNBLE1BQU1DLGdCQUFnQixnQkFBR0Qsb0RBQWEsRUFBdEM7QUFFQSxNQUFNRSxZQUFZLEdBQUM7QUFDZkMsaUJBQWUsRUFBRTtBQURGLENBQW5COztBQUlBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXVCO0FBQUNDLFNBQUQ7QUFBU0M7QUFBVCxDQUF2QixFQUFzQztBQUNsQyxVQUFPQSxJQUFQO0FBQ0k7QUFDSSxZQUFNLElBQUlDLEtBQUosQ0FBVyx5QkFBd0JELElBQUssRUFBeEMsQ0FBTjtBQUZSO0FBSUg7O0FBRUQsU0FBU0UsWUFBVCxDQUFzQjtBQUFDQztBQUFELENBQXRCLEVBQWlDO0FBQzdCLFFBQUs7QUFBQSxPQUFDTCxLQUFEO0FBQUEsT0FBT007QUFBUCxNQUFpQkMsaURBQVUsQ0FBQ1IsT0FBRCxFQUFTRixZQUFULENBQWhDO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSSw4REFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUFBLDZCQUNJLDhEQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLGFBQUssRUFBRUcsS0FBbEM7QUFBQSxrQkFDS0s7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBU0g7O0FBRUQsU0FBU0csZUFBVCxHQUEyQjtBQUN6QixRQUFNQyxPQUFPLEdBQUdDLGlEQUFVLENBQUNoQixtQkFBRCxDQUExQjtBQUVBLE1BQUllLE9BQU8sS0FBS0UsU0FBaEIsRUFDRSxNQUFNLElBQUlSLEtBQUosQ0FBVSxxREFBVixDQUFOO0FBQ0YsU0FBT00sT0FBUDtBQUVEOztBQUVELFNBQVNHLFlBQVQsR0FBd0I7QUFDdEIsUUFBTUgsT0FBTyxHQUFHQyxpREFBVSxDQUFDZCxnQkFBRCxDQUExQjtBQUNBLE1BQUlhLE9BQU8sS0FBS0UsU0FBaEIsRUFDRSxNQUFNLElBQUlSLEtBQUosQ0FBVSxrREFBVixDQUFOO0FBRUYsU0FBT00sT0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNEO0FBQ0E7QUFHZSxTQUFTSSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFHcEQsc0JBQ0EsOERBQUMsMERBQUQ7QUFBQSwyQkFDQSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFLSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRCxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQXV0aERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCBBdXRoU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgaXNBdXRoZW50aWNhdGVkIDp0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUse3BheWxvYWQsdHlwZX0pe1xyXG4gICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlICR7dHlwZX1gKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoe2NoaWxkcmVufSl7XHJcbiAgICBjb25zdFtzdGF0ZSxkaXNwYXRjaF09dXNlUmVkdWNlcihyZWR1Y2VyLGluaXRpYWxTdGF0ZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXV0aERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciA+XHJcbiAgICAgICAgICAgICAgICA8QXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9BdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdXRoRGlzcGF0Y2goKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aERpc3BhdGNoQ29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBdXRoRGlzcGF0Y2ggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXJcIik7XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdXRoU3RhdGUoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aFN0YXRlQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhTdGF0ZSBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aERpc3BhdGNoLCB1c2VBdXRoU3RhdGUgfTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJ1xyXG5pbXBvcnQge0F1dGhQcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aC5qc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiBcclxuIFxyXG4gICAgcmV0dXJuICAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICApICAgXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9