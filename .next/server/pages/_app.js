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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const AuthDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

function reducer(state, {
  payload,
  type
}) {
  switch (type) {
    case LOGIN_SUCCESS:
      return _objectSpread(_objectSpread(_objectSpread({}, state), payload), {}, {
        isAuthenticated: true
      });

    case LOGOUT:
      return initialState;

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

  const login = async ({
    email,
    password
  }) => {
    const token = "abc123";
    const user = {
      name: 'Sparsh'
    };
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user
      }
    });
  };

  const createUser = async ({
    name,
    email,
    password
  }) => {
    const token = "abc123";
    const user = {
      name: 'Sparsh'
    };
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user
      }
    });
  };

  const logout = () => dispatch({
    type: LOGOUT
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthDispatchContext.Provider, {
      value: {
        login,
        createUser,
        logout
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthStateContext.Provider, {
        value: state,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC8uL3NyYy9jb250ZXh0L2F1dGguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBdXRoRGlzcGF0Y2hDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhTdGF0ZUNvbnRleHQiLCJMT0dJTl9TVUNDRVNTIiwiTE9HT1VUIiwiaW5pdGlhbFN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlciIsInRva2VuIiwicmVkdWNlciIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJFcnJvciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwibmFtZSIsImNyZWF0ZVVzZXIiLCJsb2dvdXQiLCJ1c2VBdXRoRGlzcGF0Y2giLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVuZGVmaW5lZCIsInVzZUF1dGhTdGF0ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLG1CQUFtQixnQkFBR0Msb0RBQWEsRUFBekM7QUFDQSxNQUFNQyxnQkFBZ0IsZ0JBQUdELG9EQUFhLEVBQXRDO0FBRUEsTUFBTUUsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFFBQWY7QUFFQSxNQUFNQyxZQUFZLEdBQUM7QUFDZkMsaUJBQWUsRUFBRyxLQURIO0FBRWZDLE1BQUksRUFBQyxJQUZVO0FBR2ZDLE9BQUssRUFBQztB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bnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQXV0aERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCBBdXRoU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5jb25zdCBMT0dJTl9TVUNDRVNTID0gXCJMT0dJTl9TVUNDRVNTXCJcclxuY29uc3QgTE9HT1VUID0gXCJMT0dPVVRcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIGlzQXV0aGVudGljYXRlZCA6IGZhbHNlLFxyXG4gICAgdXNlcjpudWxsLFxyXG4gICAgdG9rZW46bnVsbCxcclxufVxyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSx7cGF5bG9hZCx0eXBlfSl7XHJcbiAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6dHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HT1VUOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlICR7dHlwZX1gKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoe2NoaWxkcmVufSl7XHJcbiAgICBjb25zdFtzdGF0ZSxkaXNwYXRjaF09dXNlUmVkdWNlcihyZWR1Y2VyLGluaXRpYWxTdGF0ZSlcclxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMoe2VtYWlsLHBhc3N3b3JkfSk9PntcclxuICAgICAgICBjb25zdCB0b2tlbiA9IFwiYWJjMTIzXCI7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtuYW1lIDogJ1NwYXJzaCd9O1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpMT0dJTl9TVUNDRVNTLCBwYXlsb2FkOnt0b2tlbix1c2VyfX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jKHtuYW1lLGVtYWlsLHBhc3N3b3JkfSk9PntcclxuICAgICAgICBjb25zdCB0b2tlbiA9IFwiYWJjMTIzXCI7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtuYW1lIDogJ1NwYXJzaCd9O1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpMT0dJTl9TVUNDRVNTLCBwYXlsb2FkOnt0b2tlbix1c2VyfX0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dvdXQ9KCk9PmRpc3BhdGNoKHt0eXBlOkxPR09VVH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7bG9naW4sY3JlYXRlVXNlcixsb2dvdXR9fT5cclxuICAgICAgICAgICAgICAgIDxBdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9BdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0F1dGhEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUF1dGhEaXNwYXRjaCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoRGlzcGF0Y2hDb250ZXh0KTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhEaXNwYXRjaCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcclxuICByZXR1cm4gY29udGV4dDtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUF1dGhTdGF0ZSgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoU3RhdGVDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aFN0YXRlIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyXCIpO1xyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG5cclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyLCB1c2VBdXRoRGlzcGF0Y2gsIHVzZUF1dGhTdGF0ZSB9OyIsImltcG9ydCAnLi4vc3R5bGVzL2FwcC5jc3MnXHJcbmltcG9ydCB7QXV0aFByb3ZpZGVyfSBmcm9tIFwiLi4vY29udGV4dC9hdXRoLmpzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuIFxyXG4gXHJcbiAgICByZXR1cm4gIChcclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0F1dGhQcm92aWRlcj5cclxuICAgICkgICBcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=