/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var sub = __webpack_require__(1);
	var css = __webpack_require__(2);
	var app  = document.createElement('div');
	app.innerHTML = '<h1>Hello World</h1>';
	app.appendChild(sub());
	document.body.appendChild(app);

/***/ },
/* 1 */
/***/ function(module, exports) {

	function generateText() {
		var element = document.createElement('h2');
		element.innerHTML = "Hello h2 world";
		return element;
	}

	module.exports = generateText;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./b.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./b.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "h1 {\n  color: orange;\n  background: url(" + __webpack_require__(5) + "); }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAABLCAYAAABN7wQMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMxRTA1MzkwOTE4NjExRTU5OTQ5QTM1RjgxRUNFRDk5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMxRTA1MzkxOTE4NjExRTU5OTQ5QTM1RjgxRUNFRDk5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzFFMDUzOEU5MTg2MTFFNTk5NDlBMzVGODFFQ0VEOTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzFFMDUzOEY5MTg2MTFFNTk5NDlBMzVGODFFQ0VEOTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6GeC0WAAAbeklEQVR42u2d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"

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);