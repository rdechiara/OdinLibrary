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

eval("const app = (function()\n{\n    let container = undefined;\n    let form = undefined;\n    let addButton = undefined;\n    let toggleButton = undefined;\n    let inventory = [];\n\n    function setContainer(id)\n    {\n        container = document.getElementById(id);\n        console.log(`container is ${container}`);\n    }\n    function setForm(id)\n    {\n        form = document.getElementById(id);\n        console.log(`form is ${form}`);\n    }\n    function setAddBookButton(id)\n    {\n        addButton = document.getElementById(id);\n        addButton.onclick = (e) =>\n        {\n            \n            const book = getInput();\n            inventory.push(book);\n            renderBook(book.title, book.author, book.read);\n        }\n        console.log(`addButton is ${addButton}`);\n    }\n    function setToggleButton(id)\n    {\n        toggleButton = document.getElementById(id);\n        toggleButton.onclick = toggleForm;\n        console.log(`toggleButton is ${toggleButton}`);\n    }\n\n    function toggleForm()\n    {\n        const formStatus = form.style.display;\n        if(formStatus === `block`)\n        {\n            form.style.display = `none`;\n            toggleButton.textContent = `+`;\n            toggleButton.style.fontSize = `x-large`;\n        }\n        else\n        {\n            form.style.display = `block`;\n            toggleButton.textContent = `X`;\n        }\n    }\n\n    function getInput()\n    {\n        const title = document.getElementById(`title`).value;\n        const author = document.getElementById(`author`).value;\n        const read = document.getElementById(`read-yes`).checked;\n        console.log(title, author, read);\n\n        return {title, author, read};\n\n    }\n\n    function renderBook(title, author, read)\n    {\n        const card = document.createElement(`blockquote`);\n        const close = document.createElement(`a`);\n        close.textContent = `X`;\n        close.classList.add(`button-outline`)\n        close.onclick = (e) =>\n        {\n            e.target.parentNode.remove();\n        };\n        \n        card.innerHTML = `\n        <p><strong>Title: </strong><span> ${title}</span></p>\n        <p><strong>Author: </strong><span> ${author}</span></p>\n        <strong> Already read:</strong><span> ${read}</span>\n    </blockquote>`;\n        card.prepend(close);\n        container.append(card);\n    }\n    return {setContainer, setForm, setAddBookButton, setToggleButton};\n})();\n\napp.setContainer(`root`);\napp.setForm(`book-form`);\napp.setAddBookButton(`add-button`);\napp.setToggleButton(`toggle-button`);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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