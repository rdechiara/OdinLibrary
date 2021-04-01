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

eval("const app = (function()\n{\n    let container = undefined;\n    let form = undefined;\n    let addButton = undefined;\n    let toggleButton = undefined;\n    let inventory = [];\n\n    /*\n    ** Set the container id for the app\n    */\n    function setContainer(id)\n    {\n        container = document.getElementById(id);\n        console.log(`container is ${container}`);\n    }\n    /*\n    ** Set the form id from which book\n    ** info are retrieved\n    */\n    function setForm(id)\n    {\n        form = document.getElementById(id);\n        console.log(`form is ${form}`);\n    }\n    /*\n    ** Set callback for form's button\n    ** which adds a book to the library\n    */\n    function setAddBookButton(id)\n    {\n        addButton = document.getElementById(id);\n        addButton.onclick = (e) =>\n        {\n            \n            const book = getInput();\n            if(book.title === `` || book.author === ``)\n            {\n                return;\n            }\n            inventory.push(book);\n            renderBook(book.title, book.author, book.read);\n            e.preventDefault();\n\n        }\n        console.log(`addButton is ${addButton}`);\n    }\n    /*\n    ** Assign callback function to the toggle button (id)\n    */\n    function setToggleButton(id)\n    {\n        toggleButton = document.getElementById(id);\n        toggleButton.onclick = toggleForm;\n        console.log(`toggleButton is ${toggleButton}`);\n    }\n    /*\n    ** Toggle the form\n    */\n    function toggleForm()\n    {\n        const formStatus = form.style.display;\n        if(formStatus === `block`)\n        {\n            form.style.display = `none`;\n            toggleButton.textContent = `+`;\n            toggleButton.style.fontSize = `x-large`;\n        }\n        else\n        {\n            form.style.display = `block`;\n            toggleButton.textContent = `X`;\n        }\n    }\n    /*\n    ** Retrieve data from form\n    */\n    function getInput()\n    {\n        const titleInput = document.getElementById(`title`);\n        const authorInput = document.getElementById(`author`);\n        const readInput = document.getElementById(`read-yes`);\n\n        const title = titleInput.value;\n        const author = authorInput.value;\n        const read = readInput.checked;\n\n        titleInput.value = ``;\n        authorInput.value = ``;\n        \n\n        return {title, author, read};\n    }\n    /*\n    ** Render the book in a simple card\n    */\n    function renderBook(title, author, read)\n    {\n        const card = document.createElement(`blockquote`);\n        card.name = `${title} ${author}`;\n        const close = document.createElement(`a`);\n        close.textContent = `X`;\n        close.classList.add(`button-outline`)\n        close.onclick = (e) =>\n        {\n            const name = e.target.name;\n            const idx = inventory.indexOf((book) => name === `${book.title} ${book.author}`);\n            inventory.splice(idx, 1);\n            e.target.parentNode.remove();\n            console.log(inventory);\n        };\n        \n        card.innerHTML = `\n        <p><strong>Title: </strong><span> ${title}</span></p>\n        <p><strong>Author: </strong><span> ${author}</span></p>\n        <strong> Already read:</strong><span> ${read}</span>\n    </blockquote>`;\n        card.prepend(close);\n        container.append(card);\n    }\n    \n    return {setContainer, setForm, setAddBookButton, setToggleButton};\n})();\n// app setup\napp.setContainer(`root`);\napp.setForm(`book-form`);\napp.setAddBookButton(`add-button`);\napp.setToggleButton(`toggle-button`);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

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