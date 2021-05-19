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
/* harmony import */ var use_persisted_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-persisted-state */ "use-persisted-state");
/* harmony import */ var use_persisted_state__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_persisted_state__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Sparsh\\Desktop\\Forum-Bulletin-Board\\src\\context\\auth.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const AuthDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const usePersistedAuthState = use_persisted_state__WEBPACK_IMPORTED_MODULE_2___default()("forum-auth");
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
  const [savedAuthState, saveAuthState] = usePersistedAuthState(initialState);
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, savedAuthState);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    saveAuthState(state);
  }, [state, saveAuthState]);

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
        lineNumber: 96,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
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

/***/ }),

/***/ "use-persisted-state":
/*!**************************************!*\
  !*** external "use-persisted-state" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("use-persisted-state");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC8uL3NyYy9jb250ZXh0L2F1dGguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC9leHRlcm5hbCBcInVzZS1wZXJzaXN0ZWQtc3RhdGVcIiJdLCJuYW1lcyI6WyJBdXRoRGlzcGF0Y2hDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhTdGF0ZUNvbnRleHQiLCJ1c2VQZXJzaXN0ZWRBdXRoU3RhdGUiLCJjcmVhdGVQZXJzaXN0ZWRTdGF0ZSIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dPVVQiLCJpbml0aWFsU3RhdGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwidG9rZW4iLCJyZWR1Y2VyIiwic3RhdGUiLCJwYXlsb2FkIiwidHlwZSIsIkVycm9yIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzYXZlZEF1dGhTdGF0ZSIsInNhdmVBdXRoU3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzYXZlX2xhc3Rfc2VlbiIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsIm9rIiwibWVzc2FnZSIsInJlZ2lzdGVyIiwibmFtZSIsImxvZ291dCIsInVzZUF1dGhEaXNwYXRjaCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidW5kZWZpbmVkIiwidXNlQXV0aFN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFw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MUI7QUFFQSxNQUFJdUMsT0FBTyxLQUFLRSxTQUFoQixFQUNFLE1BQU0sSUFBSTVCLEtBQUosQ0FBVSxrREFBVixDQUFOO0FBRUYsU0FBTzBCLE9BQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIRDtBQUNBO0FBR2UsU0FBU0ksS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBR3BELHNCQUNBLDhEQUFDLDBEQUFEO0FBQUEsMkJBQ0EsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBS0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCx1c2VSZWR1Y2VyLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY3JlYXRlUGVyc2lzdGVkU3RhdGUgZnJvbSBcInVzZS1wZXJzaXN0ZWQtc3RhdGVcIjtcclxuXHJcblxyXG5jb25zdCBBdXRoRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcbmNvbnN0IEF1dGhTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmNvbnN0IHVzZVBlcnNpc3RlZEF1dGhTdGF0ZSA9IGNyZWF0ZVBlcnNpc3RlZFN0YXRlKFwiZm9ydW0tYXV0aFwiKTtcclxuXHJcblxyXG5jb25zdCBMT0dJTl9TVUNDRVNTID0gXCJMT0dJTl9TVUNDRVNTXCJcclxuY29uc3QgTE9HT1VUID0gXCJMT0dPVVRcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIGlzQXV0aGVudGljYXRlZCA6IGZhbHNlLFxyXG4gICAgdXNlcjpudWxsLFxyXG4gICAgdG9rZW46bnVsbCxcclxufVxyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyBwYXlsb2FkLCB0eXBlIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIC8vIGNhc2UgVVBEQVRFX1VTRVI6XHJcbiAgICAvLyAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgLi4uc3RhdGUsXHJcbiAgICAvLyAgICAgdXNlcjoge1xyXG4gICAgLy8gICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgIC8vICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgfTtcclxuICAgIGNhc2UgTE9HT1VUOlxyXG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGUgJHt0eXBlfWApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc2F2ZWRBdXRoU3RhdGUsIHNhdmVBdXRoU3RhdGVdID0gdXNlUGVyc2lzdGVkQXV0aFN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHNhdmVkQXV0aFN0YXRlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNhdmVBdXRoU3RhdGUoc3RhdGUpO1xyXG4gIH0sIFtzdGF0ZSwgc2F2ZUF1dGhTdGF0ZV0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCwgc2F2ZV9sYXN0X3NlZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2xvZ2luXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoanNvbj8ubWVzc2FnZSk7XHJcblxyXG4gICAgY29uc3QgeyB0b2tlbiwgLi4udXNlciB9ID0ganNvbjtcclxuXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IExPR0lOX1NVQ0NFU1MsIHBheWxvYWQ6IHsgdG9rZW4sIHVzZXIsIHNhdmVfbGFzdF9zZWVuIH0gfSk7XHJcbiAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHNhdmVfbGFzdF9zZWVuIH0pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9yZWdpc3RlclwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGpzb24/Lm1lc3NhZ2UpO1xyXG5cclxuICAgIGNvbnN0IHsgdG9rZW4sIC4uLnVzZXIgfSA9IGpzb247XHJcblxyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBMT0dJTl9TVUNDRVNTLCBwYXlsb2FkOiB7IHRva2VuLCB1c2VyLCBzYXZlX2xhc3Rfc2VlbiB9IH0pO1xyXG4gIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGxvZ291dD0oKT0+ZGlzcGF0Y2goe3R5cGU6TE9HT1VUfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEF1dGhEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tsb2dpbixyZWdpc3Rlcixsb2dvdXR9fT5cclxuICAgICAgICAgICAgICAgIDxBdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9BdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0F1dGhEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUF1dGhEaXNwYXRjaCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoRGlzcGF0Y2hDb250ZXh0KTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhEaXNwYXRjaCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUF1dGhTdGF0ZSgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoU3RhdGVDb250ZXh0KTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhTdGF0ZSBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aERpc3BhdGNoLCB1c2VBdXRoU3RhdGUgfTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJ1xyXG5pbXBvcnQge0F1dGhQcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aC5qc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiBcclxuIFxyXG4gICAgcmV0dXJuICAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICApICAgXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1c2UtcGVyc2lzdGVkLXN0YXRlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9