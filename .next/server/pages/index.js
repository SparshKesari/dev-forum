(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/auth */ "./src/context/auth.js");



function IndexPage() {
  const {
    isAuthenticated
  } = (0,_context_auth__WEBPACK_IMPORTED_MODULE_1__.useAuthState)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [" ", isAuthenticated ? "Hello User" : "Hello Guest"]
  }, void 0, true);
}

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC8uL3NyYy9jb250ZXh0L2F1dGguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL0ZvcnVtLUJ1bGxldGluLUJvYXJkL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXV0aERpc3BhdGNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoU3RhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwicmVkdWNlciIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJFcnJvciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwidXNlQXV0aERpc3BhdGNoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VBdXRoU3RhdGUiLCJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxtQkFBbUIsZ0JBQUdDLG9EQUFhLEVBQXpDO0FBQ0EsTUFBTUMsZ0JBQWdCLGdCQUFHRCxvREFBYSxFQUF0QztBQUVBLE1BQU1FLFlBQVksR0FBQztBQUNmQyxpQkFBZSxFQUFFO0FBREYsQ0FBbkI7O0FBSUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBdUI7QUFBQ0MsU0FBRDtBQUFTQztBQUFULENBQXZCLEVBQXNDO0FBQ2xDLFVBQU9BLElBQVA7QUFDSTtBQUNJLFlBQU0sSUFBSUMsS0FBSixDQUFXLHlCQUF3QkQsSUFBSyxFQUF4QyxDQUFOO0FBRlI7QUFJSDs7QUFFRCxTQUFTRSxZQUFULENBQXNCO0FBQUNDO0FBQUQsQ0FBdEIsRUFBaUM7QUFDN0IsUUFBSztBQUFBLE9BQUNMLEtBQUQ7QUFBQSxPQUFPTTtBQUFQLE1BQWlCQyxpREFBVSxDQUFDUixPQUFELEVBQVNGLFlBQVQsQ0FBaEM7QUFDQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLG1CQUFELENBQXFCLFFBQXJCO0FBQUEsNkJBQ0ksOERBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsYUFBSyxFQUFFRyxLQUFsQztBQUFBLGtCQUNLSztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFTSDs7QUFFRCxTQUFTRyxlQUFULEdBQTJCO0FBQ3pCLFFBQU1DLE9BQU8sR0FBR0MsaURBQVUsQ0FBQ2hCLG1CQUFELENBQTFCO0FBRUEsTUFBSWUsT0FBTyxLQUFLRSxTQUFoQixFQUNFLE1BQU0sSUFBSVIsS0FBSixDQUFVLHFEQUFWLENBQU47QUFDRixTQUFPTSxPQUFQO0FBRUQ7O0FBRUQsU0FBU0csWUFBVCxHQUF3QjtBQUN0QixRQUFNSCxPQUFPLEdBQUdDLGlEQUFVLENBQUNkLGdCQUFELENBQTFCO0FBQ0EsTUFBSWEsT0FBTyxLQUFLRSxTQUFoQixFQUNFLE1BQU0sSUFBSVIsS0FBSixDQUFVLGtEQUFWLENBQU47QUFFRixTQUFPTSxPQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0Q7QUFFZSxTQUFTSSxTQUFULEdBQW9CO0FBQy9CLFFBQU07QUFBQ2Y7QUFBRCxNQUFvQmMsMkRBQVksRUFBdEM7QUFDQSxzQkFDQTtBQUFBLG9CQUFJZCxlQUFlLEdBQUUsWUFBRixHQUFlLGFBQWxDO0FBQUEsa0JBREE7QUFFSCxDOzs7Ozs7Ozs7OztBQ05ELG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQXV0aERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCBBdXRoU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgaXNBdXRoZW50aWNhdGVkIDp0cnVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUse3BheWxvYWQsdHlwZX0pe1xyXG4gICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlICR7dHlwZX1gKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoe2NoaWxkcmVufSl7XHJcbiAgICBjb25zdFtzdGF0ZSxkaXNwYXRjaF09dXNlUmVkdWNlcihyZWR1Y2VyLGluaXRpYWxTdGF0ZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXV0aERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciA+XHJcbiAgICAgICAgICAgICAgICA8QXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9BdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdXRoRGlzcGF0Y2goKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aERpc3BhdGNoQ29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBdXRoRGlzcGF0Y2ggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXJcIik7XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdXRoU3RhdGUoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aFN0YXRlQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhTdGF0ZSBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aERpc3BhdGNoLCB1c2VBdXRoU3RhdGUgfTsiLCJpbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKXtcclxuICAgIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWR9ID0gdXNlQXV0aFN0YXRlKCk7XHJcbiAgICByZXR1cm4oXHJcbiAgICA8PiB7aXNBdXRoZW50aWNhdGVkID9cIkhlbGxvIFVzZXJcIjpcIkhlbGxvIEd1ZXN0XCJ9PC8+KVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=