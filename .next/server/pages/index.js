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


var _jsxFileName = "C:\\Users\\Sparsh\\Desktop\\Forum-Bulletin-Board\\src\\pages\\index.js";

function IndexPage() {
  const {
    isAuthenticated,
    user
  } = (0,_context_auth__WEBPACK_IMPORTED_MODULE_1__.useAuthState)();
  const {
    login,
    createUser,
    logout
  } = (0,_context_auth__WEBPACK_IMPORTED_MODULE_1__.useAuthDispatch)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: isAuthenticated ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Hello ", user.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: logout,
        children: "logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, this)]
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: () => login({
        email: "j@j.com",
        password: "abc123"
      }),
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 8
    }, this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC8uL3NyYy9jb250ZXh0L2F1dGguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL0ZvcnVtLUJ1bGxldGluLUJvYXJkL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXV0aERpc3BhdGNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoU3RhdGVDb250ZXh0IiwiTE9HSU5fU1VDQ0VTUyIsIkxPR09VVCIsImluaXRpYWxTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJ0b2tlbiIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiRXJyb3IiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsIm5hbWUiLCJjcmVhdGVVc2VyIiwibG9nb3V0IiwidXNlQXV0aERpc3BhdGNoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VBdXRoU3RhdGUiLCJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsbUJBQW1CLGdCQUFHQyxvREFBYSxFQUF6QztBQUNBLE1BQU1DLGdCQUFnQixnQkFBR0Qsb0RBQWEsRUFBdEM7QUFFQSxNQUFNRSxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUVBLE1BQU1DLFlBQVksR0FBQztBQUNmQyxpQkFBZSxFQUFHLEtBREg7QUFFZkMsTUFBSSxFQUFDLElBRlU7QUFHZkMsT0FBSyxFQUFDO0FBSFMsQ0FBbkI7O0FBTUEsU0FB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QUFBO0FBQUE7QUFBQTtBQUFBLGNBRkk7QUFBQSxvQkFEWSxnQkFLYjtBQUFRLGFBQU8sRUFBRSxNQUNoQkwsS0FBSyxDQUFDO0FBQ0ZDLGFBQUssRUFBQyxTQURKO0FBRUZDLGdCQUFRLEVBQUM7QUFGUCxPQUFELENBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSCxtQkFEQTtBQWdCSCxDOzs7Ozs7Ozs7OztBQ3RCRCxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCx1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEF1dGhEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuY29uc3QgQXV0aFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuY29uc3QgTE9HSU5fU1VDQ0VTUyA9IFwiTE9HSU5fU1VDQ0VTU1wiXHJcbmNvbnN0IExPR09VVCA9IFwiTE9HT1VUXCJcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQgOiBmYWxzZSxcclxuICAgIHVzZXI6bnVsbCxcclxuICAgIHRva2VuOm51bGwsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUse3BheWxvYWQsdHlwZX0pe1xyXG4gICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkOnRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIExPR09VVDpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZSAke3R5cGV9YClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtjaGlsZHJlbn0pe1xyXG4gICAgY29uc3Rbc3RhdGUsZGlzcGF0Y2hdPXVzZVJlZHVjZXIocmVkdWNlcixpbml0aWFsU3RhdGUpXHJcbiAgICBjb25zdCBsb2dpbiA9IGFzeW5jKHtlbWFpbCxwYXNzd29yZH0pPT57XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBcImFiYzEyM1wiO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7bmFtZSA6ICdTcGFyc2gnfTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6TE9HSU5fU1VDQ0VTUywgcGF5bG9hZDp7dG9rZW4sdXNlcn19KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVVzZXIgPSBhc3luYyh7bmFtZSxlbWFpbCxwYXNzd29yZH0pPT57XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBcImFiYzEyM1wiO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7bmFtZSA6ICdTcGFyc2gnfTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6TE9HSU5fU1VDQ0VTUywgcGF5bG9hZDp7dG9rZW4sdXNlcn19KVxyXG4gICAgfVxyXG4gICAgY29uc3QgbG9nb3V0PSgpPT5kaXNwYXRjaCh7dHlwZTpMT0dPVVR9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXV0aERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2xvZ2luLGNyZWF0ZVVzZXIsbG9nb3V0fX0+XHJcbiAgICAgICAgICAgICAgICA8QXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9BdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdXRoRGlzcGF0Y2goKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aERpc3BhdGNoQ29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBdXRoRGlzcGF0Y2ggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXJcIik7XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdXRoU3RhdGUoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aFN0YXRlQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhTdGF0ZSBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aERpc3BhdGNoLCB1c2VBdXRoU3RhdGUgfTsiLCJpbXBvcnQgeyB1c2VBdXRoU3RhdGUgLHVzZUF1dGhEaXNwYXRjaH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCl7XHJcbiAgICBjb25zdCB7aXNBdXRoZW50aWNhdGVkLHVzZXJ9ID0gdXNlQXV0aFN0YXRlKCk7XHJcbiAgICBjb25zdCB7bG9naW4sY3JlYXRlVXNlcixsb2dvdXR9PSB1c2VBdXRoRGlzcGF0Y2goKVxyXG5cclxuICAgIHJldHVybihcclxuICAgIDw+IFxyXG4gICAge2lzQXV0aGVudGljYXRlZCA/KFxyXG4gICAgICAgIDw+XHJcbiAgICA8cD5IZWxsbyB7dXNlci5uYW1lfTwvcD5cclxuICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT5sb2dvdXQ8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICAgKTooPGJ1dHRvbiBvbkNsaWNrPXsoKT0+XHJcbiAgICAgICAgbG9naW4oe1xyXG4gICAgICAgICAgICBlbWFpbDpcImpAai5jb21cIixcclxuICAgICAgICAgICAgcGFzc3dvcmQ6XCJhYmMxMjNcIlxyXG4gICAgICAgIH0pfT5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgIDwvYnV0dG9uPil9XHJcbiAgICBcclxuICAgIDwvPilcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9