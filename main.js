/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Container */ \"./src/components/Container.js\");\n\r\n\r\n\r\nfunction App() {\r\n  return /*html*/ `\r\n    <div class='app'>\r\n      ${(0,_components_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()}\r\n      ${(0,_components_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}\r\n    </div>\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack://moviedb/./src/App.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchMovies\": () => (/* binding */ fetchMovies)\n/* harmony export */ });\n/* harmony import */ var _components_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Box */ \"./src/components/Box.js\");\n\r\n\r\nconst apikey = 'a4daa08f';\r\n\r\nconst fetchMovies = async (searchTerm) => {\r\n  const movieList = [];\r\n  const res = await fetch(\r\n    `http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`\r\n  );\r\n\r\n  if (searchTerm) {\r\n    const moviesData = await res.json();\r\n    const movieIDs = moviesData.Search.map((movie) => movie.imdbID);\r\n    for (let movieID of movieIDs) {\r\n      const res = await fetch(\r\n        `https://www.omdbapi.com/?apikey=${apikey}&i=${movieID}`\r\n      );\r\n      const data = await res.json();\r\n      try {\r\n        movieList.push(data);\r\n      } catch (err) {\r\n        console.error(err);\r\n      }\r\n    }\r\n    return movieList;\r\n  }\r\n  return (0,_components_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Please provide an input for your search');\r\n};\r\n\n\n//# sourceURL=webpack://moviedb/./src/actions/index.js?");

/***/ }),

/***/ "./src/components/Box.js":
/*!*******************************!*\
  !*** ./src/components/Box.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Box)\n/* harmony export */ });\nfunction Box(children) {\r\n  return /*html*/ `\r\n    <div class='box'>\r\n      ${children}\r\n    </div>\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack://moviedb/./src/components/Box.js?");

/***/ }),

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./src/components/Box.js\");\n\r\n\r\nfunction Container() {\r\n  const text = /*html*/ `\r\n    <i class='fas fa-film'></i>\r\n    <span>Welcome to MovieDB</span>\r\n  `;\r\n\r\n  return /*html*/ `\r\n    <div class='container'>\r\n      ${(0,_Box__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(text)}\r\n    </div>\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack://moviedb/./src/components/Container.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\nfunction Header() {\r\n  return /*html*/ `\r\n    <header class='header'>\r\n      <div class='header-nav'>\r\n        <a href='/' class='header-logo'>\r\n          <i class='fas fa-film'></i>\r\n          <span>MovieDB</span>\r\n        </a>\r\n        <div class='header-search'>\r\n          <input \r\n            class='header-search-input' \r\n            name='search' \r\n            type='text'\r\n            placeholder='Search for movies'\r\n          />\r\n          <button \r\n            class='header-search-button' \r\n            type='submit' \r\n            value='Search'\r\n          >\r\n            <i class='fas fa-search'></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </header>\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack://moviedb/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/Movie.js":
/*!*********************************!*\
  !*** ./src/components/Movie.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movie)\n/* harmony export */ });\nfunction Movie(movie) {\r\n  return /*html*/ `\r\n    <div class='movie'>\r\n      <img class='movie-poster' src='${movie.Poster}' />\r\n      <div class='movie-info'>\r\n        <h3>${movie.Title} (${movie.Year})</h3>\r\n        <div class='about'>\r\n          <div class='about_rating'><i class=\"fas fa-star\"></i> ${movie.imdbRating}</div>\r\n          <div class='about_runtime'>${movie.Runtime}</div>\r\n          <div class='about_genre'>${movie.Genre}</div>\r\n        </div>\r\n        <p class='plot'>${movie.Plot}</p>\r\n      </div>\r\n    </div>\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack://moviedb/./src/components/Movie.js?");

/***/ }),

/***/ "./src/components/Spinner.js":
/*!***********************************!*\
  !*** ./src/components/Spinner.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Spinner)\n/* harmony export */ });\nfunction Spinner() {\r\n  return /*html*/ `\r\n    <div class='spinner'></div>\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack://moviedb/./src/components/Spinner.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Spinner */ \"./src/components/Spinner.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _components_Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Movie */ \"./src/components/Movie.js\");\n\r\n\r\n\r\n\r\n\r\nconst root = document.querySelector('#root');\r\nroot.innerHTML = (0,_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nconst searchInput = document.querySelector('.header-search-input');\r\nconst searchButton = document.querySelector('.header-search-button');\r\nconst container = document.querySelector('.container');\r\n\r\nsearchButton.addEventListener('click', async () => {\r\n  container.innerHTML = (0,_components_Spinner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  const movies = await (0,_actions__WEBPACK_IMPORTED_MODULE_0__.fetchMovies)(searchInput.value);\r\n  let renderedMovies;\r\n  if (typeof movies !== 'string') {\r\n    console.log(movies);\r\n    renderedMovies = movies\r\n      .map((movie) => {\r\n        return (0,_components_Movie__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movie);\r\n      })\r\n      .join('');\r\n  } else {\r\n    renderedMovies = movies;\r\n  }\r\n  container.innerHTML = renderedMovies;\r\n});\r\n\n\n//# sourceURL=webpack://moviedb/./src/index.js?");

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