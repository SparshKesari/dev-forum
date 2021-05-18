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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
    // case UPDATE_USER:
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       ...payload,
    //     },
    //   };

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
    password,
    save_last_seen
  }) => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json === null || json === void 0 ? void 0 : json.message);

    const {
      token
    } = json,
          user = _objectWithoutProperties(json, ["token"]);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user,
        save_last_seen
      }
    });
  };

  const register = async ({
    name,
    email,
    password,
    save_last_seen
  }) => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json === null || json === void 0 ? void 0 : json.message);

    const {
      token
    } = json,
          user = _objectWithoutProperties(json, ["token"]);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user,
        save_last_seen
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
        register,
        logout
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthStateContext.Provider, {
        value: state,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
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
    register,
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
    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => login({
          email: "j@dfj.com",
          password: "abc123"
        }),
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: () => register({
          name: "sparsh",
          email: "j@dfj.com",
          password: "abc123"
        }),
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, this)]
    }, void 0, true)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC8uL3NyYy9jb250ZXh0L2F1dGguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL0ZvcnVtLUJ1bGxldGluLUJvYXJkL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXV0aERpc3BhdGNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoU3RhdGVDb250ZXh0IiwiTE9HSU5fU1VDQ0VTUyIsIkxPR09VVCIsImluaXRpYWxTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJ0b2tlbiIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiRXJyb3IiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInNhdmVfbGFzdF9zZWVuIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwib2siLCJtZXNzYWdlIiwicmVnaXN0ZXIiLCJuYW1lIiwibG9nb3V0IiwidXNlQXV0aERpc3BhdGNoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VBdXRoU3RhdGUiLCJJbmRleFBhZ2UiLCJjcmVhdGVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxtQkFBbUIsZ0JBQUdDLG9EQUFhLEVBQXpDO0FBQ0EsTUFBTUMsZ0JBQWdCLGdCQUFHRCxvREFBYSxFQUF0QztBQUVBLE1BQU1FLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLE1B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SjtBQUFRLGVBQU8sRUFBRUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSTtBQUFBLG9CQURZLGdCQU1aO0FBQUEsOEJBQ0o7QUFBUSxlQUFPLEVBQUUsTUFDYmhCLEtBQUssQ0FBQztBQUNGQyxlQUFLLEVBQUMsV0FESjtBQUVGQyxrQkFBUSxFQUFDO0FBRlAsU0FBRCxDQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREksZUFRSjtBQUFRLGVBQU8sRUFBRSxNQUNiWSxRQUFRLENBQUM7QUFDTEMsY0FBSSxFQUFDLFFBREE7QUFFTmQsZUFBSyxFQUFDLFdBRkE7QUFHTEMsa0JBQVEsRUFBQztBQUhKLFNBQUQsQ0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJJO0FBQUE7QUFQSixtQkFEQTtBQTRCSCxDOzs7Ozs7Ozs7OztBQ2xDRCxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCx1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEF1dGhEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuY29uc3QgQXV0aFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuY29uc3QgTE9HSU5fU1VDQ0VTUyA9IFwiTE9HSU5fU1VDQ0VTU1wiXHJcbmNvbnN0IExPR09VVCA9IFwiTE9HT1VUXCJcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQgOiBmYWxzZSxcclxuICAgIHVzZXI6bnVsbCxcclxuICAgIHRva2VuOm51bGwsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIHsgcGF5bG9hZCwgdHlwZSB9KSB7XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIExPR0lOX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICAvLyBjYXNlIFVQREFURV9VU0VSOlxyXG4gICAgLy8gICByZXR1cm4ge1xyXG4gICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgLy8gICAgIHVzZXI6IHtcclxuICAgIC8vICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAvLyAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIH07XHJcbiAgICBjYXNlIExPR09VVDpcclxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlICR7dHlwZX1gKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7Y2hpbGRyZW59KXtcclxuICAgIGNvbnN0W3N0YXRlLGRpc3BhdGNoXT11c2VSZWR1Y2VyKHJlZHVjZXIsaW5pdGlhbFN0YXRlKVxyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkLCBzYXZlX2xhc3Rfc2VlbiB9KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvbG9naW5cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihqc29uPy5tZXNzYWdlKTtcclxuXHJcbiAgICBjb25zdCB7IHRva2VuLCAuLi51c2VyIH0gPSBqc29uO1xyXG5cclxuICAgIGRpc3BhdGNoKHsgdHlwZTogTE9HSU5fU1VDQ0VTUywgcGF5bG9hZDogeyB0b2tlbiwgdXNlciwgc2F2ZV9sYXN0X3NlZW4gfSB9KTtcclxuICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgc2F2ZV9sYXN0X3NlZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3JlZ2lzdGVyXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoanNvbj8ubWVzc2FnZSk7XHJcblxyXG4gICAgY29uc3QgeyB0b2tlbiwgLi4udXNlciB9ID0ganNvbjtcclxuXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IExPR0lOX1NVQ0NFU1MsIHBheWxvYWQ6IHsgdG9rZW4sIHVzZXIsIHNhdmVfbGFzdF9zZWVuIH0gfSk7XHJcbiAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgbG9nb3V0PSgpPT5kaXNwYXRjaCh7dHlwZTpMT0dPVVR9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXV0aERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2xvZ2luLHJlZ2lzdGVyLGxvZ291dH19PlxyXG4gICAgICAgICAgICAgICAgPEF1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0F1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvQXV0aERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQXV0aERpc3BhdGNoKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhEaXNwYXRjaENvbnRleHQpO1xyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aERpc3BhdGNoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyXCIpO1xyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQXV0aFN0YXRlKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhTdGF0ZUNvbnRleHQpO1xyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aFN0YXRlIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyXCIpO1xyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG5cclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyLCB1c2VBdXRoRGlzcGF0Y2gsIHVzZUF1dGhTdGF0ZSB9OyIsImltcG9ydCB7IHVzZUF1dGhTdGF0ZSAsdXNlQXV0aERpc3BhdGNofSBmcm9tIFwiLi4vY29udGV4dC9hdXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKXtcclxuICAgIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWQsdXNlcn0gPSB1c2VBdXRoU3RhdGUoKTtcclxuICAgIGNvbnN0IHtsb2dpbixyZWdpc3RlcixjcmVhdGVVc2VyLGxvZ291dH09IHVzZUF1dGhEaXNwYXRjaCgpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPD4gXHJcbiAgICB7aXNBdXRoZW50aWNhdGVkID8oXHJcbiAgICAgICAgPD5cclxuICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9PC9wPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9PmxvZ291dDwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgICApOihcclxuICAgICAgICA8PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+XHJcbiAgICAgICAgbG9naW4oe1xyXG4gICAgICAgICAgICBlbWFpbDpcImpAZGZqLmNvbVwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDpcImFiYzEyM1wiXHJcbiAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5cclxuICAgICAgICByZWdpc3Rlcih7XHJcbiAgICAgICAgICAgIG5hbWU6XCJzcGFyc2hcIixcclxuICAgICAgICAgICBlbWFpbDpcImpAZGZqLmNvbVwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDpcImFiYzEyM1wiXHJcbiAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8Lz5cclxuICAgICl9XHJcbiAgICBcclxuICAgIDwvPilcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9