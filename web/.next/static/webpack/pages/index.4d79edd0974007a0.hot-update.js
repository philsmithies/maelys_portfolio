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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Index = function(param1) {\n    var posts = param1.posts;\n    var _this1 = _this;\n    console.log(posts);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/index.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Welcome to a blog!\"\n            }),\n            posts.length > 0 && posts.map(function(param) {\n                var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _updatedAt = param.updatedAt, updatedAt = _updatedAt === void 0 ? \"\" : _updatedAt;\n                return slug && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                    __source: {\n                        fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 15\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/post/[slug]\",\n                            as: \"/post/\".concat(slug.current),\n                            __source: {\n                                fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/index.js\",\n                                lineNumber: 15,\n                                columnNumber: 17\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                __source: {\n                                    fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/index.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 19\n                                },\n                                __self: _this1,\n                                children: title\n                            })\n                        }),\n                        \" \",\n                        \"(\",\n                        new Date(updatedAt).toDateString(),\n                        \")\"\n                    ]\n                }, _id);\n            })\n        ]\n    }));\n};\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRCOztBQUk1QixHQUFLLENBQUNDLEtBQUssR0FBRyxRQUFRLFNBQU8sQ0FBQztRQUFiQyxLQUFLLFVBQUxBLEtBQUs7O0lBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztJQUNqQixNQUFNLHVFQUNIRyxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFrQjs7WUFDckJKLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLENBQUMsSUFDZkwsS0FBSyxDQUFDTSxHQUFHLENBQ1AsUUFBUUM7b0JBQUxDLEdBQUcsU0FBSEEsR0FBRyxpQkFBRUQsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLENBQUUsMEJBQUVFLElBQUksRUFBSkEsSUFBSSxzQkFBRyxDQUFFLDhCQUFFQyxTQUFTLEVBQVRBLFNBQVMsMkJBQUcsQ0FBRTtnQkFDM0NELE1BQU0sQ0FBTkEsSUFBSSwwRUFDREUsQ0FBRTs7Ozs7Ozs7NkZBQ0FiLGtEQUFJOzRCQUFDYyxJQUFJLEVBQUMsQ0FBYzs0QkFBQ0MsRUFBRSxFQUFHLENBQU0sUUFBZSxPQUFiSixJQUFJLENBQUNLLE9BQU87Ozs7Ozs7MkdBQ2hEQyxDQUFDOzs7Ozs7OzBDQUFFUixLQUFLOzs7d0JBQ0gsQ0FBRzt3QkFBQyxDQUNYO3dCQUFDLEdBQUcsQ0FBQ1MsSUFBSSxDQUFDTixTQUFTLEVBQUVPLFlBQVk7d0JBQUcsQ0FDdkM7O21CQUxTVCxHQUFHOzs7O0FBVTFCLENBQUM7S0FuQktULEtBQUs7O0FBZ0NYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XG5cbmNvbnN0IEluZGV4ID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhwb3N0cyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5XZWxjb21lIHRvIGEgYmxvZyE8L2gxPlxuICAgICAge3Bvc3RzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgcG9zdHMubWFwKFxuICAgICAgICAgICh7IF9pZCwgdGl0bGUgPSBcIlwiLCBzbHVnID0gXCJcIiwgdXBkYXRlZEF0ID0gXCJcIiB9KSA9PlxuICAgICAgICAgICAgc2x1ZyAmJiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgKHtuZXcgRGF0ZSh1cGRhdGVkQXQpLnRvRGF0ZVN0cmluZygpfSlcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbiAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCJdIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYylcbiAgICBgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiTGluayIsIkluZGV4IiwicG9zdHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJsZW5ndGgiLCJtYXAiLCJ0aXRsZSIsIl9pZCIsInNsdWciLCJ1cGRhdGVkQXQiLCJsaSIsImhyZWYiLCJhcyIsImN1cnJlbnQiLCJhIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});