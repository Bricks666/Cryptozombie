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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _web3_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3.min */ \"./src/web3.min.js\");\n/* harmony import */ var _web3_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_min__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst contractAddress = \"0xF5D722995691abeB985E3C6848A0774e51036DFD\";\nconst abi = [\n  {\n    constant: true,\n    inputs: [],\n    name: \"getNumber\",\n    outputs: [\n      {\n        internalType: \"uint256\",\n        name: \"\",\n        type: \"uint256\",\n      },\n    ],\n    payable: false,\n    stateMutability: \"view\",\n    type: \"function\",\n  },\n  {\n    constant: false,\n    inputs: [\n      {\n        internalType: \"uint256\",\n        name: \"num\",\n        type: \"uint256\",\n      },\n    ],\n    name: \"setNumber\",\n    outputs: [],\n    payable: false,\n    stateMutability: \"nonpayable\",\n    type: \"function\",\n  },\n];\n\nlet contract;\nlet web3;\nlet accountAddress;\n\nconst accountName = document.querySelector(\".account-name\");\nconst connectButton = document.querySelector(\".connect\");\nconst getNumberField = document.querySelector(\".get-number__field\");\nconst getNumberButton = document.querySelector(\".get-number__button\");\nconst setNumberField = document.querySelector(\".set-number__field\");\nconst setNumberButton = document.querySelector(\".set-number__button\");\n\ngetNumberButton.addEventListener(\"click\", getNumber);\nsetNumberButton.addEventListener(\"click\", setNumber);\n\nconnectButton.onclick = () => {\n  if (web3 === undefined) {\n    web3 = instantiateWeb3();\n  }\n\n  connect();\n};\n\nfunction instantiateWeb3() {\n  if (window.web3 === undefined) {\n    console.log(\"Web3 didn't detect\");\n\n    return new (_web3_min__WEBPACK_IMPORTED_MODULE_0___default())(\n      window.web3.providers.HttpProvider(\"http://localhost:8545'\")\n    );\n  } else {\n    console.log(\"Using Metamask's provider\");\n\n    return new (_web3_min__WEBPACK_IMPORTED_MODULE_0___default())(window.web3.currentProvider);\n  }\n}\n\nasync function connect() {\n  getNumberButton.disabled = true;\n  setNumberButton.disabled = true;\n\n  if (contract === undefined) {\n    contract = new web3.eth.Contract(abi, contractAddress);\n  }\n\n  accountAddress = (await web3.eth.getAccounts())[0];\n\n  if (accountAddress !== undefined) {\n    accountName.innerHTML = accountAddress;\n    connectButton.innerHTML = \"Reconnect\";\n\n    getNumberButton.disabled = false;\n    setNumberButton.disabled = false;\n\n    const id = setInterval(() => refreshAccount(id), 500);\n\n    return;\n  }\n\n  alert(\"Please, enter to your Metamask's account\");\n}\n\nasync function refreshAccount(intervalId) {\n  const newAdress = (await web3.eth.getAccounts())[0];\n\n  if (newAdress === undefined) {\n    alert(\"Please, enter to your Metamask's account and connect again\");\n\n    connectButton.innerHTML = \"Connect\";\n\n    clearTimeout(intervalId);\n\n    return;\n  }\n\n  if (newAdress !== accountName.value) {\n    accountName.innerHTML = accountAddress = newAdress;\n  }\n}\n\nasync function getNumber() {\n  getNumberButton.disabled = true;\n\n  const value = await contract.methods.getNumber().call();\n  console.log(value);\n\n  getNumberField.value = value;\n\n  getNumberButton.disabled = false;\n}\n\nasync function setNumber() {\n  setNumberButton.disabled = true;\n\n  let value;\n  try {\n    value = Number(setNumberField.value);\n  } catch (e) {\n    console.log(e.message);\n  }\n  setNumberField.value = \"\";\n\n  if (isNaN(value)) {\n    alert(`${value} isn't number`);\n\n    setNumberButton.disabled = false;\n\n    return;\n  }\n\n  await contract.methods.setNumber(value).send({ from: accountAddress });\n\n  setNumberButton.disabled = false;\n}\n\n\n//# sourceURL=webpack://interface/./src/index.js?");

/***/ }),

/***/ "./src/web3.min.js":
/*!*************************!*\
  !*** ./src/web3.min.js ***!
  \*************************/
/***/ ((module) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;