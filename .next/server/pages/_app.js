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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC8uL3NyYy9jb250ZXh0L2F1dGguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBdXRoRGlzcGF0Y2hDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhTdGF0ZUNvbnRleHQiLCJMT0dJTl9TVUNDRVNTIiwiTE9HT1VUIiwiaW5pdGlhbFN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwidXNlciIsInRva2VuIiwicmVkdWNlciIsInN0YXRlIiwicGF5bG9hZCIsInR5cGUiLCJFcnJvciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwib2siLCJtZXNzYWdlIiwicmVnaXN0ZXIiLCJuYW1lIiwibG9nb3V0IiwidXNlQXV0aERpc3BhdGNoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VBdXRoU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsbUJBQW1CLGdCQUFHQyxvREFBYSxFQUF6QztBQUNBLE1BQU1DLGdCQUFnQixnQkFBR0Qsb0RBQWEsRUFBdEM7QUFFQSxNQUFNRSxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFB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QUQ7QUFBT2EsZ0JBQVA7QUFBZ0JFO0FBQWhCLE9BQXJDO0FBQUEsNkJBQ0ksOERBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsYUFBSyxFQUFFdkIsS0FBbEM7QUFBQSxrQkFDS0s7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBU0g7O0FBRUQsU0FBU21CLGVBQVQsR0FBMkI7QUFDekIsUUFBTUMsT0FBTyxHQUFHQyxpREFBVSxDQUFDcEMsbUJBQUQsQ0FBMUI7QUFFQSxNQUFJbUMsT0FBTyxLQUFLRSxTQUFoQixFQUNFLE1BQU0sSUFBSXhCLEtBQUosQ0FBVSxxREFBVixDQUFOO0FBQ0YsU0FBT3NCLE9BQVA7QUFFRDs7QUFFRCxTQUFTRyxZQUFULEdBQXdCO0FBQ3RCLFFBQU1ILE9BQU8sR0FBR0MsaURBQVUsQ0FBQ2xDLGdCQUFELENBQTFCO0FBQ0EsTUFBSWlDLE9BQU8sS0FBS0UsU0FBaEIsRUFDRSxNQUFNLElBQUl4QixLQUFKLENBQVUsa0RBQVYsQ0FBTjtBQUVGLFNBQU9zQixPQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0Q7QUFDQTtBQUdlLFNBQVNJLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUdwRCxzQkFDQSw4REFBQywwREFBRDtBQUFBLDJCQUNBLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQUtILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pELG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsdXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBBdXRoRGlzcGF0Y2hDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcbmNvbnN0IEF1dGhTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmNvbnN0IExPR0lOX1NVQ0NFU1MgPSBcIkxPR0lOX1NVQ0NFU1NcIlxyXG5jb25zdCBMT0dPVVQgPSBcIkxPR09VVFwiXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgaXNBdXRoZW50aWNhdGVkIDogZmFsc2UsXHJcbiAgICB1c2VyOm51bGwsXHJcbiAgICB0b2tlbjpudWxsLFxyXG59XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLHtwYXlsb2FkLHR5cGV9KXtcclxuICAgIHN3aXRjaCh0eXBlKXtcclxuICAgICAgICBjYXNlIExPR0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZDp0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dPVVQ6XHJcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGUgJHt0eXBlfWApXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7Y2hpbGRyZW59KXtcclxuICAgIGNvbnN0W3N0YXRlLGRpc3BhdGNoXT11c2VSZWR1Y2VyKHJlZHVjZXIsaW5pdGlhbFN0YXRlKVxyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMoe2VtYWlsLHBhc3N3b3JkfSk9PntcclxuICAgICAgICBjb25zdCByZXMgID0gYXdhaXQgZmV0Y2goJy9hcGkvbG9naW4nLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHkgOiBKU09OLnN0cmluZ2lmeSh7ZW1haWwscGFzc3dvcmR9KSxcclxuICAgICAgICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICBpZighcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoanNvbj8ubWVzc2FnZSk7XHJcblxyXG4gICAgICAgIGNvbnN0e3Rva2VuLC4uLnVzZXJ9ID1qc29uXHJcblxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpMT0dJTl9TVUNDRVNTLCBwYXlsb2FkOnt0b2tlbix1c2VyfX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyh7bmFtZSxlbWFpbCxwYXNzd29yZH0pPT57XHJcbiAgICAgICAgIGNvbnN0IHJlcyAgPSBhd2FpdCBmZXRjaCgnL2FwaS9yZWdpc3Rlcicse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keSA6IEpTT04uc3RyaW5naWZ5KHtlbWFpbCxwYXNzd29yZH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihqc29uPy5tZXNzYWdlKTtcclxuXHJcbiAgICAgICAgY29uc3R7dG9rZW4sLi4udXNlcn0gPWpzb247XHJcblxyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpMT0dJTl9TVUNDRVNTLCBwYXlsb2FkOnt0b2tlbix1c2VyfX0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dvdXQ9KCk9PmRpc3BhdGNoKHt0eXBlOkxPR09VVH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7bG9naW4scmVnaXN0ZXIsbG9nb3V0fX0+XHJcbiAgICAgICAgICAgICAgICA8QXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9BdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdXRoRGlzcGF0Y2goKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aERpc3BhdGNoQ29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VBdXRoRGlzcGF0Y2ggbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBBdXRoUHJvdmlkZXJcIik7XHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VBdXRoU3RhdGUoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aFN0YXRlQ29udGV4dCk7XHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhTdGF0ZSBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aERpc3BhdGNoLCB1c2VBdXRoU3RhdGUgfTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJ1xyXG5pbXBvcnQge0F1dGhQcm92aWRlcn0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aC5qc1wiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiBcclxuIFxyXG4gICAgcmV0dXJuICAoXHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICApICAgXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9