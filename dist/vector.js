(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vector", [], factory);
	else if(typeof exports === 'object')
		exports["vector"] = factory();
	else
		root["vector"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/vector.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/utility-functions/dist/utility-functions.js":
/*!******************************************************************!*\
  !*** ./node_modules/utility-functions/dist/utility-functions.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,r){ true?module.exports=r():undefined}(window,(function(){return function(n){var r={};function t(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var u in n)t.d(e,u,function(r){return n[r]}.bind(null,u));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=0)}([function(n,r,t){"use strict";var e=this&&this.__spreadArrays||function(){for(var n=0,r=0,t=arguments.length;r<t;r++)n+=arguments[r].length;var e=Array(n),u=0;for(r=0;r<t;r++)for(var o=arguments[r],i=0,f=o.length;i<f;i++,u++)e[u]=o[i];return e};function u(n){return function(r){return n}}function o(n){return function(r){return r.map(n)}}function i(n){return function(r){return r.map((function(r,t){return n(r)(t)}))}}function f(n){return function(r){var t;return(t={})[n]=r,t}}function c(n){return function(r){return Array.apply(null,Array(r-n)).map((function(r,t){return n+t}))}}function a(n){return function(r){return Math.floor(Math.random()*r)+n}}Object.defineProperty(r,"__esModule",{value:!0}),r.dropFirst=function(n){return n.slice(1)},r.dropLast=function(n){return n.slice(0,n.length-1)},r.id=function(n){return n},r.keep=u,r.map=o,r.mapi=i,r.adjust=function(n){return function(r){return function(t){return i((function(t){return function(e){return e===n?r(t):t}}))(t)}}},r.merge=function(n){var r=Array.isArray(n)?[]:{};return function(t){return Object.assign(r,n,t)}},r.mod=function(n){return function(r){return(r%n+n)%n}},r.objOf=f,r.pipe=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return function(r){return e(n).reduce((function(n,r){return r(n)}),r)}},r.prop=function(n){return function(r){return r[n]}},r.range=c,r.repeat=function(n){return function(r){return o(u(n))(c(0)(r))}},r.randomInt=a,r.random=function(n){if(Array.isArray(n))return n[a(0)(n.length)];if("number"==typeof n)return function(r){return Math.random()*r+n};throw Error("Incompatible parameter type: "+typeof n)},r.spec=function(n){return function(r){return Object.keys(n).map((function(t){return f(t)(n[t](r))})).reduce((function(n,r){return Object.assign(n,r)}))}},r.mapRange=function(n){return function(r,t){return function(e,u){return(n-r)*(u-e)/(t-r)+e}}}}])}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91dGlsaXR5LWZ1bmN0aW9ucy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdXRpbGl0eS1mdW5jdGlvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXRpbGl0eS1mdW5jdGlvbnMvLi9zcmMvdXRpbGl0eS1mdW5jdGlvbnMudHMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImtlZXAiLCJ4IiwiXyIsIm1hcCIsImYiLCJ4cyIsIm1hcGkiLCJpbmRleCIsIm9iak9mIiwidiIsInJhbmdlIiwiQXJyYXkiLCJhcHBseSIsInJhbmRvbUludCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNsaWNlIiwibGVuZ3RoIiwiYmFzZSIsImlzQXJyYXkiLCJvdGhlciIsImFzc2lnbiIsInkiLCJmbnMiLCJyZWR1Y2UiLCJhY2MiLCJwYXJhbTEiLCJFcnJvciIsImZuT2JqIiwia2V5cyIsIm9iaiIsIm1hcFJhbmdlIiwiaV9zdGFydCIsImlfZW5kIiwib19zdGFydCIsIm9fZW5kIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUEyQ0EsRUFBTUMsR0FDMUIsaUJBQVpDLFNB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QW1CdkQsZ0JBQWdERSxHQU85QyxPQUFPLFNBQUM5QixHQUNOLE9BQUF2QixPQUFPc0QsS0FBS0QsR0FDVDVCLEtBQUksU0FBQVosR0FBTyxPQUFBaUIsRUFBU2pCLEVBQVRpQixDQUFjdUIsRUFBTXhDLEdBQUtVLE9BQ3BDMEIsUUFBTyxTQUFDQyxFQUFLSyxHQUFRLE9BQUF2RCxPQUFPOEMsT0FBT0ksRUFBS0ssUUFPbEMsRUFBQUMsU0FBVyxTQUFDakMsR0FBYyxnQkFBQ2tDLEVBQWlCQyxHQUFrQixnQkFDekVDLEVBQ0FDLEdBQ0csT0FBRXJDLEVBQUlrQyxJQUFZRyxFQUFRRCxJQUFhRCxFQUFRRCxHQUFXRSIsImZpbGUiOiJ1dGlsaXR5LWZ1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidXRpbGl0eS1mdW5jdGlvbnNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widXRpbGl0eS1mdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widXRpbGl0eS1mdW5jdGlvbnNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhcnJheS5cbiAqIEBwYXJhbSB4cyAtIGFuIGFycmF5XG4gKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhlIGB4c2AgYXJyYXkgd2l0aCB0aGUgZmlyc3QgZWxlbWVudCByZW1vdmVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkcm9wRmlyc3Q8VD4oeHM6IFRbXSk6IFRbXSB7XG4gIHJldHVybiB4cy5zbGljZSgxKTtcbn1cbi8qKlxuICogUmVtb3ZlcyB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5LlxuICogQHBhcmFtIHhzIC0gYW4gYXJyYXlcbiAqIEByZXR1cm5zIEEgY29weSBvZiB0aGUgYHhzYCBhcnJheSB3aXRoIHRoZSBsYXN0IGVsZW1lbnQgcmVtb3ZlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJvcExhc3Q8VD4oeHM6IFRbXSk6IFRbXSB7XG4gIHJldHVybiB4cy5zbGljZSgwLCB4cy5sZW5ndGggLSAxKTtcbn1cbi8qKlxuICogQW4gaWRlbnRpdHkgZnVuY3Rpb24uXG4gKiBAcGFyYW0geCAtIGFuIG9iamVjdFxuICogQHJldHVybnMgYHhgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZDxUPih4OiBUKTogVCB7XG4gIHJldHVybiB4O1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBhcmd1bWVudC5cbiAqIEBwYXJhbSB4IC0gYW4gb2JqZWN0XG4gKiBAcmV0dXJucyAoXykgPT4gYHhgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBrZWVwPFQ+KHg6IFQpOiAoXzogYW55KSA9PiBUIHtcbiAgcmV0dXJuIChfOiBhbnkpID0+IHg7XG59XG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gZWFjaCBlbGVtZW50IG9mIGFuIGFycmF5LlxuICogQHBhcmFtIGYgLSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZVxuICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0IHdpbGwgY2FsbCBgZmAgb24gZWFjaCBlbGVtZW50IG9mIGFuIGFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXA8UywgVD4oZjogKHg6IFMpID0+IFQpOiAoeHM6IFNbXSkgPT4gVFtdIHtcbiAgcmV0dXJuICh4czogU1tdKSA9PiB4cy5tYXAoZik7XG59XG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gZWFjaCBlbGVtZW50IG9mIGFuIGFycmF5IHdpdGggYW4gaW5kZXguXG4gKiBAcGFyYW0gZiAtIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGZ1bmN0aW9uIG9uIGFuIGluZGV4XG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBjYWxsIGBmYCBvbiBlYWNoIGVsZW1lbnQgb2YgYW4gYXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcGk8UywgVD4oZjogKHg6IFMpID0+IChpOiBudW1iZXIpID0+IFQpOiAoeHM6IFNbXSkgPT4gVFtdIHtcbiAgcmV0dXJuICh4czogU1tdKSA9PiB4cy5tYXAoKHZhbHVlOiBTLCBpbmRleDogbnVtYmVyKSA9PiBmKHZhbHVlKShpbmRleCkpO1xufVxuLyoqXG4gKiBBcHBseSBhIGZ1bmN0aW9uIHRvIHRoZSBudGggZWxlbWVudCBvZiBhbiBhcnJheS5cbiAqIEBwYXJhbSBuIC0gdGhlIGVsZW1lbnQgdG8gYXBwbHkgdGhlIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJucyBBIG1hcHBpbmcgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGx5IGEgZnVuY3Rpb24gdG8gdGhlIGBuYCBlbGVtZW50IG9mIGFuIGFycmF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3Q8UywgVD4oXG4gIG46IG51bWJlclxuKTogKGY6ICh4OiBTKSA9PiBUKSA9PiAoeHM6IFNbXSkgPT4gQXJyYXk8UyB8IFQ+IHtcbiAgcmV0dXJuIChmOiAoeDogUykgPT4gVCkgPT4gKHhzOiBTW10pID0+XG4gICAgbWFwaSgoeDogUykgPT4gKGk6IG51bWJlcikgPT4gKGkgPT09IG4gPyBmKHgpIDogeCkpKHhzKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBvbmUgb2JqZWN0IG1lcmdlZCBpbnRvIGFub3RoZXIuXG4gKiBAcGFyYW0gYmFzZSAtIHRoZSBiYXNlIG9iamVjdCB0aGF0IHByb3ZpZGVzIGRlZmF1bHQgdmFsdWVzXG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYW5vdGhlciBvYmplY3QsIGBvdGhlcmAsIGZvciB0aGUgcHJvcGVydHkgbWVyZ2UuXG4gKiBUaGUgcHJvcGVydGllcyBvZiBgb3RoZXJgIHdpbGwgb3ZlcndyaXRlIHRoZSBwcm9wZXJ0aWVzIG9mIGBvYmpgIGluIHRoZSBuZXcgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYmFzZTogYW55KTogKG90aGVyOiBhbnkpID0+IGFueTtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShiYXNlOiBhbnlbXSk6IChvdGhlcjogYW55W10pID0+IGFueVtdO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGJhc2U6IGFueSk6IChvdGhlcjogYW55KSA9PiBhbnkge1xuICBjb25zdCByb290ID0gQXJyYXkuaXNBcnJheShiYXNlKSA/IFtdIDoge307XG4gIHJldHVybiAob3RoZXI6IGFueSkgPT4gT2JqZWN0LmFzc2lnbihyb290LCBiYXNlLCBvdGhlcik7XG59XG4vKipcbiAqIEEgbW9kdWx1cyBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgbmVnYXRpdmUgdmFsdWVzLCBlLmcuIG1vZCgyKSgxKSA9PT0gMSAmJiBtb2QoMikoLTEpID09PSAxLlxuICogQHBhcmFtIG4gLSB0aGUgZGl2c29yLCBlLmcuIG1vZChuKSh4KSA9PT0geCBtb2QgblxuICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIHRoZSBkaXZpZGVuZCBmb3IgdGhlIG1vZHVsdXMgY2FsY3V0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb2QobjogbnVtYmVyKTogKHg6IG51bWJlcikgPT4gbnVtYmVyIHtcbiAgcmV0dXJuICh5OiBudW1iZXIpID0+ICgoeSAlIG4pICsgbikgJSBuO1xufVxuLyoqXG4gKiBDcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBrZXkuXG4gKiBAcGFyYW0ga2V5IC0gdGhlIHZhbHVlIGZvciB0aGUgb2JqZWN0IGtleVxuICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0IHJlY2lldmVzIGEgYHZhbHVlYCBhbmQgcmV0dXJucyBhbiBvYmplY3Qgb2YgeyBga2V5YDogYHZhbHVlYCB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYmpPZjxWPihcbiAga2V5OiBzdHJpbmdcbik6IChcbiAgdjogVlxuKSA9PiB7XG4gIFt4OiBzdHJpbmddOiBWO1xufSB7XG4gIHJldHVybiAodjogVikgPT4gKHsgW2tleV06IHYgfSk7XG59XG4vKipcbiAqIEFwcGxpZXMgYSBzZXQgb2YgZnVuY3Rpb25zIHRvIGFuIGFyZ3VtZW50LlxuICogQHBhcmFtIGZucyAtIG11bHRpcGxlIGZ1bmN0aW9uIGFyZ3VtZW50c1xuICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwbHkgYGZuc2AgdG8gYW4gYXJndW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8Vj4oLi4uZm5zOiBBcnJheTwoeDogVikgPT4gVj4pOiAoeDogVikgPT4gViB7XG4gIHJldHVybiAoeDogVikgPT4gWy4uLmZuc10ucmVkdWNlKChhY2MsIGYpID0+IGYoYWNjKSwgeCk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0byByZXR1cm4gYW4gb2JqZWN0J3MgcHJvcGVydHkgdmFsdWVcbiAqIEBwYXJhbSBrZXkgLSB0aGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byByZXR1cm5cbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCB3aWxsIHJldHVybiB0aGUgcHJvcGVydHkncyB2YWx1ZSBmb3IgYSByZWNlaXZlZCBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3A8VD4oa2V5OiBzdHJpbmcgfCBudW1iZXIpOiAobzogeyBbeDogc3RyaW5nXTogVCB9KSA9PiBUIHtcbiAgcmV0dXJuIChvOiB7IFt4OiBzdHJpbmddOiBUIH0pID0+IG9ba2V5XTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBpbnRlZ2VycyBmcm9tIGBuYCB0byBgbWAuXG4gKiBFeDogcmFuZ2UoMCkoMikgPT09IFswLCAxXVxuICogQHBhcmFtIG4gLSB0aGUgbG93ZXIgYm91bmQgZm9yIHRoZSByYW5nZVxuICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIHRoZSB1cHBlciBib3VuZCAoZXhjbHVzaXZlKSBmb3IgdGhlIHJhbmdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShuOiBudW1iZXIpOiAobTogbnVtYmVyKSA9PiBudW1iZXJbXSB7XG4gIHJldHVybiAobTogbnVtYmVyKSA9PlxuICAgIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KG0gLSBuKSkubWFwKChfOiBhbnksIGk6IG51bWJlcikgPT4gbiArIGkpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IHdpdGggYSB2YWx1ZSBgY2AgcmVwZWF0ZWQgYG5gIHRpbWVzLlxuICogQHBhcmFtIGMgLSB0aGUgdmFsdWUgdG8gcmVwZWF0XG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYG5gIHRvIHJlcGVhdCB2YWx1ZSBgY2BcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdDxUPihjOiBUKTogKG46IG51bWJlcikgPT4gVFtdIHtcbiAgcmV0dXJuIChuOiBudW1iZXIpID0+IG1hcChrZWVwKGMpKShyYW5nZSgwKShuKSk7XG59XG4vKipcbiAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBmcm9tIGBtaW5gIHRvIGBtYXhgIChleGNsdXNpdmUpXG4gKiBAcGFyYW0gbWluIC0gdGhlIG1pbmltdW0gdmFsdWVcbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBgbWF4YFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbjogbnVtYmVyKTogKG1heDogbnVtYmVyKSA9PiBudW1iZXIge1xuICByZXR1cm4gKG1heDogbnVtYmVyKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBmcm9tIGBtaW5gIHRvIGBtYXhgIChleGNsdXNpdmUpXG4gKiBAcGFyYW0gbWluIC0gdGhlIG1pbmltdW0gdmFsdWVcbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBgbWF4YFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbjogbnVtYmVyKTogKG1heDogbnVtYmVyKSA9PiBudW1iZXI7XG4vKipcbiAqIFJldHVybnMgYSByYW5kb20gZWxlbWVudCBmcm9tIGFuIGFycmF5XG4gKiBAcGFyYW0gYXJyYXkgLSB0aGUgYXJyYXkgdmFsdWVcbiAqIEByZXR1cm5zIEEgcmFuZG9tIGVsZW1lbnQgZnJvbSBgYXJyYXlgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb208VD4oYXJyYXk6IFRbXSk6IFQ7XG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tPFQ+KHBhcmFtMTogVFtdIHwgbnVtYmVyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHBhcmFtMSkpIHtcbiAgICByZXR1cm4gcGFyYW0xW3JhbmRvbUludCgwKShwYXJhbTEubGVuZ3RoKV07XG4gIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtMSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gKG1heDogbnVtYmVyKSA9PiBNYXRoLnJhbmRvbSgpICogbWF4ICsgcGFyYW0xO1xuICB9XG4gIHRocm93IEVycm9yKCdJbmNvbXBhdGlibGUgcGFyYW1ldGVyIHR5cGU6ICcgKyB0eXBlb2YgcGFyYW0xKTtcbn1cbi8qKlxuICogQ3JlYXRlIGFuIG9iamVjdCBmcm9tIGEgbWFwcGluZyBvZiBmdW5jdGlvbnNcbiAqXG4gKiBFeDpcbiAqXG4gKiBjb25zdCBmbk9iaiA9IHtcbiAqICAgIGFkZE9uZTogKHgpID0+IHggKyAxLFxuICogICAgbWludXNPbmU6ICh4KSA9PiB4IC0gMVxuICogfTtcbiAqXG4gKiBjb25zdCB4ID0gMTtcbiAqXG4gKiBzcGVjKGZPYmopKHgpID09PSB7IGFkZE9uZTogMiwgbWludXNPbmU6IDAgfVxuICpcbiAqIEBwYXJhbSBmbk9iaiAtIGEgbWFwcGluZyBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhbiBvYmplY3QgdG8gd2hpY2ggdGhlIGZ1bmN0aW9ucyBhcmUgYXBwbGllZFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BlYzxGIGV4dGVuZHMgKHY6IGFueSkgPT4gYW55Pihmbk9iajoge1xuICBbcDogc3RyaW5nXTogRjtcbn0pOiAoXG4gIHg6IGFueVxuKSA9PiB7XG4gIFt4OiBzdHJpbmddOiBhbnk7XG59IHtcbiAgcmV0dXJuICh4OiBhbnkpID0+XG4gICAgT2JqZWN0LmtleXMoZm5PYmopXG4gICAgICAubWFwKGtleSA9PiBvYmpPZjxGPihrZXkpKGZuT2JqW2tleV0oeCkpKVxuICAgICAgLnJlZHVjZSgoYWNjLCBvYmopID0+IE9iamVjdC5hc3NpZ24oYWNjLCBvYmopKTtcbn1cbi8qKlxuICogTWFwcyBhIHZhbHVlIGB4YCBmcm9tIGFuIGlucHV0IHJhbmdlIHRvIGFuIG91dHB1dCByYW5nZVxuICogQHBhcmFtIHggLSB0aGUgdmFsdWUgdG8gbWFwXG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYW4gaW5wdXQgcmFuZ2UgYW5kIHRoZW4gYW4gb3V0cHV0IHJhbmdlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBSYW5nZSA9ICh4OiBudW1iZXIpID0+IChpX3N0YXJ0OiBudW1iZXIsIGlfZW5kOiBudW1iZXIpID0+IChcbiAgb19zdGFydDogbnVtYmVyLFxuICBvX2VuZDogbnVtYmVyXG4pID0+ICgoeCAtIGlfc3RhcnQpICogKG9fZW5kIC0gb19zdGFydCkpIC8gKGlfZW5kIC0gaV9zdGFydCkgKyBvX3N0YXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/vector-iterator.ts":
/*!********************************!*\
  !*** ./src/vector-iterator.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An iterator for the Vector class.
 */
var VectorIterator = /** @class */ (function () {
    function VectorIterator(vector) {
        this.vector = vector;
        this.index = 0;
    }
    VectorIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    VectorIterator.prototype.next = function () {
        return {
            value: this.vector.get(this.index++),
            done: this.index > this.vector.length
        };
    };
    return VectorIterator;
}());
exports.VectorIterator = VectorIterator;


/***/ }),

/***/ "./src/vector.ts":
/*!***********************!*\
  !*** ./src/vector.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_functions_1 = __webpack_require__(/*! utility-functions */ "./node_modules/utility-functions/dist/utility-functions.js");
var vector_iterator_1 = __webpack_require__(/*! ./vector-iterator */ "./src/vector-iterator.ts");
/**
 * Converts from degrees to radians
 * @param degrees - angle in degrees to be converted
 * @returns The angle in radians
 */
function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
exports.toRadians = toRadians;
/**
 * An immutable mathmatical vector.
 */
var Vector = /** @class */ (function () {
    function Vector(values) {
        this.values = values;
        this.values = values;
    }
    /**
     * Creates a Vector from the given values.
     * @param values - vector values e.g. x, y, z
     * @returns A new Vector
     */
    Vector.create = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        return new Vector(values);
    };
    /**
     * Fills a Vector with a given value `c`.
     * @param c - value to fill with
     * @param length - number of times to repeat `c` in Vector
     * @returns A new Vector
     */
    Vector.fill = function (c, length) {
        return new Vector(utility_functions_1.repeat(c)(length));
    };
    /**
     * Creates a random 2D Vector.
     * @param magnitude - optional value for the Vector's magnitude
     * @returns A new Vector
     */
    Vector.random2D = function (magnitude) {
        var v = new Vector([1, 0]).rotate(utility_functions_1.random(0)(Math.PI * 2));
        return magnitude != null ? v.setMag(magnitude) : v;
    };
    /**
     * The angle θ between a vector and the x-axis such that −π < θ ≤ π.
     */
    Vector.heading = function (vector) {
        return Math.atan2(vector[1], vector[0]);
    };
    /**
     * A normalized version of this vector.
     * @returns A copy of this vector with magnitude === 1
     */
    Vector.normalize = function (vector) {
        return Vector.setMag(vector, 1);
    };
    /**
     * Rotates this vector by `angle` radians.
     * @param angle - the angle with which to rotate in radians
     * @returns A copy of this vector rotated by `angle`
     */
    Vector.rotate = function (vector, angle) {
        return [
            vector[0] * Math.cos(angle) - vector[1] * Math.sin(angle),
            vector[0] * Math.sin(angle) + vector[1] * Math.cos(angle)
        ];
    };
    /**
     * The magnitude of a vector, i.e. size.
     */
    Vector.getMag = function (vector) {
        return Math.sqrt(vector.reduce(function (acc, value) { return acc + value * value; }, 0));
    };
    /**
     * Sets the magnitude of this vector to a given value.
     * @param magnitude - the value with which to set the magnitude
     * @returns A copy of this vector with the given magnitude
     */
    Vector.setMag = function (vector, magnitude) {
        var mag = Vector.getMag(vector);
        return vector.map(function (v) { return (v / mag) * magnitude; });
    };
    /**
     * Limits a this vectors magnitude by the given amount.
     * @param maxMagnitude - the maximum magnitude allowed
     * @returns A vector with a magnitude less than or equal to `max`
     */
    Vector.limit = function (vector, maxMagnitude) {
        return Vector.getMag(vector) > maxMagnitude
            ? Vector.setMag(vector, maxMagnitude)
            : vector;
    };
    /**
     * Calculates the distance between two vectors.
     * @param other - the other vector
     * @returns The distance between this vector and `other`
     */
    Vector.dist = function (vector, other) {
        return Math.sqrt(vector.reduce(function (acc, value, index) { return acc + Math.pow(other[index] - value, 2); }, 0));
    };
    /**
     * Calculates the sum of this vector and another.
     * @param vs - the vector(s) with which to add (addends)
     * @returns The summation of this vector and `vs`
     */
    Vector.add = function () {
        var vs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vs[_i] = arguments[_i];
        }
        if (vs.length <= 1) {
            return vs.length === 1 ? vs[0] : [];
        }
        var a = vs[0];
        var b = Vector.add.apply(Vector, __spread(utility_functions_1.dropFirst(vs)));
        return a.map(function (v, i) { return v + b[i]; });
    };
    /**
     * Calculates the difference between this vector and another.
     * @param vs - the vector(s) with which to subtract (subtrahends)
     * @returns The difference between this vector and `vs`
     */
    Vector.subtract = function () {
        var vs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vs[_i] = arguments[_i];
        }
        if (vs.length <= 1) {
            return vs.length === 1 ? vs[0] : [];
        }
        var a = vs[0];
        var b = Vector.add.apply(Vector, __spread(utility_functions_1.dropFirst(vs)));
        return a.map(function (v, i) { return v - b[i]; });
    };
    /**
     * Multiplies this vector by a scalar (scalar multiplication).
     * @param ns - the values with which to multiply
     * @returns A copy of this vector scaled by `n` and `ns`
     */
    Vector.mult = function (vector) {
        var ns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            ns[_i - 1] = arguments[_i];
        }
        var n = ns.length === 1 ? ns[0] : ns.reduce(function (acc, c) { return acc * c; }, 1);
        return vector.map(function (v) { return v * n; });
    };
    /**
     * Calculates the dot product of this vector and another (scalar product).
     * @param other - the other vector with which to calculate the dot product
     * @returns The dot product
     */
    Vector.dotProduct = function (vector, other) {
        return vector.reduce(function (acc, value, i) { return acc + value * other[i]; }, 0);
    };
    Vector.prototype[Symbol.iterator] = function () {
        return this.getIterator();
    };
    /**
     * @returns A iterator for the values in this Vector
     */
    Vector.prototype.getIterator = function () {
        return new vector_iterator_1.VectorIterator(this);
    };
    /**
     * Returns a value in this Vector.
     * @param index - the index of the value to return
     * @returns the value at `index`
     */
    Vector.prototype.get = function (index) {
        return this.values[index];
    };
    Vector.prototype.toArray = function () {
        return __spread(this.values);
    };
    Object.defineProperty(Vector.prototype, "magnitude", {
        /**
         * The magnitude of this Vector, i.e. size.
         */
        get: function () {
            return this._magnitude != null
                ? this._magnitude
                : (this._magnitude = Vector.getMag(this.values));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "heading", {
        /**
         * The angle θ between this Vector and the x-axis such that −π < θ ≤ π.
         */
        get: function () {
            return Vector.heading(this.values);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "length", {
        /**
         * The number of values in this Vector, e.g. 2D => length === 2.
         */
        get: function () {
            return this.values.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "x", {
        /**
         * The x value for this Vector, i.e. this[0]
         */
        get: function () {
            return this.values[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        /**
         * The y value for this Vector, i.e. this[1]
         */
        get: function () {
            return this.values[1];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "z", {
        /**
         * The z value for this Vector, i.e. this[2]
         */
        get: function () {
            return this.values[2];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A normalized version of this Vector.
     * @returns A copy of this Vector with magnitude === 1
     */
    Vector.prototype.normalize = function () {
        return this.setMag(1);
    };
    /**
     * Rotates this Vector by `angle` radians.
     * @param angle - the angle with which to rotate in radians
     * @returns A copy of this Vector rotated by `angle`
     */
    Vector.prototype.rotate = function (angle) {
        return new Vector(Vector.rotate(this.values, angle));
    };
    /**
     * Sets the magnitude of this Vector to a given value.
     * @param magnitude - the value with which to set the magnitude
     * @returns A copy of this Vector with the given magnitude
     */
    Vector.prototype.setMag = function (magnitude) {
        return new Vector(Vector.mult(this.values, magnitude / this.magnitude));
    };
    /**
     * Limits a this Vectors magnitude by the given amount.
     * @param maxMagnitude - the maximum magnitude allowed
     * @returns A Vector with a magnitude less than or equal to `max`
     */
    Vector.prototype.limit = function (maxMagnitude) {
        return this.magnitude > maxMagnitude ? this.setMag(maxMagnitude) : this;
    };
    /**
     * Calculates the distance between two Vectors.
     * @param other - the other Vector
     * @returns The distance between this Vector and `other`
     */
    Vector.prototype.dist = function (other) {
        return Vector.dist(this.values, other.values);
    };
    /**
     * Calculates the sum of this Vector and another.
     * @param vs - the Vector(s) with which to add (addends)
     * @returns The summation of this Vector and `vs`
     */
    Vector.prototype.add = function () {
        var vs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vs[_i] = arguments[_i];
        }
        if (vs.length < 1) {
            return this;
        }
        return new Vector(Vector.add.apply(Vector, __spread([this.values], vs.map(function (v) { return v.values; }))));
    };
    /**
     * Calculates the difference between this Vector and another.
     * @param vs - the Vector(s) with which to subtract (subtrahends)
     * @returns The difference between this Vector and `vs`
     */
    Vector.prototype.subtract = function () {
        var vs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vs[_i] = arguments[_i];
        }
        if (vs.length < 1) {
            return this;
        }
        return new Vector(Vector.subtract.apply(Vector, __spread([this.values], vs.map(function (v) { return v.values; }))));
    };
    /**
     * Multiplies this Vector by a scalar (scalar multiplication).
     * @param ns - the values with which to multiply
     * @returns A copy of this Vector scaled by `n` and `ns`
     */
    Vector.prototype.mult = function () {
        var ns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ns[_i] = arguments[_i];
        }
        return new Vector(Vector.mult.apply(Vector, __spread([this.values], ns)));
    };
    /**
     * @returns A copy of this Vector.
     */
    Vector.prototype.copy = function () {
        return new Vector(this.values);
    };
    /**
     * Calculates the dot product of this Vector and another (scalar product).
     * @param other - the other Vector with which to calculate the dot product
     * @returns The dot product
     */
    Vector.prototype.dotProduct = function (other) {
        return Vector.dotProduct(this.values, other.values);
    };
    return Vector;
}());
exports.Vector = Vector;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWN0b3Ivd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3ZlY3Rvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ZWN0b3IvLi9ub2RlX21vZHVsZXMvdXRpbGl0eS1mdW5jdGlvbnMvZGlzdC91dGlsaXR5LWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly92ZWN0b3IvLi9zcmMvdmVjdG9yLWl0ZXJhdG9yLnRzIiwid2VicGFjazovL3ZlY3Rvci8uL3NyYy92ZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxlQUFlLEtBQWlELG9CQUFvQixTQUEySixDQUFDLG9CQUFvQixtQkFBbUIsU0FBUyxjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsdUNBQXVDLHFDQUFxQyxvQkFBb0IsRUFBRSxpQkFBaUIsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsRUFBRSxtQkFBbUIsOEJBQThCLHFEQUFxRCwwQkFBMEIsNkNBQTZDLHNCQUFzQiw2REFBNkQsWUFBWSxlQUFlLFNBQVMsaUJBQWlCLGlDQUFpQyxpQkFBaUIsWUFBWSxVQUFVLHNCQUFzQixtQkFBbUIsaURBQWlELGlCQUFpQixrQkFBa0IsYUFBYSw0Q0FBNEMsbUNBQW1DLElBQUksMkJBQTJCLG1CQUFtQixRQUFRLElBQUksMENBQTBDLElBQUksa0JBQWtCLFVBQVUsY0FBYyxtQkFBbUIsVUFBVSxjQUFjLG1CQUFtQixpQkFBaUIsY0FBYyxtQkFBbUIsNEJBQTRCLGVBQWUsSUFBSSxjQUFjLG1CQUFtQixNQUFNLFdBQVcsVUFBVSxjQUFjLG1CQUFtQix1REFBdUQsV0FBVyxJQUFJLGNBQWMsbUJBQW1CLHNDQUFzQyxzQ0FBc0MsU0FBUywwQkFBMEIsa0JBQWtCLHdCQUF3Qiw2QkFBNkIsa0JBQWtCLFNBQVMsZ0RBQWdELG1CQUFtQixtQkFBbUIsc0JBQXNCLG1CQUFtQixxQkFBcUIsUUFBUSxxQkFBcUIsNkJBQTZCLG1CQUFtQiw2QkFBNkIsbUJBQW1CLG1CQUFtQixpQkFBaUIsNkJBQTZCLGlCQUFpQixtQkFBbUIsc0JBQXNCLG1CQUFtQixrQ0FBa0MsWUFBWSxNQUFNLG9CQUFvQixtQkFBbUIsYUFBYSxnQ0FBZ0MsbUJBQW1CLHlCQUF5QixvQ0FBb0MsNkNBQTZDLHlDQUF5QywwQkFBMEIsc0RBQXNELG9CQUFvQixtQkFBbUIsdUNBQXVDLHFCQUFxQix5QkFBeUIsMEJBQTBCLElBQUksd0JBQXdCLHFCQUFxQixxQkFBcUIsNkJBQTZCLEdBQUc7QUFDaC9GLDJDQUEyQyxjQUFjLG04akI7Ozs7Ozs7Ozs7Ozs7O0FDRHpEOztHQUVHO0FBQ0g7SUFFRSx3QkFBbUIsTUFBbUQ7UUFBbkQsV0FBTSxHQUFOLE1BQU0sQ0FBNkM7UUFEOUQsVUFBSyxHQUFHLENBQUMsQ0FBQztJQUN1RCxDQUFDO0lBQzFFLHlCQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCw2QkFBSSxHQUFKO1FBQ0UsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDO0FBWlksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDNCLHFJQUE4RDtBQUM5RCxpR0FBbUQ7QUFFbkQ7Ozs7R0FJRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxPQUFlO0lBQ3ZDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNuQyxDQUFDO0FBRkQsOEJBRUM7QUFDRDs7R0FFRztBQUNIO0lBdUpFLGdCQUFxQyxNQUE2QjtRQUE3QixXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBdkpEOzs7O09BSUc7SUFDSSxhQUFNLEdBQWI7UUFBYyxnQkFBbUI7YUFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO1lBQW5CLDJCQUFtQjs7UUFDL0IsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDSSxXQUFJLEdBQVgsVUFBWSxDQUFTLEVBQUUsTUFBYztRQUNuQyxPQUFPLElBQUksTUFBTSxDQUFDLDBCQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLGVBQVEsR0FBZixVQUFnQixTQUFrQjtRQUNoQyxJQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQywwQkFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxjQUFPLEdBQWQsVUFBZSxNQUE2QjtRQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRDs7O09BR0c7SUFDSSxnQkFBUyxHQUFoQixVQUFpQixNQUE2QjtRQUM1QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksYUFBTSxHQUFiLFVBQWMsTUFBNkIsRUFBRSxLQUFhO1FBQ3hELE9BQU87WUFDTCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzFELENBQUM7SUFDSixDQUFDO0lBQ0Q7O09BRUc7SUFDSSxhQUFNLEdBQWIsVUFBYyxNQUE2QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssVUFBRyxHQUFHLEtBQUssR0FBRyxLQUFLLEVBQW5CLENBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLGFBQU0sR0FBYixVQUFjLE1BQTZCLEVBQUUsU0FBaUI7UUFDNUQsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksWUFBSyxHQUFaLFVBQ0UsTUFBNkIsRUFDN0IsWUFBb0I7UUFFcEIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFlBQVk7WUFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztZQUNyQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2IsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSxXQUFJLEdBQVgsVUFDRSxNQUE2QixFQUM3QixLQUE0QjtRQUU1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FDWCxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxJQUFLLFVBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQXZDLENBQXVDLEVBQzlELENBQUMsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLFVBQUcsR0FBVjtRQUFXLFlBQW1DO2FBQW5DLFVBQW1DLEVBQW5DLHFCQUFtQyxFQUFuQyxJQUFtQztZQUFuQyx1QkFBbUM7O1FBQzVDLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDckM7UUFFRCxJQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBVixNQUFNLFdBQVEsNkJBQVMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBRXZDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBUixDQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLGVBQVEsR0FBZjtRQUNFLFlBQW1DO2FBQW5DLFVBQW1DLEVBQW5DLHFCQUFtQyxFQUFuQyxJQUFtQztZQUFuQyx1QkFBbUM7O1FBRW5DLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDckM7UUFFRCxJQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsT0FBVixNQUFNLFdBQVEsNkJBQVMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBRXZDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssUUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBUixDQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLFdBQUksR0FBWCxVQUNFLE1BQTZCO1FBQzdCLFlBQTRCO2FBQTVCLFVBQTRCLEVBQTVCLHFCQUE0QixFQUE1QixJQUE0QjtZQUE1QiwyQkFBNEI7O1FBRTVCLElBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFLLFVBQUcsR0FBRyxDQUFDLEVBQVAsQ0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxHQUFHLENBQUMsRUFBTCxDQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLGlCQUFVLEdBQWpCLFVBQ0UsTUFBNkIsRUFDN0IsS0FBNEI7UUFFNUIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUssVUFBRyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUlELGlCQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0Q7O09BRUc7SUFDSSw0QkFBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxnQ0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksb0JBQUcsR0FBVixVQUFXLEtBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSx3QkFBTyxHQUFkO1FBQ0UsZ0JBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRTtJQUMxQixDQUFDO0lBSUQsc0JBQUksNkJBQVM7UUFIYjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUk7Z0JBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFDakIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBSUQsc0JBQUksMkJBQU87UUFIWDs7V0FFRzthQUNIO1lBQ0UsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLDBCQUFNO1FBSFY7O1dBRUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSxxQkFBQztRQUhMOztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSxxQkFBQztRQUhMOztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFJRCxzQkFBSSxxQkFBQztRQUhMOztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFDRDs7O09BR0c7SUFDSSwwQkFBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLHVCQUFNLEdBQWIsVUFBYyxLQUFhO1FBQ3pCLE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSx1QkFBTSxHQUFiLFVBQWMsU0FBaUI7UUFDN0IsT0FBTyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksc0JBQUssR0FBWixVQUFhLFlBQW9CO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLHFCQUFJLEdBQVgsVUFBWSxLQUFhO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNJLG9CQUFHLEdBQVY7UUFBVyxZQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLHVCQUFlOztRQUN4QixJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQVYsTUFBTSxZQUFLLElBQUksQ0FBQyxNQUFNLEdBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsR0FBRSxDQUFDO0lBQ3ZFLENBQUM7SUFDRDs7OztPQUlHO0lBQ0kseUJBQVEsR0FBZjtRQUFnQixZQUFlO2FBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtZQUFmLHVCQUFlOztRQUM3QixJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLE9BQWYsTUFBTSxZQUFVLElBQUksQ0FBQyxNQUFNLEdBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsR0FBRSxDQUFDO0lBQzVFLENBQUM7SUFDRDs7OztPQUlHO0lBQ0kscUJBQUksR0FBWDtRQUFZLFlBQWU7YUFBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1lBQWYsdUJBQWU7O1FBQ3pCLE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLFlBQU0sSUFBSSxDQUFDLE1BQU0sR0FBSyxFQUFFLEdBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxxQkFBSSxHQUFYO1FBQ0UsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSwyQkFBVSxHQUFqQixVQUFrQixLQUFhO1FBQzdCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7QUF2U1ksd0JBQU0iLCJmaWxlIjoidmVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ2ZWN0b3JcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widmVjdG9yXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInZlY3RvclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdmVjdG9yLnRzXCIpO1xuIiwiIWZ1bmN0aW9uKG4scil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9cigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJ1dGlsaXR5LWZ1bmN0aW9uc1wiLFtdLHIpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHNbXCJ1dGlsaXR5LWZ1bmN0aW9uc1wiXT1yKCk6bltcInV0aWxpdHktZnVuY3Rpb25zXCJdPXIoKX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihuKXt2YXIgcj17fTtmdW5jdGlvbiB0KGUpe2lmKHJbZV0pcmV0dXJuIHJbZV0uZXhwb3J0czt2YXIgdT1yW2VdPXtpOmUsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gbltlXS5jYWxsKHUuZXhwb3J0cyx1LHUuZXhwb3J0cyx0KSx1Lmw9ITAsdS5leHBvcnRzfXJldHVybiB0Lm09bix0LmM9cix0LmQ9ZnVuY3Rpb24obixyLGUpe3QubyhuLHIpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkobixyLHtlbnVtZXJhYmxlOiEwLGdldDplfSl9LHQucj1mdW5jdGlvbihuKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSx0LnQ9ZnVuY3Rpb24obixyKXtpZigxJnImJihuPXQobikpLDgmcilyZXR1cm4gbjtpZig0JnImJlwib2JqZWN0XCI9PXR5cGVvZiBuJiZuJiZuLl9fZXNNb2R1bGUpcmV0dXJuIG47dmFyIGU9T2JqZWN0LmNyZWF0ZShudWxsKTtpZih0LnIoZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6bn0pLDImciYmXCJzdHJpbmdcIiE9dHlwZW9mIG4pZm9yKHZhciB1IGluIG4pdC5kKGUsdSxmdW5jdGlvbihyKXtyZXR1cm4gbltyXX0uYmluZChudWxsLHUpKTtyZXR1cm4gZX0sdC5uPWZ1bmN0aW9uKG4pe3ZhciByPW4mJm4uX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBuLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIG59O3JldHVybiB0LmQocixcImFcIixyKSxyfSx0Lm89ZnVuY3Rpb24obixyKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scil9LHQucD1cIlwiLHQodC5zPTApfShbZnVuY3Rpb24obixyLHQpe1widXNlIHN0cmljdFwiO3ZhciBlPXRoaXMmJnRoaXMuX19zcHJlYWRBcnJheXN8fGZ1bmN0aW9uKCl7Zm9yKHZhciBuPTAscj0wLHQ9YXJndW1lbnRzLmxlbmd0aDtyPHQ7cisrKW4rPWFyZ3VtZW50c1tyXS5sZW5ndGg7dmFyIGU9QXJyYXkobiksdT0wO2ZvcihyPTA7cjx0O3IrKylmb3IodmFyIG89YXJndW1lbnRzW3JdLGk9MCxmPW8ubGVuZ3RoO2k8ZjtpKyssdSsrKWVbdV09b1tpXTtyZXR1cm4gZX07ZnVuY3Rpb24gdShuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIG59fWZ1bmN0aW9uIG8obil7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiByLm1hcChuKX19ZnVuY3Rpb24gaShuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHIubWFwKChmdW5jdGlvbihyLHQpe3JldHVybiBuKHIpKHQpfSkpfX1mdW5jdGlvbiBmKG4pe3JldHVybiBmdW5jdGlvbihyKXt2YXIgdDtyZXR1cm4odD17fSlbbl09cix0fX1mdW5jdGlvbiBjKG4pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gQXJyYXkuYXBwbHkobnVsbCxBcnJheShyLW4pKS5tYXAoKGZ1bmN0aW9uKHIsdCl7cmV0dXJuIG4rdH0pKX19ZnVuY3Rpb24gYShuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpyKStufX1PYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyLmRyb3BGaXJzdD1mdW5jdGlvbihuKXtyZXR1cm4gbi5zbGljZSgxKX0sci5kcm9wTGFzdD1mdW5jdGlvbihuKXtyZXR1cm4gbi5zbGljZSgwLG4ubGVuZ3RoLTEpfSxyLmlkPWZ1bmN0aW9uKG4pe3JldHVybiBufSxyLmtlZXA9dSxyLm1hcD1vLHIubWFwaT1pLHIuYWRqdXN0PWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGkoKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZT09PW4/cih0KTp0fX0pKSh0KX19fSxyLm1lcmdlPWZ1bmN0aW9uKG4pe3ZhciByPUFycmF5LmlzQXJyYXkobik/W106e307cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuYXNzaWduKHIsbix0KX19LHIubW9kPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4ociVuK24pJW59fSxyLm9iak9mPWYsci5waXBlPWZ1bmN0aW9uKCl7Zm9yKHZhciBuPVtdLHI9MDtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKW5bcl09YXJndW1lbnRzW3JdO3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gZShuKS5yZWR1Y2UoKGZ1bmN0aW9uKG4scil7cmV0dXJuIHIobil9KSxyKX19LHIucHJvcD1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHJbbl19fSxyLnJhbmdlPWMsci5yZXBlYXQ9ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiBvKHUobikpKGMoMCkocikpfX0sci5yYW5kb21JbnQ9YSxyLnJhbmRvbT1mdW5jdGlvbihuKXtpZihBcnJheS5pc0FycmF5KG4pKXJldHVybiBuW2EoMCkobi5sZW5ndGgpXTtpZihcIm51bWJlclwiPT10eXBlb2YgbilyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIE1hdGgucmFuZG9tKCkqcitufTt0aHJvdyBFcnJvcihcIkluY29tcGF0aWJsZSBwYXJhbWV0ZXIgdHlwZTogXCIrdHlwZW9mIG4pfSxyLnNwZWM9ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiBPYmplY3Qua2V5cyhuKS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBmKHQpKG5bdF0ocikpfSkpLnJlZHVjZSgoZnVuY3Rpb24obixyKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuLHIpfSkpfX0sci5tYXBSYW5nZT1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24ocix0KXtyZXR1cm4gZnVuY3Rpb24oZSx1KXtyZXR1cm4obi1yKSoodS1lKS8odC1yKStlfX19fV0pfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5MWRHbHNhWFI1TFdaMWJtTjBhVzl1Y3k5M1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENKM1pXSndZV05yT2k4dmRYUnBiR2wwZVMxbWRXNWpkR2x2Ym5NdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZkWFJwYkdsMGVTMW1kVzVqZEdsdmJuTXZMaTl6Y21NdmRYUnBiR2wwZVMxbWRXNWpkR2x2Ym5NdWRITWlYU3dpYm1GdFpYTWlPbHNpY205dmRDSXNJbVpoWTNSdmNua2lMQ0psZUhCdmNuUnpJaXdpYlc5a2RXeGxJaXdpWkdWbWFXNWxJaXdpWVcxa0lpd2lkMmx1Wkc5M0lpd2lhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5SXNJbDlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThpTENKdGIyUjFiR1ZKWkNJc0lta2lMQ0pzSWl3aWJXOWtkV3hsY3lJc0ltTmhiR3dpTENKdElpd2lZeUlzSW1RaUxDSnVZVzFsSWl3aVoyVjBkR1Z5SWl3aWJ5SXNJazlpYW1WamRDSXNJbVJsWm1sdVpWQnliM0JsY25SNUlpd2laVzUxYldWeVlXSnNaU0lzSW1kbGRDSXNJbklpTENKVGVXMWliMndpTENKMGIxTjBjbWx1WjFSaFp5SXNJblpoYkhWbElpd2lkQ0lzSW0xdlpHVWlMQ0pmWDJWelRXOWtkV3hsSWl3aWJuTWlMQ0pqY21WaGRHVWlMQ0pyWlhraUxDSmlhVzVrSWl3aWJpSXNJbTlpYW1WamRDSXNJbkJ5YjNCbGNuUjVJaXdpY0hKdmRHOTBlWEJsSWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKd0lpd2ljeUlzSW10bFpYQWlMQ0o0SWl3aVh5SXNJbTFoY0NJc0ltWWlMQ0o0Y3lJc0ltMWhjR2tpTENKcGJtUmxlQ0lzSW05aWFrOW1JaXdpZGlJc0luSmhibWRsSWl3aVFYSnlZWGtpTENKaGNIQnNlU0lzSW5KaGJtUnZiVWx1ZENJc0ltMXBiaUlzSW0xaGVDSXNJazFoZEdnaUxDSm1iRzl2Y2lJc0luSmhibVJ2YlNJc0luTnNhV05sSWl3aWJHVnVaM1JvSWl3aVltRnpaU0lzSW1selFYSnlZWGtpTENKdmRHaGxjaUlzSW1GemMybG5iaUlzSW5raUxDSm1ibk1pTENKeVpXUjFZMlVpTENKaFkyTWlMQ0p3WVhKaGJURWlMQ0pGY25KdmNpSXNJbVp1VDJKcUlpd2lhMlY1Y3lJc0ltOWlhaUlzSW0xaGNGSmhibWRsSWl3aWFWOXpkR0Z5ZENJc0ltbGZaVzVrSWl3aWIxOXpkR0Z5ZENJc0ltOWZaVzVrSWwwc0ltMWhjSEJwYm1keklqb2lRMEZCUVN4VFFVRXlRMEVzUlVGQlRVTXNSMEZETVVJc2FVSkJRVnBETEZOQlFUQkRMR2xDUVVGWVF5eFBRVU40UTBFc1QwRkJUMFFzVVVGQlZVUXNTVUZEVVN4dFFrRkJXRWNzVVVGQmVVSkJMRTlCUVU5RExFbEJRemxEUkN4UFFVRlBMRzlDUVVGeFFpeEhRVUZKU0N4SFFVTk9MR2xDUVVGYVF5eFJRVU5rUVN4UlFVRlJMSEZDUVVGMVFrUXNTVUZGTDBKRUxFVkJRVXNzY1VKQlFYVkNReXhKUVZJNVFpeERRVk5IU3l4UlFVRlJMRmRCUTFnc1R5eFpRMVJGTEVsQlFVbERMRVZCUVcxQ0xFZEJSM1pDTEZOQlFWTkRMRVZCUVc5Q1F5eEhRVWMxUWl4SFFVRkhSaXhGUVVGcFFrVXNSMEZEYmtJc1QwRkJUMFlzUlVGQmFVSkZMRWRCUVZWUUxGRkJSMjVETEVsQlFVbERMRVZCUVZOSkxFVkJRV2xDUlN4SFFVRlpMRU5CUTNwRFF5eEZRVUZIUkN4RlFVTklSU3hIUVVGSExFVkJRMGhVTEZGQlFWTXNTVUZWVml4UFFVNUJWU3hGUVVGUlNDeEhRVUZWU1N4TFFVRkxWaXhGUVVGUFJDeFJRVUZUUXl4RlFVRlJRU3hGUVVGUFJDeFJRVUZUVFN4SFFVY3ZSRXdzUlVGQlQxRXNSMEZCU1N4RlFVZEtVaXhGUVVGUFJDeFJRVEJFWml4UFFYSkVRVTBzUlVGQmIwSk5MRVZCUVVsR0xFVkJSM2hDU2l4RlFVRnZRazhzUlVGQlNWSXNSVUZIZUVKRExFVkJRVzlDVVN4RlFVRkpMRk5CUVZOa0xFVkJRVk5sTEVWQlFVMURMRWRCUXpORFZpeEZRVUZ2UWxjc1JVRkJSV3BDTEVWQlFWTmxMRWxCUTJ4RFJ5eFBRVUZQUXl4bFFVRmxia0lzUlVGQlUyVXNSVUZCVFN4RFFVRkZTeXhaUVVGWkxFVkJRVTFETEVsQlFVdE1MRXRCUzJoRlZpeEZRVUZ2UW1kQ0xFVkJRVWtzVTBGQlUzUkNMRWRCUTFnc2IwSkJRVmgxUWl4UlFVRXdRa0VzVDBGQlQwTXNZVUZETVVOT0xFOUJRVTlETEdWQlFXVnVRaXhGUVVGVGRVSXNUMEZCVDBNc1dVRkJZU3hEUVVGRlF5eE5RVUZQTEZkQlJUZEVVQ3hQUVVGUFF5eGxRVUZsYmtJc1JVRkJVeXhoUVVGakxFTkJRVVY1UWl4UFFVRlBMRXRCVVhaRWJrSXNSVUZCYjBKdlFpeEZRVUZKTEZOQlFWTkVMRVZCUVU5RkxFZEJSWFpETEVkQlJGVXNSVUZCVUVFc1NVRkJWVVlzUlVGQlVXNUNMRVZCUVc5Q2JVSXNTVUZETDBJc1JVRkJVRVVzUlVGQlZTeFBRVUZQUml4RlFVTndRaXhIUVVGWExFVkJRVkJGTEVkQlFUaENMR2xDUVVGV1JpeEhRVUZ6UWtFc1IwRkJVMEVzUlVGQlRVY3NWMEZCV1N4UFFVRlBTQ3hGUVVOb1JpeEpRVUZKU1N4RlFVRkxXQ3hQUVVGUFdTeFBRVUZQTEUxQlIzWkNMRWRCUmtGNFFpeEZRVUZ2UW1kQ0xFVkJRVVZQTEVkQlEzUkNXQ3hQUVVGUFF5eGxRVUZsVlN4RlFVRkpMRlZCUVZjc1EwRkJSVlFzV1VGQldTeEZRVUZOU3l4TlFVRlBRU3hKUVVOMFJDeEZRVUZRUlN4SFFVRTBRaXhwUWtGQlZFWXNSVUZCYlVJc1NVRkJTU3hKUVVGSlRTeExRVUZQVGl4RlFVRlBia0lzUlVGQmIwSlJMRVZCUVVWbExFVkJRVWxGTEVWQlFVc3NVMEZCVTBFc1IwRkJUeXhQUVVGUFRpeEZRVUZOVFN4SlFVRlJReXhMUVVGTExFdEJRVTFFTEVsQlF6bEpMRTlCUVU5R0xFZEJTVkoyUWl4RlFVRnZRakpDTEVWQlFVa3NVMEZCVTJoRExFZEJRMmhETEVsQlFVbGxMRVZCUVZObUxFZEJRVlZCTEVWQlFVOHlRaXhYUVVNM1FpeFhRVUYzUWl4UFFVRlBNMElzUlVGQlowSXNVMEZETDBNc1YwRkJPRUlzVDBGQlQwRXNSMEZGZEVNc1QwRkVRVXNzUlVGQmIwSlJMRVZCUVVWRkxFVkJRVkVzU1VGQlMwRXNSMEZETlVKQkxFZEJTVkpXTEVWQlFXOUNWeXhGUVVGSkxGTkJRVk5wUWl4RlFVRlJReXhIUVVGWkxFOUJRVTlxUWl4UFFVRlBhMElzVlVGQlZVTXNaVUZCWlRGQ0xFdEJRVXQxUWl4RlFVRlJReXhKUVVkNlJ6ZENMRVZCUVc5Q1owTXNSVUZCU1N4SFFVbHFRbWhETEVWQlFXOUNRU3hGUVVGdlFtbERMRVZCUVVrc1J5eHpVRU55UkhKRUxGTkJRV2RDUXl4RlFVRlJReXhIUVVOMFFpeFBRVUZQTEZOQlFVTkRMRWRCUVZjc1QwRkJRVVFzUjBGUGNrSXNVMEZCWjBKRkxFVkJRVlZETEVkQlEzaENMRTlCUVU4c1UwRkJRME1zUjBGQldTeFBRVUZCUVN4RlFVRkhSaXhKUVVGSlF5eEpRVTgzUWl4VFFVRm5Ra1VzUlVGQlYwWXNSMEZEZWtJc1QwRkJUeXhUUVVGRFF5eEhRVUZaTEU5QlFVRkJMRVZCUVVkR0xFdEJRVWtzVTBGQlEyeENMRVZCUVZWelFpeEhRVUZyUWl4UFFVRkJTQ3hGUVVGRmJrSXNSVUZCUm0xQ0xFTkJRVk5ITEU5QmMwTnVSU3hUUVVGblFrTXNSVUZEWkdwQ0xFZEJUVUVzVDBGQlR5eFRRVUZEYTBJc1J5eE5RVUZUTEdGQlFVbHNRaXhIUVVGTmEwSXNSVUZCUXl4SFFYZENPVUlzVTBGQlowSkRMRVZCUVUxcVFpeEhRVU53UWl4UFFVRlBMRk5CUVVOeVFpeEhRVU5PTEU5QlFVRjFReXhOUVVGTlF5eE5RVUZOTEV0QlFVMUVMRTFCUVUxMlF5eEZRVUZKY1VJc1NVRkJTVlVzUzBGQlNTeFRRVUZEUkN4RlFVRlJiRU1zUjBGQll5eFBRVUZCZVVJc1JVRkJTWHBDTEUxQlpXNUZMRk5CUVdkQ05rTXNSVUZCVlVNc1IwRkRlRUlzVDBGQlR5eFRRVUZEUXl4SFFVRm5RaXhQUVVGQlF5eExRVUZMUXl4TlFVRk5SQ3hMUVVGTFJTeFRRVUZYU0N4SFFVRlBSQ3hITEdsRVFXaEpOVVFzY1VKQlFUWkNWQ3hIUVVNelFpeFBRVUZQUVN4RlFVRkhZeXhOUVVGTkxFbEJUMnhDTEc5Q1FVRTBRbVFzUjBGRE1VSXNUMEZCVDBFc1JVRkJSMk1zVFVGQlRTeEZRVUZIWkN4RlFVRkhaU3hQUVVGVExFbEJUMnBETEdOQlFYTkNia0lzUjBGRGNFSXNUMEZCVDBFc1IwRlBWQ3hUUVZGQkxGRkJVVUVzVTBGUlFTeHJRa0ZEUlZJc1IwRkZRU3hQUVVGUExGTkJRVU5YTEVkQlFXMUNMR2RDUVVGRFF5eEhRVU14UWl4UFFVRkJReXhIUVVGTExGTkJRVU5NTEVkQlFWTXNaMEpCUVVOcVF5eEhRVUZqTEU5QlFVTkJMRWxCUVUxNVFpeEZRVUZKVnl4RlFVRkZTQ3hIUVVGTFFTeExRVUZvUkVzc1EwRkJiMFJFTEUxQlZYaEVMR2xDUVVGelFtZENMRWRCUTNCQ0xFbEJRVTB2UkN4RlFVRlBjVVFzVFVGQlRWY3NVVUZCVVVRc1IwRkJVU3hIUVVGTExFZEJRM2hETEU5QlFVOHNVMEZCUTBVc1IwRkJaU3hQUVVGQk4wTXNUMEZCVHpoRExFOUJRVTlzUlN4RlFVRk5LMFFzUlVGQlRVVXNTMEZQYmtRc1pVRkJiMEk1UWl4SFFVTnNRaXhQUVVGUExGTkJRVU5uUXl4SFFVRmpMRTlCUVVWQkxFVkJRVWxvUXl4RlFVRkxRU3hIUVVGTFFTeEpRVTk0UXl4VlFXTkJMR3RDTEVsQlFYZENMSE5FUVVOMFFpeFBRVUZQTEZOQlFVTlJMRWRCUVZNc1UwRkJTWGxDTEVkQlFVdERMRkZCUVU4c1UwRkJRME1zUlVGQlMzaENMRWRCUVUwc1QwRkJRVUVzUlVGQlJYZENMRXRCUVUwelFpeExRVTkyUkN4blFrRkJkMEpXTEVkQlEzUkNMRTlCUVU4c1UwRkJRMlFzUjBGQk1FSXNUMEZCUVVFc1JVRkJSV01zUzBGUmRFTXNWVUZUUVN4clFrRkJNRUpzUWl4SFFVTjRRaXhQUVVGUExGTkJRVU52UWl4SFFVRmpMRTlCUVVGVkxFVkJRVWxJTEVWQlFVc3pRaXhIUVVGVU9FSXNRMEZCWVU4c1JVRkJUU3hGUVVGT1FTeERRVUZUYWtJc1RVRlBPVU1zWTBGbFFTeHJRa0ZCTUVKdlF5eEhRVU40UWl4SFFVRkpiRUlzVFVGQlRWY3NVVUZCVVU4c1IwRkRhRUlzVDBGQlQwRXNSVUZCVDJoQ0xFVkJRVlVzUlVGQlZrRXNRMEZCWVdkQ0xFVkJRVTlVTEZOQlF6ZENMRWRCUVhOQ0xHbENRVUZZVXl4RlFVTm9RaXhQUVVGUExGTkJRVU5rTEVkQlFXZENMRTlCUVVGRExFdEJRVXRGTEZOQlFWZElMRVZCUVUxakxFZEJSV2hFTEUxQlFVMURMRTFCUVUwc2RVTkJRWGxEUkN4SlFXMUNka1FzWjBKQlFXZEVSU3hIUVU4NVF5eFBRVUZQTEZOQlFVTTVRaXhIUVVOT0xFOUJRVUYyUWl4UFFVRlBjMFFzUzBGQlMwUXNSMEZEVkRWQ0xFdEJRVWtzVTBGQlFWb3NSMEZCVHl4UFFVRkJhVUlzUlVGQlUycENMRVZCUVZScFFpeERRVUZqZFVJc1JVRkJUWGhETEVkQlFVdFZMRTlCUTNCRE1FSXNVVUZCVHl4VFFVRkRReXhGUVVGTFN5eEhRVUZSTEU5QlFVRjJSQ3hQUVVGUE9FTXNUMEZCVDBrc1JVRkJTMHNzVVVGUGJFTXNSVUZCUVVNc1UwRkJWeXhUUVVGRGFrTXNSMEZCWXl4blFrRkJRMnRETEVWQlFXbENReXhIUVVGclFpeG5Ra0ZEZWtWRExFVkJRMEZETEVkQlEwY3NUMEZCUlhKRExFVkJRVWxyUXl4SlFVRlpSeXhGUVVGUlJDeEpRVUZoUkN4RlFVRlJSQ3hIUVVGWFJTSXNJbVpwYkdVaU9pSjFkR2xzYVhSNUxXWjFibU4wYVc5dWN5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z3aWRYUnBiR2wwZVMxbWRXNWpkR2x2Ym5OY0lpd2dXMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aWRYUnBiR2wwZVMxbWRXNWpkR2x2Ym5OY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aWRYUnBiR2wwZVMxbWRXNWpkR2x2Ym5OY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1OUtTaDNhVzVrYjNjc0lHWjFibU4wYVc5dUtDa2dlMXh1Y21WMGRYSnVJQ0lzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0JuWlhRNklHZGxkSFJsY2lCOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUY5ZlpYTk5iMlIxYkdVZ2IyNGdaWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUlEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5a2dlMXh1SUZ4MFhIUnBaaWgwZVhCbGIyWWdVM2x0WW05c0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbkxDQjdJSFpoYkhWbE9pQW5UVzlrZFd4bEp5QjlLVHRjYmlCY2RGeDBmVnh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnSjE5ZlpYTk5iMlIxYkdVbkxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1kzSmxZWFJsSUdFZ1ptRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ01Ub2dkbUZzZFdVZ2FYTWdZU0J0YjJSMWJHVWdhV1FzSUhKbGNYVnBjbVVnYVhSY2JpQmNkQzh2SUcxdlpHVWdKaUF5T2lCdFpYSm5aU0JoYkd3Z2NISnZjR1Z5ZEdsbGN5QnZaaUIyWVd4MVpTQnBiblJ2SUhSb1pTQnVjMXh1SUZ4MEx5OGdiVzlrWlNBbUlEUTZJSEpsZEhWeWJpQjJZV3gxWlNCM2FHVnVJR0ZzY21WaFpIa2dibk1nYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ09Id3hPaUJpWldoaGRtVWdiR2xyWlNCeVpYRjFhWEpsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMblFnUFNCbWRXNWpkR2x2YmloMllXeDFaU3dnYlc5a1pTa2dlMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNU2tnZG1Gc2RXVWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0haaGJIVmxLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRGdwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGFXWW9LRzF2WkdVZ0ppQTBLU0FtSmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIWmhiSFZsSUNZbUlIWmhiSFZsTGw5ZlpYTk5iMlIxYkdVcElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBkbUZ5SUc1eklEMGdUMkpxWldOMExtTnlaV0YwWlNodWRXeHNLVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5S0c1ektUdGNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRzV6TENBblpHVm1ZWFZzZENjc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIWmhiSFZsSUgwcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ01pQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ0lUMGdKM04wY21sdVp5Y3BJR1p2Y2loMllYSWdhMlY1SUdsdUlIWmhiSFZsS1NCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9ibk1zSUd0bGVTd2dablZ1WTNScGIyNG9hMlY1S1NCN0lISmxkSFZ5YmlCMllXeDFaVnRyWlhsZE95QjlMbUpwYm1Rb2JuVnNiQ3dnYTJWNUtTazdYRzRnWEhSY2RISmxkSFZ5YmlCdWN6dGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBd0tUdGNiaUlzSWk4cUtseHVJQ29nVW1WdGIzWmxjeUIwYUdVZ1ptbHljM1FnWld4bGJXVnVkQ0J2WmlCaGJpQmhjbkpoZVM1Y2JpQXFJRUJ3WVhKaGJTQjRjeUF0SUdGdUlHRnljbUY1WEc0Z0tpQkFjbVYwZFhKdWN5QkJJR052Y0hrZ2IyWWdkR2hsSUdCNGMyQWdZWEp5WVhrZ2QybDBhQ0IwYUdVZ1ptbHljM1FnWld4bGJXVnVkQ0J5WlcxdmRtVmtYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCa2NtOXdSbWx5YzNROFZENG9lSE02SUZSYlhTazZJRlJiWFNCN1hHNGdJSEpsZEhWeWJpQjRjeTV6YkdsalpTZ3hLVHRjYm4xY2JpOHFLbHh1SUNvZ1VtVnRiM1psY3lCMGFHVWdiR0Z6ZENCbGJHVnRaVzUwSUc5bUlHRnVJR0Z5Y21GNUxseHVJQ29nUUhCaGNtRnRJSGh6SUMwZ1lXNGdZWEp5WVhsY2JpQXFJRUJ5WlhSMWNtNXpJRUVnWTI5d2VTQnZaaUIwYUdVZ1lIaHpZQ0JoY25KaGVTQjNhWFJvSUhSb1pTQnNZWE4wSUdWc1pXMWxiblFnY21WdGIzWmxaRnh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1pISnZjRXhoYzNROFZENG9lSE02SUZSYlhTazZJRlJiWFNCN1hHNGdJSEpsZEhWeWJpQjRjeTV6YkdsalpTZ3dMQ0I0Y3k1c1pXNW5kR2dnTFNBeEtUdGNibjFjYmk4cUtseHVJQ29nUVc0Z2FXUmxiblJwZEhrZ1puVnVZM1JwYjI0dVhHNGdLaUJBY0dGeVlXMGdlQ0F0SUdGdUlHOWlhbVZqZEZ4dUlDb2dRSEpsZEhWeWJuTWdZSGhnWEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnBaRHhVUGloNE9pQlVLVG9nVkNCN1hHNGdJSEpsZEhWeWJpQjRPMXh1ZlZ4dUx5b3FYRzRnS2lCU1pYUjFjbTV6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0J5WlhSMWNtNXpJSFJvWlNCdmNtbG5hVzVoYkNCbWRXNWpkR2x2YmlCaGNtZDFiV1Z1ZEM1Y2JpQXFJRUJ3WVhKaGJTQjRJQzBnWVc0Z2IySnFaV04wWEc0Z0tpQkFjbVYwZFhKdWN5QW9YeWtnUFQ0Z1lIaGdYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCclpXVndQRlErS0hnNklGUXBPaUFvWHpvZ1lXNTVLU0E5UGlCVUlIdGNiaUFnY21WMGRYSnVJQ2hmT2lCaGJua3BJRDArSUhnN1hHNTlYRzR2S2lwY2JpQXFJRUZ3Y0d4NUlHRWdablZ1WTNScGIyNGdkRzhnWldGamFDQmxiR1Z0Wlc1MElHOW1JR0Z1SUdGeWNtRjVMbHh1SUNvZ1FIQmhjbUZ0SUdZZ0xTQmhJR1oxYm1OMGFXOXVJSFJvWVhRZ2RHRnJaWE1nWVNCMllXeDFaVnh1SUNvZ1FISmxkSFZ5Ym5NZ1FTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2dZMkZzYkNCZ1ptQWdiMjRnWldGamFDQmxiR1Z0Wlc1MElHOW1JR0Z1SUdGeWNtRjVYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCdFlYQThVeXdnVkQ0b1pqb2dLSGc2SUZNcElEMCtJRlFwT2lBb2VITTZJRk5iWFNrZ1BUNGdWRnRkSUh0Y2JpQWdjbVYwZFhKdUlDaDRjem9nVTF0ZEtTQTlQaUI0Y3k1dFlYQW9aaWs3WEc1OVhHNHZLaXBjYmlBcUlFRndjR3g1SUdFZ1puVnVZM1JwYjI0Z2RHOGdaV0ZqYUNCbGJHVnRaVzUwSUc5bUlHRnVJR0Z5Y21GNUlIZHBkR2dnWVc0Z2FXNWtaWGd1WEc0Z0tpQkFjR0Z5WVcwZ1ppQXRJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQjBZV3RsY3lCaElIWmhiSFZsSUdGdVpDQnlaWFIxY201eklHWjFibU4wYVc5dUlHOXVJR0Z1SUdsdVpHVjRYRzRnS2lCQWNtVjBkWEp1Y3lCQklHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQmpZV3hzSUdCbVlDQnZiaUJsWVdOb0lHVnNaVzFsYm5RZ2IyWWdZVzRnWVhKeVlYbGNiaUFxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUcxaGNHazhVeXdnVkQ0b1pqb2dLSGc2SUZNcElEMCtJQ2hwT2lCdWRXMWlaWElwSUQwK0lGUXBPaUFvZUhNNklGTmJYU2tnUFQ0Z1ZGdGRJSHRjYmlBZ2NtVjBkWEp1SUNoNGN6b2dVMXRkS1NBOVBpQjRjeTV0WVhBb0tIWmhiSFZsT2lCVExDQnBibVJsZURvZ2JuVnRZbVZ5S1NBOVBpQm1LSFpoYkhWbEtTaHBibVJsZUNrcE8xeHVmVnh1THlvcVhHNGdLaUJCY0hCc2VTQmhJR1oxYm1OMGFXOXVJSFJ2SUhSb1pTQnVkR2dnWld4bGJXVnVkQ0J2WmlCaGJpQmhjbkpoZVM1Y2JpQXFJRUJ3WVhKaGJTQnVJQzBnZEdobElHVnNaVzFsYm5RZ2RHOGdZWEJ3YkhrZ2RHaGxJR1oxYm1OMGFXOXVJSFJ2WEc0Z0tpQkFjbVYwZFhKdWN5QkJJRzFoY0hCcGJtY2dablZ1WTNScGIyNGdkR2hoZENCM2FXeHNJR0Z3Y0d4NUlHRWdablZ1WTNScGIyNGdkRzhnZEdobElHQnVZQ0JsYkdWdFpXNTBJRzltSUdGdUlHRnljbUY1WEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmhaR3AxYzNROFV5d2dWRDRvWEc0Z0lHNDZJRzUxYldKbGNseHVLVG9nS0dZNklDaDRPaUJUS1NBOVBpQlVLU0E5UGlBb2VITTZJRk5iWFNrZ1BUNGdRWEp5WVhrOFV5QjhJRlErSUh0Y2JpQWdjbVYwZFhKdUlDaG1PaUFvZURvZ1V5a2dQVDRnVkNrZ1BUNGdLSGh6T2lCVFcxMHBJRDArWEc0Z0lDQWdiV0Z3YVNnb2VEb2dVeWtnUFQ0Z0tHazZJRzUxYldKbGNpa2dQVDRnS0drZ1BUMDlJRzRnUHlCbUtIZ3BJRG9nZUNrcEtIaHpLVHRjYm4xY2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaElHNWxkeUJ2WW1wbFkzUWdkMmwwYUNCMGFHVWdjSEp2Y0dWeWRHbGxjeUJ2WmlCdmJtVWdiMkpxWldOMElHMWxjbWRsWkNCcGJuUnZJR0Z1YjNSb1pYSXVYRzRnS2lCQWNHRnlZVzBnWW1GelpTQXRJSFJvWlNCaVlYTmxJRzlpYW1WamRDQjBhR0YwSUhCeWIzWnBaR1Z6SUdSbFptRjFiSFFnZG1Gc2RXVnpYRzRnS2lCQWNtVjBkWEp1Y3lCQklHWjFibU4wYVc5dUlIUm9ZWFFnY21WalpXbDJaWE1nWVc1dmRHaGxjaUJ2WW1wbFkzUXNJR0J2ZEdobGNtQXNJR1p2Y2lCMGFHVWdjSEp2Y0dWeWRIa2diV1Z5WjJVdVhHNGdLaUJVYUdVZ2NISnZjR1Z5ZEdsbGN5QnZaaUJnYjNSb1pYSmdJSGRwYkd3Z2IzWmxjbmR5YVhSbElIUm9aU0J3Y205d1pYSjBhV1Z6SUc5bUlHQnZZbXBnSUdsdUlIUm9aU0J1WlhjZ2IySnFaV04wTGx4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdiV1Z5WjJVb1ltRnpaVG9nWVc1NUtUb2dLRzkwYUdWeU9pQmhibmtwSUQwK0lHRnVlVHRjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ0WlhKblpTaGlZWE5sT2lCaGJubGJYU2s2SUNodmRHaGxjam9nWVc1NVcxMHBJRDArSUdGdWVWdGRPMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJRzFsY21kbEtHSmhjMlU2SUdGdWVTazZJQ2h2ZEdobGNqb2dZVzU1S1NBOVBpQmhibmtnZTF4dUlDQmpiMjV6ZENCeWIyOTBJRDBnUVhKeVlYa3VhWE5CY25KaGVTaGlZWE5sS1NBL0lGdGRJRG9nZTMwN1hHNGdJSEpsZEhWeWJpQW9iM1JvWlhJNklHRnVlU2tnUFQ0Z1QySnFaV04wTG1GemMybG5iaWh5YjI5MExDQmlZWE5sTENCdmRHaGxjaWs3WEc1OVhHNHZLaXBjYmlBcUlFRWdiVzlrZFd4MWN5Qm1kVzVqZEdsdmJpQjBhR0YwSUdoaGJtUnNaWE1nYm1WbllYUnBkbVVnZG1Gc2RXVnpMQ0JsTG1jdUlHMXZaQ2d5S1NneEtTQTlQVDBnTVNBbUppQnRiMlFvTWlrb0xURXBJRDA5UFNBeExseHVJQ29nUUhCaGNtRnRJRzRnTFNCMGFHVWdaR2wyYzI5eUxDQmxMbWN1SUcxdlpDaHVLU2g0S1NBOVBUMGdlQ0J0YjJRZ2JseHVJQ29nUUhKbGRIVnlibk1nUVNCbWRXNWpkR2x2YmlCMGFHRjBJSEpsWTJWcGRtVnpJSFJvWlNCa2FYWnBaR1Z1WkNCbWIzSWdkR2hsSUcxdlpIVnNkWE1nWTJGc1kzVjBhVzl1WEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnRiMlFvYmpvZ2JuVnRZbVZ5S1RvZ0tIZzZJRzUxYldKbGNpa2dQVDRnYm5WdFltVnlJSHRjYmlBZ2NtVjBkWEp1SUNoNU9pQnVkVzFpWlhJcElEMCtJQ2dvZVNBbElHNHBJQ3NnYmlrZ0pTQnVPMXh1ZlZ4dUx5b3FYRzRnS2lCRGNtVmhkR1VnWVc0Z2IySnFaV04wSUhkcGRHZ2dkR2hsSUhOd1pXTnBabWxsWkNCclpYa3VYRzRnS2lCQWNHRnlZVzBnYTJWNUlDMGdkR2hsSUhaaGJIVmxJR1p2Y2lCMGFHVWdiMkpxWldOMElHdGxlVnh1SUNvZ1FISmxkSFZ5Ym5NZ1FTQm1kVzVqZEdsdmJpQjBhR0YwSUhKbFkybGxkbVZ6SUdFZ1lIWmhiSFZsWUNCaGJtUWdjbVYwZFhKdWN5QmhiaUJ2WW1wbFkzUWdiMllnZXlCZ2EyVjVZRG9nWUhaaGJIVmxZQ0I5WEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnZZbXBQWmp4V1BpaGNiaUFnYTJWNU9pQnpkSEpwYm1kY2JpazZJQ2hjYmlBZ2Rqb2dWbHh1S1NBOVBpQjdYRzRnSUZ0NE9pQnpkSEpwYm1kZE9pQldPMXh1ZlNCN1hHNGdJSEpsZEhWeWJpQW9kam9nVmlrZ1BUNGdLSHNnVzJ0bGVWMDZJSFlnZlNrN1hHNTlYRzR2S2lwY2JpQXFJRUZ3Y0d4cFpYTWdZU0J6WlhRZ2IyWWdablZ1WTNScGIyNXpJSFJ2SUdGdUlHRnlaM1Z0Wlc1MExseHVJQ29nUUhCaGNtRnRJR1p1Y3lBdElHMTFiSFJwY0d4bElHWjFibU4wYVc5dUlHRnlaM1Z0Wlc1MGMxeHVJQ29nUUhKbGRIVnlibk1nUVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1lYQndiSGtnWUdadWMyQWdkRzhnWVc0Z1lYSm5kVzFsYm5SY2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSEJwY0dVOFZqNG9MaTR1Wm01ek9pQkJjbkpoZVR3b2VEb2dWaWtnUFQ0Z1ZqNHBPaUFvZURvZ1Zpa2dQVDRnVmlCN1hHNGdJSEpsZEhWeWJpQW9lRG9nVmlrZ1BUNGdXeTR1TG1adWMxMHVjbVZrZFdObEtDaGhZMk1zSUdZcElEMCtJR1lvWVdOaktTd2dlQ2s3WEc1OVhHNHZLaXBjYmlBcUlFTnlaV0YwWlhNZ1lTQm1kVzVqZEdsdmJpQjBieUJ5WlhSMWNtNGdZVzRnYjJKcVpXTjBKM01nY0hKdmNHVnlkSGtnZG1Gc2RXVmNiaUFxSUVCd1lYSmhiU0JyWlhrZ0xTQjBhR1VnYTJWNUlHOW1JSFJvWlNCd2NtOXdaWEowZVNCMGJ5QnlaWFIxY201Y2JpQXFJRUJ5WlhSMWNtNXpJRUVnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUhKbGRIVnliaUIwYUdVZ2NISnZjR1Z5ZEhrbmN5QjJZV3gxWlNCbWIzSWdZU0J5WldObGFYWmxaQ0J2WW1wbFkzUmNiaUFxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhCeWIzQThWRDRvYTJWNU9pQnpkSEpwYm1jZ2ZDQnVkVzFpWlhJcE9pQW9iem9nZXlCYmVEb2djM1J5YVc1blhUb2dWQ0I5S1NBOVBpQlVJSHRjYmlBZ2NtVjBkWEp1SUNodk9pQjdJRnQ0T2lCemRISnBibWRkT2lCVUlIMHBJRDArSUc5YmEyVjVYVHRjYm4xY2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaGJpQmhjbkpoZVNCdlppQnBiblJsWjJWeWN5Qm1jbTl0SUdCdVlDQjBieUJnYldBdVhHNGdLaUJGZURvZ2NtRnVaMlVvTUNrb01pa2dQVDA5SUZzd0xDQXhYVnh1SUNvZ1FIQmhjbUZ0SUc0Z0xTQjBhR1VnYkc5M1pYSWdZbTkxYm1RZ1ptOXlJSFJvWlNCeVlXNW5aVnh1SUNvZ1FISmxkSFZ5Ym5NZ1FTQm1kVzVqZEdsdmJpQjBhR0YwSUhKbFkyVnBkbVZ6SUhSb1pTQjFjSEJsY2lCaWIzVnVaQ0FvWlhoamJIVnphWFpsS1NCbWIzSWdkR2hsSUhKaGJtZGxYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCeVlXNW5aU2h1T2lCdWRXMWlaWElwT2lBb2JUb2diblZ0WW1WeUtTQTlQaUJ1ZFcxaVpYSmJYU0I3WEc0Z0lISmxkSFZ5YmlBb2JUb2diblZ0WW1WeUtTQTlQbHh1SUNBZ0lFRnljbUY1TG1Gd2NHeDVLRzUxYkd3c0lFRnljbUY1S0cwZ0xTQnVLU2t1YldGd0tDaGZPaUJoYm5rc0lHazZJRzUxYldKbGNpa2dQVDRnYmlBcklHa3BPMXh1ZlZ4dUx5b3FYRzRnS2lCRGNtVmhkR1Z6SUdGdUlHRnljbUY1SUhkcGRHZ2dZU0IyWVd4MVpTQmdZMkFnY21Wd1pXRjBaV1FnWUc1Z0lIUnBiV1Z6TGx4dUlDb2dRSEJoY21GdElHTWdMU0IwYUdVZ2RtRnNkV1VnZEc4Z2NtVndaV0YwWEc0Z0tpQkFjbVYwZFhKdWN5QkJJR1oxYm1OMGFXOXVJSFJvWVhRZ2NtVmpaV2wyWlhNZ1lHNWdJSFJ2SUhKbGNHVmhkQ0IyWVd4MVpTQmdZMkJjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlISmxjR1ZoZER4VVBpaGpPaUJVS1RvZ0tHNDZJRzUxYldKbGNpa2dQVDRnVkZ0ZElIdGNiaUFnY21WMGRYSnVJQ2h1T2lCdWRXMWlaWElwSUQwK0lHMWhjQ2hyWldWd0tHTXBLU2h5WVc1blpTZ3dLU2h1S1NrN1hHNTlYRzR2S2lwY2JpQXFJRkpsZEhWeWJuTWdZU0J5WVc1a2IyMGdhVzUwWldkbGNpQm1jbTl0SUdCdGFXNWdJSFJ2SUdCdFlYaGdJQ2hsZUdOc2RYTnBkbVVwWEc0Z0tpQkFjR0Z5WVcwZ2JXbHVJQzBnZEdobElHMXBibWx0ZFcwZ2RtRnNkV1ZjYmlBcUlFQnlaWFIxY201eklFRWdablZ1WTNScGIyNGdkR2hoZENCeVpXTmxhWFpsY3lCZ2JXRjRZRnh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NtRnVaRzl0U1c1MEtHMXBiam9nYm5WdFltVnlLVG9nS0cxaGVEb2diblZ0WW1WeUtTQTlQaUJ1ZFcxaVpYSWdlMXh1SUNCeVpYUjFjbTRnS0cxaGVEb2diblZ0WW1WeUtTQTlQaUJOWVhSb0xtWnNiMjl5S0UxaGRHZ3VjbUZ1Wkc5dEtDa2dLaUJ0WVhncElDc2diV2x1TzF4dWZWeHVMeW9xWEc0Z0tpQlNaWFIxY201eklHRWdjbUZ1Wkc5dElHNTFiV0psY2lCbWNtOXRJR0J0YVc1Z0lIUnZJR0J0WVhoZ0lDaGxlR05zZFhOcGRtVXBYRzRnS2lCQWNHRnlZVzBnYldsdUlDMGdkR2hsSUcxcGJtbHRkVzBnZG1Gc2RXVmNiaUFxSUVCeVpYUjFjbTV6SUVFZ1puVnVZM1JwYjI0Z2RHaGhkQ0J5WldObGFYWmxjeUJnYldGNFlGeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnY21GdVpHOXRLRzFwYmpvZ2JuVnRZbVZ5S1RvZ0tHMWhlRG9nYm5WdFltVnlLU0E5UGlCdWRXMWlaWEk3WEc0dktpcGNiaUFxSUZKbGRIVnlibk1nWVNCeVlXNWtiMjBnWld4bGJXVnVkQ0JtY205dElHRnVJR0Z5Y21GNVhHNGdLaUJBY0dGeVlXMGdZWEp5WVhrZ0xTQjBhR1VnWVhKeVlYa2dkbUZzZFdWY2JpQXFJRUJ5WlhSMWNtNXpJRUVnY21GdVpHOXRJR1ZzWlcxbGJuUWdabkp2YlNCZ1lYSnlZWGxnWEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnlZVzVrYjIwOFZENG9ZWEp5WVhrNklGUmJYU2s2SUZRN1hHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NtRnVaRzl0UEZRK0tIQmhjbUZ0TVRvZ1ZGdGRJSHdnYm5WdFltVnlLU0I3WEc0Z0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtIQmhjbUZ0TVNrcElIdGNiaUFnSUNCeVpYUjFjbTRnY0dGeVlXMHhXM0poYm1SdmJVbHVkQ2d3S1Nod1lYSmhiVEV1YkdWdVozUm9LVjA3WEc0Z0lIMGdaV3h6WlNCcFppQW9kSGx3Wlc5bUlIQmhjbUZ0TVNBOVBUMGdKMjUxYldKbGNpY3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tHMWhlRG9nYm5WdFltVnlLU0E5UGlCTllYUm9MbkpoYm1SdmJTZ3BJQ29nYldGNElDc2djR0Z5WVcweE8xeHVJQ0I5WEc0Z0lIUm9jbTkzSUVWeWNtOXlLQ2RKYm1OdmJYQmhkR2xpYkdVZ2NHRnlZVzFsZEdWeUlIUjVjR1U2SUNjZ0t5QjBlWEJsYjJZZ2NHRnlZVzB4S1R0Y2JuMWNiaThxS2x4dUlDb2dRM0psWVhSbElHRnVJRzlpYW1WamRDQm1jbTl0SUdFZ2JXRndjR2x1WnlCdlppQm1kVzVqZEdsdmJuTmNiaUFxWEc0Z0tpQkZlRHBjYmlBcVhHNGdLaUJqYjI1emRDQm1iazlpYWlBOUlIdGNiaUFxSUNBZ0lHRmtaRTl1WlRvZ0tIZ3BJRDArSUhnZ0t5QXhMRnh1SUNvZ0lDQWdiV2x1ZFhOUGJtVTZJQ2g0S1NBOVBpQjRJQzBnTVZ4dUlDb2dmVHRjYmlBcVhHNGdLaUJqYjI1emRDQjRJRDBnTVR0Y2JpQXFYRzRnS2lCemNHVmpLR1pQWW1vcEtIZ3BJRDA5UFNCN0lHRmtaRTl1WlRvZ01pd2diV2x1ZFhOUGJtVTZJREFnZlZ4dUlDcGNiaUFxSUVCd1lYSmhiU0JtYms5aWFpQXRJR0VnYldGd2NHbHVaeUJ2WmlCbWRXNWpkR2x2Ym5OY2JpQXFJRUJ5WlhSMWNtNXpJRUVnWm5WdVkzUnBiMjRnZEdoaGRDQnlaV05sYVhabGN5QmhiaUJ2WW1wbFkzUWdkRzhnZDJocFkyZ2dkR2hsSUdaMWJtTjBhVzl1Y3lCaGNtVWdZWEJ3YkdsbFpGeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYzNCbFl6eEdJR1Y0ZEdWdVpITWdLSFk2SUdGdWVTa2dQVDRnWVc1NVBpaG1iazlpYWpvZ2UxeHVJQ0JiY0RvZ2MzUnlhVzVuWFRvZ1JqdGNibjBwT2lBb1hHNGdJSGc2SUdGdWVWeHVLU0E5UGlCN1hHNGdJRnQ0T2lCemRISnBibWRkT2lCaGJuazdYRzU5SUh0Y2JpQWdjbVYwZFhKdUlDaDRPaUJoYm5rcElEMCtYRzRnSUNBZ1QySnFaV04wTG10bGVYTW9abTVQWW1vcFhHNGdJQ0FnSUNBdWJXRndLR3RsZVNBOVBpQnZZbXBQWmp4R1BpaHJaWGtwS0dadVQySnFXMnRsZVYwb2VDa3BLVnh1SUNBZ0lDQWdMbkpsWkhWalpTZ29ZV05qTENCdlltb3BJRDArSUU5aWFtVmpkQzVoYzNOcFoyNG9ZV05qTENCdlltb3BLVHRjYm4xY2JpOHFLbHh1SUNvZ1RXRndjeUJoSUhaaGJIVmxJR0I0WUNCbWNtOXRJR0Z1SUdsdWNIVjBJSEpoYm1kbElIUnZJR0Z1SUc5MWRIQjFkQ0J5WVc1blpWeHVJQ29nUUhCaGNtRnRJSGdnTFNCMGFHVWdkbUZzZFdVZ2RHOGdiV0Z3WEc0Z0tpQkFjbVYwZFhKdWN5QkJJR1oxYm1OMGFXOXVJSFJvWVhRZ2NtVmpaV2wyWlhNZ1lXNGdhVzV3ZFhRZ2NtRnVaMlVnWVc1a0lIUm9aVzRnWVc0Z2IzVjBjSFYwSUhKaGJtZGxYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J0WVhCU1lXNW5aU0E5SUNoNE9pQnVkVzFpWlhJcElEMCtJQ2hwWDNOMFlYSjBPaUJ1ZFcxaVpYSXNJR2xmWlc1a09pQnVkVzFpWlhJcElEMCtJQ2hjYmlBZ2IxOXpkR0Z5ZERvZ2JuVnRZbVZ5TEZ4dUlDQnZYMlZ1WkRvZ2JuVnRZbVZ5WEc0cElEMCtJQ2dvZUNBdElHbGZjM1JoY25RcElDb2dLRzlmWlc1a0lDMGdiMTl6ZEdGeWRDa3BJQzhnS0dsZlpXNWtJQzBnYVY5emRHRnlkQ2tnS3lCdlgzTjBZWEowTzF4dUlsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCIvKipcbiAqIEFuIGl0ZXJhdG9yIGZvciB0aGUgVmVjdG9yIGNsYXNzLlxuICovXG5leHBvcnQgY2xhc3MgVmVjdG9ySXRlcmF0b3IgaW1wbGVtZW50cyBJdGVyYWJsZUl0ZXJhdG9yPG51bWJlcj4ge1xuICBwcml2YXRlIGluZGV4ID0gMDtcbiAgY29uc3RydWN0b3IocHVibGljIHZlY3RvcjogeyBnZXQ6ICh4OiBudW1iZXIpID0+IGFueTsgbGVuZ3RoOiBudW1iZXIgfSkge31cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmFibGVJdGVyYXRvcjxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBuZXh0KCk6IEl0ZXJhdG9yUmVzdWx0PG51bWJlcj4ge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy52ZWN0b3IuZ2V0KHRoaXMuaW5kZXgrKyksXG4gICAgICBkb25lOiB0aGlzLmluZGV4ID4gdGhpcy52ZWN0b3IubGVuZ3RoXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZHJvcEZpcnN0LCByYW5kb20sIHJlcGVhdCB9IGZyb20gJ3V0aWxpdHktZnVuY3Rpb25zJztcbmltcG9ydCB7IFZlY3Rvckl0ZXJhdG9yIH0gZnJvbSAnLi92ZWN0b3ItaXRlcmF0b3InO1xuXG4vKipcbiAqIENvbnZlcnRzIGZyb20gZGVncmVlcyB0byByYWRpYW5zXG4gKiBAcGFyYW0gZGVncmVlcyAtIGFuZ2xlIGluIGRlZ3JlZXMgdG8gYmUgY29udmVydGVkXG4gKiBAcmV0dXJucyBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW5zKGRlZ3JlZXM6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAoZGVncmVlcyAqIE1hdGguUEkpIC8gMTgwO1xufVxuLyoqXG4gKiBBbiBpbW11dGFibGUgbWF0aG1hdGljYWwgdmVjdG9yLlxuICovXG5leHBvcnQgY2xhc3MgVmVjdG9yIGltcGxlbWVudHMgSXRlcmFibGU8bnVtYmVyPiB7XG4gIHByaXZhdGUgX21hZ25pdHVkZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBWZWN0b3IgZnJvbSB0aGUgZ2l2ZW4gdmFsdWVzLlxuICAgKiBAcGFyYW0gdmFsdWVzIC0gdmVjdG9yIHZhbHVlcyBlLmcuIHgsIHksIHpcbiAgICogQHJldHVybnMgQSBuZXcgVmVjdG9yXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKC4uLnZhbHVlczogbnVtYmVyW10pOiBWZWN0b3Ige1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHZhbHVlcyk7XG4gIH1cbiAgLyoqXG4gICAqIEZpbGxzIGEgVmVjdG9yIHdpdGggYSBnaXZlbiB2YWx1ZSBgY2AuXG4gICAqIEBwYXJhbSBjIC0gdmFsdWUgdG8gZmlsbCB3aXRoXG4gICAqIEBwYXJhbSBsZW5ndGggLSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IGBjYCBpbiBWZWN0b3JcbiAgICogQHJldHVybnMgQSBuZXcgVmVjdG9yXG4gICAqL1xuICBzdGF0aWMgZmlsbChjOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogVmVjdG9yIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcihyZXBlYXQoYykobGVuZ3RoKSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSByYW5kb20gMkQgVmVjdG9yLlxuICAgKiBAcGFyYW0gbWFnbml0dWRlIC0gb3B0aW9uYWwgdmFsdWUgZm9yIHRoZSBWZWN0b3IncyBtYWduaXR1ZGVcbiAgICogQHJldHVybnMgQSBuZXcgVmVjdG9yXG4gICAqL1xuICBzdGF0aWMgcmFuZG9tMkQobWFnbml0dWRlPzogbnVtYmVyKTogVmVjdG9yIHtcbiAgICBjb25zdCB2ID0gbmV3IFZlY3RvcihbMSwgMF0pLnJvdGF0ZShyYW5kb20oMCkoTWF0aC5QSSAqIDIpKTtcbiAgICByZXR1cm4gbWFnbml0dWRlICE9IG51bGwgPyB2LnNldE1hZyhtYWduaXR1ZGUpIDogdjtcbiAgfVxuICAvKipcbiAgICogVGhlIGFuZ2xlIM64IGJldHdlZW4gYSB2ZWN0b3IgYW5kIHRoZSB4LWF4aXMgc3VjaCB0aGF0IOKIks+AIDwgzrgg4omkIM+ALlxuICAgKi9cbiAgc3RhdGljIGhlYWRpbmcodmVjdG9yOiBSZWFkb25seUFycmF5PG51bWJlcj4pOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmF0YW4yKHZlY3RvclsxXSwgdmVjdG9yWzBdKTtcbiAgfVxuICAvKipcbiAgICogQSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhpcyB2ZWN0b3IuXG4gICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGlzIHZlY3RvciB3aXRoIG1hZ25pdHVkZSA9PT0gMVxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZSh2ZWN0b3I6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPik6IG51bWJlcltdIHtcbiAgICByZXR1cm4gVmVjdG9yLnNldE1hZyh2ZWN0b3IsIDEpO1xuICB9XG4gIC8qKlxuICAgKiBSb3RhdGVzIHRoaXMgdmVjdG9yIGJ5IGBhbmdsZWAgcmFkaWFucy5cbiAgICogQHBhcmFtIGFuZ2xlIC0gdGhlIGFuZ2xlIHdpdGggd2hpY2ggdG8gcm90YXRlIGluIHJhZGlhbnNcbiAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoaXMgdmVjdG9yIHJvdGF0ZWQgYnkgYGFuZ2xlYFxuICAgKi9cbiAgc3RhdGljIHJvdGF0ZSh2ZWN0b3I6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgYW5nbGU6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICByZXR1cm4gW1xuICAgICAgdmVjdG9yWzBdICogTWF0aC5jb3MoYW5nbGUpIC0gdmVjdG9yWzFdICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgdmVjdG9yWzBdICogTWF0aC5zaW4oYW5nbGUpICsgdmVjdG9yWzFdICogTWF0aC5jb3MoYW5nbGUpXG4gICAgXTtcbiAgfVxuICAvKipcbiAgICogVGhlIG1hZ25pdHVkZSBvZiBhIHZlY3RvciwgaS5lLiBzaXplLlxuICAgKi9cbiAgc3RhdGljIGdldE1hZyh2ZWN0b3I6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh2ZWN0b3IucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MgKyB2YWx1ZSAqIHZhbHVlLCAwKSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIG1hZ25pdHVkZSBvZiB0aGlzIHZlY3RvciB0byBhIGdpdmVuIHZhbHVlLlxuICAgKiBAcGFyYW0gbWFnbml0dWRlIC0gdGhlIHZhbHVlIHdpdGggd2hpY2ggdG8gc2V0IHRoZSBtYWduaXR1ZGVcbiAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoaXMgdmVjdG9yIHdpdGggdGhlIGdpdmVuIG1hZ25pdHVkZVxuICAgKi9cbiAgc3RhdGljIHNldE1hZyh2ZWN0b3I6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiwgbWFnbml0dWRlOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgY29uc3QgbWFnID0gVmVjdG9yLmdldE1hZyh2ZWN0b3IpO1xuICAgIHJldHVybiB2ZWN0b3IubWFwKHYgPT4gKHYgLyBtYWcpICogbWFnbml0dWRlKTtcbiAgfVxuICAvKipcbiAgICogTGltaXRzIGEgdGhpcyB2ZWN0b3JzIG1hZ25pdHVkZSBieSB0aGUgZ2l2ZW4gYW1vdW50LlxuICAgKiBAcGFyYW0gbWF4TWFnbml0dWRlIC0gdGhlIG1heGltdW0gbWFnbml0dWRlIGFsbG93ZWRcbiAgICogQHJldHVybnMgQSB2ZWN0b3Igd2l0aCBhIG1hZ25pdHVkZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYG1heGBcbiAgICovXG4gIHN0YXRpYyBsaW1pdChcbiAgICB2ZWN0b3I6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPixcbiAgICBtYXhNYWduaXR1ZGU6IG51bWJlclxuICApOiBSZWFkb25seUFycmF5PG51bWJlcj4gfCBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFZlY3Rvci5nZXRNYWcodmVjdG9yKSA+IG1heE1hZ25pdHVkZVxuICAgICAgPyBWZWN0b3Iuc2V0TWFnKHZlY3RvciwgbWF4TWFnbml0dWRlKVxuICAgICAgOiB2ZWN0b3I7XG4gIH1cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlY3RvcnMuXG4gICAqIEBwYXJhbSBvdGhlciAtIHRoZSBvdGhlciB2ZWN0b3JcbiAgICogQHJldHVybnMgVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGBvdGhlcmBcbiAgICovXG4gIHN0YXRpYyBkaXN0KFxuICAgIHZlY3RvcjogUmVhZG9ubHlBcnJheTxudW1iZXI+LFxuICAgIG90aGVyOiBSZWFkb25seUFycmF5PG51bWJlcj5cbiAgKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgdmVjdG9yLnJlZHVjZShcbiAgICAgICAgKGFjYywgdmFsdWUsIGluZGV4KSA9PiBhY2MgKyBNYXRoLnBvdyhvdGhlcltpbmRleF0gLSB2YWx1ZSwgMiksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBzdW0gb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIuXG4gICAqIEBwYXJhbSB2cyAtIHRoZSB2ZWN0b3Iocykgd2l0aCB3aGljaCB0byBhZGQgKGFkZGVuZHMpXG4gICAqIEByZXR1cm5zIFRoZSBzdW1tYXRpb24gb2YgdGhpcyB2ZWN0b3IgYW5kIGB2c2BcbiAgICovXG4gIHN0YXRpYyBhZGQoLi4udnM6IEFycmF5PFJlYWRvbmx5QXJyYXk8bnVtYmVyPj4pOiBSZWFkb25seUFycmF5PG51bWJlcj4ge1xuICAgIGlmICh2cy5sZW5ndGggPD0gMSkge1xuICAgICAgcmV0dXJuIHZzLmxlbmd0aCA9PT0gMSA/IHZzWzBdIDogW107XG4gICAgfVxuXG4gICAgY29uc3QgYSA9IHZzWzBdO1xuICAgIGNvbnN0IGIgPSBWZWN0b3IuYWRkKC4uLmRyb3BGaXJzdCh2cykpO1xuXG4gICAgcmV0dXJuIGEubWFwKCh2LCBpKSA9PiB2ICsgYltpXSk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlci5cbiAgICogQHBhcmFtIHZzIC0gdGhlIHZlY3RvcihzKSB3aXRoIHdoaWNoIHRvIHN1YnRyYWN0IChzdWJ0cmFoZW5kcylcbiAgICogQHJldHVybnMgVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYHZzYFxuICAgKi9cbiAgc3RhdGljIHN1YnRyYWN0KFxuICAgIC4uLnZzOiBBcnJheTxSZWFkb25seUFycmF5PG51bWJlcj4+XG4gICk6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPiB8IG51bWJlcltdIHtcbiAgICBpZiAodnMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiB2cy5sZW5ndGggPT09IDEgPyB2c1swXSA6IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGEgPSB2c1swXTtcbiAgICBjb25zdCBiID0gVmVjdG9yLmFkZCguLi5kcm9wRmlyc3QodnMpKTtcblxuICAgIHJldHVybiBhLm1hcCgodiwgaSkgPT4gdiAtIGJbaV0pO1xuICB9XG4gIC8qKlxuICAgKiBNdWx0aXBsaWVzIHRoaXMgdmVjdG9yIGJ5IGEgc2NhbGFyIChzY2FsYXIgbXVsdGlwbGljYXRpb24pLlxuICAgKiBAcGFyYW0gbnMgLSB0aGUgdmFsdWVzIHdpdGggd2hpY2ggdG8gbXVsdGlwbHlcbiAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoaXMgdmVjdG9yIHNjYWxlZCBieSBgbmAgYW5kIGBuc2BcbiAgICovXG4gIHN0YXRpYyBtdWx0KFxuICAgIHZlY3RvcjogUmVhZG9ubHlBcnJheTxudW1iZXI+LFxuICAgIC4uLm5zOiBSZWFkb25seUFycmF5PG51bWJlcj5cbiAgKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IG4gPSBucy5sZW5ndGggPT09IDEgPyBuc1swXSA6IG5zLnJlZHVjZSgoYWNjLCBjKSA9PiBhY2MgKiBjLCAxKTtcbiAgICByZXR1cm4gdmVjdG9yLm1hcCh2ID0+IHYgKiBuKTtcbiAgfVxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXIgKHNjYWxhciBwcm9kdWN0KS5cbiAgICogQHBhcmFtIG90aGVyIC0gdGhlIG90aGVyIHZlY3RvciB3aXRoIHdoaWNoIHRvIGNhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3RcbiAgICogQHJldHVybnMgVGhlIGRvdCBwcm9kdWN0XG4gICAqL1xuICBzdGF0aWMgZG90UHJvZHVjdChcbiAgICB2ZWN0b3I6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPixcbiAgICBvdGhlcjogUmVhZG9ubHlBcnJheTxudW1iZXI+XG4gICk6IG51bWJlciB7XG4gICAgcmV0dXJuIHZlY3Rvci5yZWR1Y2UoKGFjYywgdmFsdWUsIGkpID0+IGFjYyArIHZhbHVlICogb3RoZXJbaV0sIDApO1xuICB9XG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB2YWx1ZXM6IFJlYWRvbmx5QXJyYXk8bnVtYmVyPikge1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICB9XG4gIFtTeW1ib2wuaXRlcmF0b3JdKCk6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SXRlcmF0b3IoKTtcbiAgfVxuICAvKipcbiAgICogQHJldHVybnMgQSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlcyBpbiB0aGlzIFZlY3RvclxuICAgKi9cbiAgcHVibGljIGdldEl0ZXJhdG9yKCk6IEl0ZXJhYmxlSXRlcmF0b3I8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3JJdGVyYXRvcih0aGlzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHZhbHVlIGluIHRoaXMgVmVjdG9yLlxuICAgKiBAcGFyYW0gaW5kZXggLSB0aGUgaW5kZXggb2YgdGhlIHZhbHVlIHRvIHJldHVyblxuICAgKiBAcmV0dXJucyB0aGUgdmFsdWUgYXQgYGluZGV4YFxuICAgKi9cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzW2luZGV4XTtcbiAgfVxuICBwdWJsaWMgdG9BcnJheSgpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLnZhbHVlc107XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBtYWduaXR1ZGUgb2YgdGhpcyBWZWN0b3IsIGkuZS4gc2l6ZS5cbiAgICovXG4gIGdldCBtYWduaXR1ZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWFnbml0dWRlICE9IG51bGxcbiAgICAgID8gdGhpcy5fbWFnbml0dWRlXG4gICAgICA6ICh0aGlzLl9tYWduaXR1ZGUgPSBWZWN0b3IuZ2V0TWFnKHRoaXMudmFsdWVzKSk7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBhbmdsZSDOuCBiZXR3ZWVuIHRoaXMgVmVjdG9yIGFuZCB0aGUgeC1heGlzIHN1Y2ggdGhhdCDiiJLPgCA8IM64IOKJpCDPgC5cbiAgICovXG4gIGdldCBoZWFkaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIFZlY3Rvci5oZWFkaW5nKHRoaXMudmFsdWVzKTtcbiAgfVxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiB2YWx1ZXMgaW4gdGhpcyBWZWN0b3IsIGUuZy4gMkQgPT4gbGVuZ3RoID09PSAyLlxuICAgKi9cbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSB4IHZhbHVlIGZvciB0aGlzIFZlY3RvciwgaS5lLiB0aGlzWzBdXG4gICAqL1xuICBnZXQgeCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcbiAgfVxuICAvKipcbiAgICogVGhlIHkgdmFsdWUgZm9yIHRoaXMgVmVjdG9yLCBpLmUuIHRoaXNbMV1cbiAgICovXG4gIGdldCB5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzWzFdO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgeiB2YWx1ZSBmb3IgdGhpcyBWZWN0b3IsIGkuZS4gdGhpc1syXVxuICAgKi9cbiAgZ2V0IHooKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXNbMl07XG4gIH1cbiAgLyoqXG4gICAqIEEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoaXMgVmVjdG9yLlxuICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhpcyBWZWN0b3Igd2l0aCBtYWduaXR1ZGUgPT09IDFcbiAgICovXG4gIHB1YmxpYyBub3JtYWxpemUoKTogVmVjdG9yIHtcbiAgICByZXR1cm4gdGhpcy5zZXRNYWcoMSk7XG4gIH1cbiAgLyoqXG4gICAqIFJvdGF0ZXMgdGhpcyBWZWN0b3IgYnkgYGFuZ2xlYCByYWRpYW5zLlxuICAgKiBAcGFyYW0gYW5nbGUgLSB0aGUgYW5nbGUgd2l0aCB3aGljaCB0byByb3RhdGUgaW4gcmFkaWFuc1xuICAgKiBAcmV0dXJucyBBIGNvcHkgb2YgdGhpcyBWZWN0b3Igcm90YXRlZCBieSBgYW5nbGVgXG4gICAqL1xuICBwdWJsaWMgcm90YXRlKGFuZ2xlOiBudW1iZXIpOiBWZWN0b3Ige1xuICAgIHJldHVybiBuZXcgVmVjdG9yKFZlY3Rvci5yb3RhdGUodGhpcy52YWx1ZXMsIGFuZ2xlKSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIG1hZ25pdHVkZSBvZiB0aGlzIFZlY3RvciB0byBhIGdpdmVuIHZhbHVlLlxuICAgKiBAcGFyYW0gbWFnbml0dWRlIC0gdGhlIHZhbHVlIHdpdGggd2hpY2ggdG8gc2V0IHRoZSBtYWduaXR1ZGVcbiAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoaXMgVmVjdG9yIHdpdGggdGhlIGdpdmVuIG1hZ25pdHVkZVxuICAgKi9cbiAgcHVibGljIHNldE1hZyhtYWduaXR1ZGU6IG51bWJlcik6IFZlY3RvciB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IoVmVjdG9yLm11bHQodGhpcy52YWx1ZXMsIG1hZ25pdHVkZSAvIHRoaXMubWFnbml0dWRlKSk7XG4gIH1cbiAgLyoqXG4gICAqIExpbWl0cyBhIHRoaXMgVmVjdG9ycyBtYWduaXR1ZGUgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgICogQHBhcmFtIG1heE1hZ25pdHVkZSAtIHRoZSBtYXhpbXVtIG1hZ25pdHVkZSBhbGxvd2VkXG4gICAqIEByZXR1cm5zIEEgVmVjdG9yIHdpdGggYSBtYWduaXR1ZGUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBtYXhgXG4gICAqL1xuICBwdWJsaWMgbGltaXQobWF4TWFnbml0dWRlOiBudW1iZXIpOiBWZWN0b3Ige1xuICAgIHJldHVybiB0aGlzLm1hZ25pdHVkZSA+IG1heE1hZ25pdHVkZSA/IHRoaXMuc2V0TWFnKG1heE1hZ25pdHVkZSkgOiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBWZWN0b3JzLlxuICAgKiBAcGFyYW0gb3RoZXIgLSB0aGUgb3RoZXIgVmVjdG9yXG4gICAqIEByZXR1cm5zIFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoaXMgVmVjdG9yIGFuZCBgb3RoZXJgXG4gICAqL1xuICBwdWJsaWMgZGlzdChvdGhlcjogVmVjdG9yKTogbnVtYmVyIHtcbiAgICByZXR1cm4gVmVjdG9yLmRpc3QodGhpcy52YWx1ZXMsIG90aGVyLnZhbHVlcyk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHN1bSBvZiB0aGlzIFZlY3RvciBhbmQgYW5vdGhlci5cbiAgICogQHBhcmFtIHZzIC0gdGhlIFZlY3RvcihzKSB3aXRoIHdoaWNoIHRvIGFkZCAoYWRkZW5kcylcbiAgICogQHJldHVybnMgVGhlIHN1bW1hdGlvbiBvZiB0aGlzIFZlY3RvciBhbmQgYHZzYFxuICAgKi9cbiAgcHVibGljIGFkZCguLi52czogVmVjdG9yW10pOiBWZWN0b3Ige1xuICAgIGlmICh2cy5sZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IoVmVjdG9yLmFkZCh0aGlzLnZhbHVlcywgLi4udnMubWFwKHYgPT4gdi52YWx1ZXMpKSk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIFZlY3RvciBhbmQgYW5vdGhlci5cbiAgICogQHBhcmFtIHZzIC0gdGhlIFZlY3RvcihzKSB3aXRoIHdoaWNoIHRvIHN1YnRyYWN0IChzdWJ0cmFoZW5kcylcbiAgICogQHJldHVybnMgVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIFZlY3RvciBhbmQgYHZzYFxuICAgKi9cbiAgcHVibGljIHN1YnRyYWN0KC4uLnZzOiBWZWN0b3JbXSk6IFZlY3RvciB7XG4gICAgaWYgKHZzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFZlY3RvcihWZWN0b3Iuc3VidHJhY3QodGhpcy52YWx1ZXMsIC4uLnZzLm1hcCh2ID0+IHYudmFsdWVzKSkpO1xuICB9XG4gIC8qKlxuICAgKiBNdWx0aXBsaWVzIHRoaXMgVmVjdG9yIGJ5IGEgc2NhbGFyIChzY2FsYXIgbXVsdGlwbGljYXRpb24pLlxuICAgKiBAcGFyYW0gbnMgLSB0aGUgdmFsdWVzIHdpdGggd2hpY2ggdG8gbXVsdGlwbHlcbiAgICogQHJldHVybnMgQSBjb3B5IG9mIHRoaXMgVmVjdG9yIHNjYWxlZCBieSBgbmAgYW5kIGBuc2BcbiAgICovXG4gIHB1YmxpYyBtdWx0KC4uLm5zOiBudW1iZXJbXSk6IFZlY3RvciB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IoVmVjdG9yLm11bHQodGhpcy52YWx1ZXMsIC4uLm5zKSk7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm5zIEEgY29weSBvZiB0aGlzIFZlY3Rvci5cbiAgICovXG4gIHB1YmxpYyBjb3B5KCk6IFZlY3RvciB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy52YWx1ZXMpO1xuICB9XG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0aGlzIFZlY3RvciBhbmQgYW5vdGhlciAoc2NhbGFyIHByb2R1Y3QpLlxuICAgKiBAcGFyYW0gb3RoZXIgLSB0aGUgb3RoZXIgVmVjdG9yIHdpdGggd2hpY2ggdG8gY2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdFxuICAgKiBAcmV0dXJucyBUaGUgZG90IHByb2R1Y3RcbiAgICovXG4gIHB1YmxpYyBkb3RQcm9kdWN0KG90aGVyOiBWZWN0b3IpOiBudW1iZXIge1xuICAgIHJldHVybiBWZWN0b3IuZG90UHJvZHVjdCh0aGlzLnZhbHVlcywgb3RoZXIudmFsdWVzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==