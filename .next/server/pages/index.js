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
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
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
        user
      }
    });
  };

  const register = async ({
    name,
    email,
    password
  }) => {
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
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
        register,
        logout
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthStateContext.Provider, {
        value: state,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC8uL3NyYy9jb250ZXh0L2F1dGguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL0ZvcnVtLUJ1bGxldGluLUJvYXJkL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXV0aERpc3BhdGNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoU3RhdGVDb250ZXh0IiwiTE9HSU5fU1VDQ0VTUyIsIkxPR09VVCIsImluaXRpYWxTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJ0b2tlbiIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiRXJyb3IiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsIm9rIiwibWVzc2FnZSIsInJlZ2lzdGVyIiwibmFtZSIsImxvZ291dCIsInVzZUF1dGhEaXNwYXRjaCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwidW5kZWZpbmVkIiwidXNlQXV0aFN0YXRlIiwiSW5kZXhQYWdlIiwiY3JlYXRlVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsbUJBQW1CLGdCQUFHQyxvREFBYSxFQUF6QztBQUNBLE1BQU1DLGdCQUFnQixnQkFBR0Qsb0RBQWEsRUFBdEM7QUFFQSxNQUFNRSxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUVB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LGdCQUFRLEVBQUM7QUFGUCxPQUFELENBRE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSCxtQkFEQTtBQWdCSCxDOzs7Ozs7Ozs7OztBQ3RCRCxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCx1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEF1dGhEaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuY29uc3QgQXV0aFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuY29uc3QgTE9HSU5fU1VDQ0VTUyA9IFwiTE9HSU5fU1VDQ0VTU1wiXHJcbmNvbnN0IExPR09VVCA9IFwiTE9HT1VUXCJcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQgOiBmYWxzZSxcclxuICAgIHVzZXI6bnVsbCxcclxuICAgIHRva2VuOm51bGwsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUse3BheWxvYWQsdHlwZX0pe1xyXG4gICAgc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkOnRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIExPR09VVDpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZSAke3R5cGV9YClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtjaGlsZHJlbn0pe1xyXG4gICAgY29uc3Rbc3RhdGUsZGlzcGF0Y2hdPXVzZVJlZHVjZXIocmVkdWNlcixpbml0aWFsU3RhdGUpXHJcblxyXG4gICAgY29uc3QgbG9naW4gPSBhc3luYyh7ZW1haWwscGFzc3dvcmR9KT0+e1xyXG4gICAgICAgIGNvbnN0IHJlcyAgPSBhd2FpdCBmZXRjaCgnL2FwaS9sb2dpbicse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keSA6IEpTT04uc3RyaW5naWZ5KHtlbWFpbCxwYXNzd29yZH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihqc29uPy5tZXNzYWdlKTtcclxuXHJcbiAgICAgICAgY29uc3R7dG9rZW4sLi4udXNlcn0gPWpzb25cclxuXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOkxPR0lOX1NVQ0NFU1MsIHBheWxvYWQ6e3Rva2VuLHVzZXJ9fSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWdpc3RlciA9IGFzeW5jKHtuYW1lLGVtYWlsLHBhc3N3b3JkfSk9PntcclxuICAgICAgICAgY29uc3QgcmVzICA9IGF3YWl0IGZldGNoKCcvYXBpL3JlZ2lzdGVyJyx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5IDogSlNPTi5zdHJpbmdpZnkoe2VtYWlsLHBhc3N3b3JkfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKGpzb24/Lm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBjb25zdHt0b2tlbiwuLi51c2VyfSA9anNvbjtcclxuXHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOkxPR0lOX1NVQ0NFU1MsIHBheWxvYWQ6e3Rva2VuLHVzZXJ9fSlcclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ291dD0oKT0+ZGlzcGF0Y2goe3R5cGU6TE9HT1VUfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEF1dGhEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tsb2dpbixyZWdpc3Rlcixsb2dvdXR9fT5cclxuICAgICAgICAgICAgICAgIDxBdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9BdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0F1dGhEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUF1dGhEaXNwYXRjaCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoRGlzcGF0Y2hDb250ZXh0KTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhEaXNwYXRjaCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcclxuICByZXR1cm4gY29udGV4dDtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUF1dGhTdGF0ZSgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoU3RhdGVDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aFN0YXRlIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyXCIpO1xyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG5cclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyLCB1c2VBdXRoRGlzcGF0Y2gsIHVzZUF1dGhTdGF0ZSB9OyIsImltcG9ydCB7IHVzZUF1dGhTdGF0ZSAsdXNlQXV0aERpc3BhdGNofSBmcm9tIFwiLi4vY29udGV4dC9hdXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKXtcclxuICAgIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWQsdXNlcn0gPSB1c2VBdXRoU3RhdGUoKTtcclxuICAgIGNvbnN0IHtsb2dpbixjcmVhdGVVc2VyLGxvZ291dH09IHVzZUF1dGhEaXNwYXRjaCgpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPD4gXHJcbiAgICB7aXNBdXRoZW50aWNhdGVkID8oXHJcbiAgICAgICAgPD5cclxuICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9PC9wPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9PmxvZ291dDwvYnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgICApOig8YnV0dG9uIG9uQ2xpY2s9eygpPT5cclxuICAgICAgICBsb2dpbih7XHJcbiAgICAgICAgICAgIGVtYWlsOlwiakBqLmNvbVwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDpcImFiYzEyM1wiXHJcbiAgICAgICAgfSl9PlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgPC9idXR0b24+KX1cclxuICAgIFxyXG4gICAgPC8+KVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=