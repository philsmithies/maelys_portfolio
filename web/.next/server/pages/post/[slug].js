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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"oes0dl00\",\n    dataset: \"production\",\n    useCdn: true,\n    apiVersion: \"2021-10-21\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFBWTtBQUM2QjtBQUV6QyxpRUFBZUEscURBQVksQ0FBQyxDQUFDO0lBQzNCQyxTQUFTLEVBQUUsQ0FBVTtJQUNyQkMsT0FBTyxFQUFFLENBQVk7SUFDckJDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLFVBQVUsRUFBRSxDQUFZO0FBQzFCLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vY2xpZW50LmpzPzk3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50LmpzXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCJAc2FuaXR5L2NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBzYW5pdHlDbGllbnQoe1xuICBwcm9qZWN0SWQ6IFwib2VzMGRsMDBcIiwgLy8geW91IGNhbiBmaW5kIHRoaXMgaW4gc2FuaXR5Lmpzb25cbiAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgdXNlQ2RuOiB0cnVlLCAvLyBgZmFsc2VgIGlmIHlvdSB3YW50IHRvIGVuc3VyZSBmcmVzaCBkYXRhXG4gIGFwaVZlcnNpb246IFwiMjAyMS0xMC0yMVwiLFxufSk7XG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiIsImFwaVZlcnNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n// [slug].js\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , body ,  } = post;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"article\", {\n        __source: {\n            fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/post/[slug].js\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/post/[slug].js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                __source: {\n                    fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/post/[slug].js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    \"By \",\n                    name\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_3___default()), {\n                blocks: body,\n                imageOptions: {\n                    w: 400,\n                    h: 240,\n                    fit: \"max\"\n                },\n                ..._client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config(),\n                __source: {\n                    fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/post/[slug].js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            categories && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                __source: {\n                    fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/post/[slug].js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            __source: {\n                                fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/post/[slug].js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: category\n                        }, category)\n                    )\n                ]\n            }),\n            authorImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/post/[slug].js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: urlFor(authorImage).width(50).url(),\n                    __source: {\n                        fileName: \"/Users/phil/Projects/maelys_portfolio/web/pages/post/[slug].js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    },\n                    __self: undefined\n                })\n            })\n        ]\n    }));\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title,\n  \"authorImage\": author->image,\n  body\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBWTtBQUNXO0FBQ3dCO0FBQ1U7QUFDeEI7U0FFeEJJLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7SUFDdkIsTUFBTSxDQUFDSix3REFBZSxDQUFDRSwrQ0FBTSxFQUFFRyxLQUFLLENBQUNELE1BQU07QUFDN0MsQ0FBQztBQUVELEtBQUssQ0FBQ0UsSUFBSSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQzFCLEtBQUssQ0FBQyxDQUFDLENBQ0xDLEtBQUssRUFBRyxDQUFlLGlCQUN2QkMsSUFBSSxFQUFHLENBQWMsZ0JBQ3JCQyxVQUFVLEdBQ1ZDLFdBQVcsR0FDWEMsSUFBSSxJQUNOLENBQUMsR0FBR0wsSUFBSTtJQUNSLE1BQU0sdUVBQ0hNLENBQU87Ozs7Ozs7O2lGQUNMQyxDQUFFOzs7Ozs7OzBCQUFFTixLQUFLOztrRkFDVE8sQ0FBSTs7Ozs7Ozs7b0JBQUMsQ0FBRztvQkFBQ04sSUFBSTs7O2lGQUNiUix1RUFBWTtnQkFDWGUsTUFBTSxFQUFFSixJQUFJO2dCQUNaSyxZQUFZLEVBQUUsQ0FBQztvQkFBQ0MsQ0FBQyxFQUFFLEdBQUc7b0JBQUVDLENBQUMsRUFBRSxHQUFHO29CQUFFQyxHQUFHLEVBQUUsQ0FBSztnQkFBQyxDQUFDO21CQUN4Q2xCLHNEQUFhOzs7Ozs7OztZQUVsQlEsVUFBVSwwRUFDUlksQ0FBRTs7Ozs7Ozs7b0JBQUMsQ0FFRjtvQkFBQ1osVUFBVSxDQUFDYSxHQUFHLEVBQUVDLFFBQVEsd0VBQ3RCQyxDQUFFOzs7Ozs7O3NDQUFpQkQsUUFBUTsyQkFBbkJBLFFBQVE7Ozs7WUFJdEJiLFdBQVcseUVBQ1RlLENBQUc7Ozs7Ozs7K0ZBQ0RDLENBQUc7b0JBQUNDLEdBQUcsRUFBRXpCLE1BQU0sQ0FBQ1EsV0FBVyxFQUFFa0IsS0FBSyxDQUFDLEVBQUUsRUFBRUMsR0FBRzs7Ozs7Ozs7Ozs7QUFLckQsQ0FBQztBQUVELEtBQUssQ0FBQ0MsS0FBSyxHQUFHaEMsNkNBQUksQ0FBQztBQU9uQixNQUFNO0lBQ0osS0FBSyxDQUFDa0MsS0FBSyxHQUFHLEtBQUs7SUFJbkIsTUFBTSxDQUFDLENBQUM7UUFDTkEsS0FBSyxFQUFFQSxLQUFLLENBQUNWLEdBQUcsRUFBRVksSUFBSTs7O1NBQXVCLENBQUM7WUFBQyxDQUFDOztRQUNoREUsUUFBUSxFQUFFLElBQUk7SUFDaEIsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNO0lBQ0osRUFBMkU7SUFDM0UsS0FBSyxDQUFDO0lBQ04sS0FBSyxDQUFDOUIsSUFBSSxHQUFHLEtBQUs7OztBQUNsQixHQUFNLENBQUMsQ0FBQztRQUNOaUMsS0FBSyxFQUFFLENBQUM7WUFDTmpDLElBQUk7UUFDTixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFDRCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbc2x1Z10uanNcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcblxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIixcbiAgICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcbiAgICBjYXRlZ29yaWVzLFxuICAgIGF1dGhvckltYWdlLFxuICAgIGJvZHksXG4gIH0gPSBwb3N0O1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxuICAgICAgPEJsb2NrQ29udGVudFxuICAgICAgICBibG9ja3M9e2JvZHl9XG4gICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiA0MDAsIGg6IDI0MCwgZml0OiBcIm1heFwiIH19XG4gICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XG4gICAgICAvPlxuICAgICAge2NhdGVnb3JpZXMgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgUG9zdGVkIGluXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNTApLnVybCgpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gIGJvZHlcbn1gO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtcztcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbImdyb3EiLCJpbWFnZVVybEJ1aWxkZXIiLCJCbG9ja0NvbnRlbnQiLCJjbGllbnQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwiYm9keSIsImFydGljbGUiLCJoMSIsInNwYW4iLCJibG9ja3MiLCJpbWFnZU9wdGlvbnMiLCJ3IiwiaCIsImZpdCIsImNvbmZpZyIsInVsIiwibWFwIiwiY2F0ZWdvcnkiLCJsaSIsImRpdiIsImltZyIsInNyYyIsIndpZHRoIiwidXJsIiwicXVlcnkiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

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