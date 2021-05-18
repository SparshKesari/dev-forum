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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb3J1bS1CdWxsZXRpbi1Cb2FyZC8uL3NyYy9jb250ZXh0L2F1dGguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRm9ydW0tQnVsbGV0aW4tQm9hcmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL0ZvcnVtLUJ1bGxldGluLUJvYXJkL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXV0aERpc3BhdGNoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBdXRoU3RhdGVDb250ZXh0IiwiTE9HSU5fU1VDQ0VTUyIsIkxPR09VVCIsImluaXRpYWxTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJ0b2tlbiIsInJlZHVjZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJ0eXBlIiwiRXJyb3IiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsIm5hbWUiLCJjcmVhdGVVc2VyIiwibG9nb3V0IiwidXNlQXV0aERpc3BhdGNoIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJ1c2VBdXRoU3RhdGUiLCJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsbUJBQW1CLGdCQUFHQyxvREFBYSxFQUF6QztBQUNBLE1BQU1DLGdCQUFnQixnQkFBR0Qsb0RBQWEsRUFBdEM7QUFFQSxNQUFNRSxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUVBLE1BQU1DLFlBQVksR0FBQztBQUNmQyxpQkFBZSxFQUFHLEtBREg7QUFFZkMsTUFBSSxFQUFDLElBRlU7QUFHZkMsT0FBSyxFQUFDO0FBSFMsQ0FBbkI7O0FBTUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBdUI7QUFBQ0MsU0FBRDtBQUFTQztBQUFULENBQXZCLEVBQXNDO0FBQ2xDLFVBQU9BLElBQVA7QUFDSSxTQUFLVCxhQUFMO0FBQ0ksMkRBQ09PLEtBRFAsR0FFT0MsT0FGUDtBQUdJTCx1QkFBZSxFQUFDO0FBSHBCOztBQUtKLFNBQUtGLE1BQUw7QUFDSSxhQUFPQyxZQUFQOztBQUNKO0FBQ0ksWUFBTSxJQUFJUSxLQUFKLENBQVcseUJBQXdCRCxJQUFLLEVBQXhDLENBQU47QUFWUjtBQVlIOztBQUVELFNBQVNFLFlBQVQsQ0FBc0I7QUFBQ0M7QUFBRCxDQUF0QixFQUFpQztBQUM3QixRQUFLO0FBQUEsT0FBQ0wsS0FBRDtBQUFBLE9BQU9NO0FBQVAsTUFBaUJDLGlEQUFVLENBQUNSLE9BQUQsRUFBU0osWUFBVCxDQUFoQzs7QUFDQSxRQUFNYSxLQUFLLEdBQUcsT0FBTTtBQUFDQyxTQUFEO0FBQU9DO0FBQVAsR0FBTixLQUF5QjtBQUNuQyxVQUFNWixLQUFLLEdBQUcsUUFBZDtBQUNBLFVBQU1ELElBQUksR0FBRztBQUFDYyxVQUFJLEVBQUc7QUFBUixLQUFiO0FBRUFMLFlBQVEsQ0FBQztBQUFDSixVQUFJLEVBQUNULGFBQU47QUFBcUJRLGFBQU8sRUFBQztBQUFDSCxhQUFEO0FBQU9EO0FBQVA7QUFBN0IsS0FBRCxDQUFSO0FBQ0gsR0FMRDs7QUFPQSxRQUFNZSxVQUFVLEdBQUcsT0FBTTtBQUFDRCxRQUFEO0FBQU1GLFNBQU47QUFBWUM7QUFBWixHQUFOLEtBQThCO0FBQzdDLFVBQU1aLEtBQUssR0FBRyxRQUFkO0FBQ0EsVUFBTUQsSUFBSSxHQUFHO0FBQUNjLFVBQUksRUFBRztBQUFSLEtBQWI7QUFFQUwsWUFBUSxDQUFDO0FBQUNKLFVBQUksRUFBQ1QsYUFBTjtBQUFxQlEsYUFBTyxFQUFDO0FBQUNILGFBQUQ7QUFBT0Q7QUFBUDtBQUE3QixLQUFELENBQVI7QUFDSCxHQUxEOztBQU1BLFFBQU1nQixNQUFNLEdBQUMsTUFBSVAsUUFBUSxDQUFDO0FBQUNKLFFBQUksRUFBQ1I7QUFBTixHQUFELENBQXpCOztBQUVBLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsbUJBQUQsQ0FBcUIsUUFBckI7QUFBOEIsV0FBSyxFQUFFO0FBQUNjLGFBQUQ7QUFBT0ksa0JBQVA7QUFBa0JDO0FBQWxCLE9BQXJDO0FBQUEsNkJBQ0ksOERBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsYUFBSyxFQUFFYixLQUFsQztBQUFBLGtCQUNLSztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFTSDs7QUFFRCxTQUFTUyxlQUFULEdBQTJCO0FBQ3pCLFFBQU1DLE9BQU8sR0FBR0MsaURBQVUsQ0FBQzFCLG1CQUFELENBQTFCO0FBRUEsTUFBSXlCLE9BQU8sS0FBS0UsU0FBaEIsRUFDRSxNQUFNLElBQUlkLEtBQUosQ0FBVSxxREFBVixDQUFOO0FBQ0YsU0FBT1ksT0FBUDtBQUVEOztBQUVELFNBQVNHLFlBQVQsR0FBd0I7QUFDdEIsUUFBTUgsT0FBTyxHQUFHQyxpREFBVSxDQUFDeEIsZ0JBQUQsQ0FBMUI7QUFDQSxNQUFJdUIsT0FBTyxLQUFLRSxTQUFoQixFQUNFLE1BQU0sSUFBSWQsS0FBSixDQUFVLGtEQUFWLENBQU47QUFFRixTQUFPWSxPQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUQ7QUFFZSxTQUFTSSxTQUFULEdBQW9CO0FBQy9CLFFBQU07QUFBQ3ZCO0FBQUQsTUFBb0JzQiwyREFBWSxFQUF0QztBQUNBLHNCQUNBO0FBQUEsb0JBQUl0QixlQUFlLEdBQUUsWUFBRixHQUFlLGFBQWxDO0FBQUEsa0JBREE7QUFFSCxDOzs7Ozs7Ozs7OztBQ05ELG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQXV0aERpc3BhdGNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCBBdXRoU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5jb25zdCBMT0dJTl9TVUNDRVNTID0gXCJMT0dJTl9TVUNDRVNTXCJcclxuY29uc3QgTE9HT1VUID0gXCJMT0dPVVRcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIGlzQXV0aGVudGljYXRlZCA6IGZhbHNlLFxyXG4gICAgdXNlcjpudWxsLFxyXG4gICAgdG9rZW46bnVsbCxcclxufVxyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSx7cGF5bG9hZCx0eXBlfSl7XHJcbiAgICBzd2l0Y2godHlwZSl7XHJcbiAgICAgICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6dHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HT1VUOlxyXG4gICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlICR7dHlwZX1gKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoe2NoaWxkcmVufSl7XHJcbiAgICBjb25zdFtzdGF0ZSxkaXNwYXRjaF09dXNlUmVkdWNlcihyZWR1Y2VyLGluaXRpYWxTdGF0ZSlcclxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMoe2VtYWlsLHBhc3N3b3JkfSk9PntcclxuICAgICAgICBjb25zdCB0b2tlbiA9IFwiYWJjMTIzXCI7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtuYW1lIDogJ1NwYXJzaCd9O1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpMT0dJTl9TVUNDRVNTLCBwYXlsb2FkOnt0b2tlbix1c2VyfX0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jKHtuYW1lLGVtYWlsLHBhc3N3b3JkfSk9PntcclxuICAgICAgICBjb25zdCB0b2tlbiA9IFwiYWJjMTIzXCI7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtuYW1lIDogJ1NwYXJzaCd9O1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpMT0dJTl9TVUNDRVNTLCBwYXlsb2FkOnt0b2tlbix1c2VyfX0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dvdXQ9KCk9PmRpc3BhdGNoKHt0eXBlOkxPR09VVH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBdXRoRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7bG9naW4sY3JlYXRlVXNlcixsb2dvdXR9fT5cclxuICAgICAgICAgICAgICAgIDxBdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9BdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0F1dGhEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUF1dGhEaXNwYXRjaCgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoRGlzcGF0Y2hDb250ZXh0KTtcclxuXHJcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVzZUF1dGhEaXNwYXRjaCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlclwiKTtcclxuICByZXR1cm4gY29udGV4dDtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUF1dGhTdGF0ZSgpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoU3RhdGVDb250ZXh0KTtcclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aFN0YXRlIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyXCIpO1xyXG5cclxuICByZXR1cm4gY29udGV4dDtcclxufVxyXG5cclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyLCB1c2VBdXRoRGlzcGF0Y2gsIHVzZUF1dGhTdGF0ZSB9OyIsImltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L2F1dGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpe1xyXG4gICAgY29uc3Qge2lzQXV0aGVudGljYXRlZH0gPSB1c2VBdXRoU3RhdGUoKTtcclxuICAgIHJldHVybihcclxuICAgIDw+IHtpc0F1dGhlbnRpY2F0ZWQgP1wiSGVsbG8gVXNlclwiOlwiSGVsbG8gR3Vlc3RcIn08Lz4pXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==