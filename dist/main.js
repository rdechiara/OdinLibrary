/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const app = (function()\n{\n    let container = undefined;\n    let form = undefined;\n    let addButton = undefined;\n    let toggleButton = undefined;\n    let books = [];\n\n    function setContainer(id)\n    {\n        container = document.getElementById(id);\n    }\n    function setForm(id)\n    {\n        form = document.getElementById(id);\n    }\n    function setAddBookButton(id)\n    {\n        addButton = document.getElementById(id);\n    }\n    function setToggleButton(id)\n    {\n        toggleButton = document.getElementById(id);\n    }\n\n    function toggleForm()\n    {\n        const formStatus = form.style.display;\n        if(formStatus === `block`)\n        {\n            form.style.display = `none`;\n        }\n        else\n        {\n            form.style.display = `block`;\n        }\n    }\n    return {setContainer, setForm, setAddBookButton, setToggleButton};\n})();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;