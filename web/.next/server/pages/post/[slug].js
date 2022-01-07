"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"yyr2fwcq\",\n    dataset: \"production\",\n    useCdn: true\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFBWTtBQUM2QjtBQUV6QyxpRUFBZUEscURBQVksQ0FBQyxDQUFDO0lBQzNCQyxTQUFTLEVBQUUsQ0FBVTtJQUNyQkMsT0FBTyxFQUFFLENBQVk7SUFDckJDLE1BQU0sRUFBRSxJQUFJO0FBQ2QsQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9jbGllbnQuanM/OTcxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGllbnQuanNcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XG4gIHByb2plY3RJZDogXCJ5eXIyZndjcVwiLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIiwgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxuICB1c2VDZG46IHRydWUsIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcbn0pO1xuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\nconst Post = ({ post  })=>{\n    var ref;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"article\", {\n        __source: {\n            fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/post/[slug].js\",\n            lineNumber: 5,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n            __source: {\n                fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/post/[slug].js\",\n                lineNumber: 6,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: post === null || post === void 0 ? void 0 : (ref = post.slug) === null || ref === void 0 ? void 0 : ref.current\n        })\n    }));\n};\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`\n    *[_type == \"post\" && slug.current == $slug][0]\n  `, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRWpDLEtBQUssQ0FBQ0MsSUFBSSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBSyxDQUFDO1FBR2pCQSxHQUFVO0lBRm5CLE1BQU0sc0VBQ0hDLENBQU87Ozs7Ozs7dUZBQ0xDLENBQUU7Ozs7Ozs7c0JBQUVGLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsSUFBSSxDQUFKQSxDQUFVLElBQVZBLEdBQVUsR0FBVkEsSUFBSSxDQUFFRyxJQUFJLGNBQVZILEdBQVUsS0FBVkEsSUFBSSxDQUFKQSxDQUFVLEdBQVZBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxHQUFVLENBQUVJLE9BQU87OztBQUc5QixDQUFDO0FBRU0sZUFBZUMsY0FBYyxHQUFHLENBQUM7SUFDdEMsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDUixxREFBWSxFQUM3QiwwREFBMEQ7SUFHN0QsTUFBTSxDQUFDLENBQUM7UUFDTlEsS0FBSyxFQUFFQSxLQUFLLENBQUNFLEdBQUcsRUFBRUwsSUFBSSxJQUFNLENBQUM7Z0JBQUNNLE1BQU0sRUFBRSxDQUFDO29CQUFDTixJQUFJO2dCQUFDLENBQUM7WUFBQyxDQUFDOztRQUNoRE8sUUFBUSxFQUFFLElBQUk7SUFDaEIsQ0FBQztBQUNILENBQUM7QUFFTSxlQUFlQyxjQUFjLENBQUNDLE9BQU8sRUFBRSxDQUFDO0lBQzdDLEVBQTJFO0lBQzNFLEtBQUssQ0FBQyxDQUFDLENBQUNULElBQUksRUFBRyxDQUFFLEdBQUMsQ0FBQyxHQUFHUyxPQUFPLENBQUNILE1BQU07SUFDcEMsS0FBSyxDQUFDVCxJQUFJLEdBQUcsS0FBSyxDQUFDRixxREFBWSxFQUM1QjtRQUdDSyxJQUFJO0lBQUMsQ0FBQztJQUVWLE1BQU0sQ0FBQyxDQUFDOztZQUVKSDtRQUNGLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDE+e3Bvc3Q/LnNsdWc/LmN1cnJlbnR9PC9oMT5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKFxuICAgIGAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXM7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgYFxuICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXVxuICBgLFxuICAgIHsgc2x1ZyB9XG4gICk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJjbGllbnQiLCJQb3N0IiwicG9zdCIsImFydGljbGUiLCJoMSIsInNsdWciLCJjdXJyZW50IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZldGNoIiwibWFwIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();