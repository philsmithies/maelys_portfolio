"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/phil/Projects/maelys_portfolio/web/components/Navbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Navbar = function Navbar() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      navOpen = _useState[0],\n      setNavOpen = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"h24\"),\n      navHeight = _useState2[0],\n      setNavHeight = _useState2[1];\n\n  var handleToggle = function handleToggle() {\n    if (navOpen) {\n      console.log(\"clicked\");\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"w-screen bg-red-400 flex pl-10 items-center justify-between\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"svg\", {\n      viewBox: \"0 0 10 8\",\n      width: \"20\",\n      onClick: handleToggle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"path\", {\n        d: \"M1 1h8M1 4h 8M1 7h8\",\n        stroke: \"#fff\",\n        \"stroke-width\": \"2\",\n        \"stroke-linecap\": \"round\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: \"/daisy.png\",\n      width: 50,\n      height: 50,\n      className: \"self-end bg-red-400 justify-self-center\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"dPF8xH4nYP405lROfPnkfOrC2ZU=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLGtCQUE4QkYsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT0csT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBa0NKLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9LLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJSixPQUFKLEVBQWE7QUFDWEssTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNEO0FBQ0YsR0FKRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyw2REFBZjtBQUFBLDRCQUNFO0FBQUssYUFBTyxFQUFDLFVBQWI7QUFBd0IsV0FBSyxFQUFDLElBQTlCO0FBQW1DLGFBQU8sRUFBRUYsWUFBNUM7QUFBQSw2QkFDRTtBQUNFLFNBQUMsRUFBQyxxQkFESjtBQUVFLGNBQU0sRUFBQyxNQUZUO0FBR0Usd0JBQWEsR0FIZjtBQUlFLDBCQUFlO0FBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFTRSw4REFBQyxtREFBRDtBQUNFLFNBQUcsRUFBQyxZQUROO0FBRUUsV0FBSyxFQUFFLEVBRlQ7QUFHRSxZQUFNLEVBQUUsRUFIVjtBQUlFLGVBQVMsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQTdCRDs7R0FBTUw7O0tBQUFBO0FBK0JOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYXZPcGVuLCBzZXROYXZPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25hdkhlaWdodCwgc2V0TmF2SGVpZ2h0XSA9IHVzZVN0YXRlKFwiaDI0XCIpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBpZiAobmF2T3Blbikge1xuICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gYmctcmVkLTQwMCBmbGV4IHBsLTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMCA4XCIgd2lkdGg9XCIyMFwiIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk0xIDFoOE0xIDRoIDhNMSA3aDhcIlxuICAgICAgICAgIHN0cm9rZT1cIiNmZmZcIlxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPVwiL2RhaXN5LnBuZ1wiXG4gICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgY2xhc3NOYW1lPVwic2VsZi1lbmQgYmctcmVkLTQwMCBqdXN0aWZ5LXNlbGYtY2VudGVyXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJOYXZiYXIiLCJuYXZPcGVuIiwic2V0TmF2T3BlbiIsIm5hdkhlaWdodCIsInNldE5hdkhlaWdodCIsImhhbmRsZVRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

});