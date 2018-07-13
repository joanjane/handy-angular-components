(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../dist/handy-angular-components/assets/styles/hac.css":
/*!**************************************************************!*\
  !*** ../dist/handy-angular-components/assets/styles/hac.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../example/node_modules/raw-loader!../../../../example/node_modules/postcss-loader/lib??embedded!./hac.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!../dist/handy-angular-components/assets/styles/hac.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../example/node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./demo/styles.css":
/*!*************************!*\
  !*** ./demo/styles.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./demo/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!../dist/handy-angular-components/assets/styles/hac.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!../dist/handy-angular-components/assets/styles/hac.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown .fa-angle-down{color:#e1e1e2;cursor:pointer;position:absolute;right:10px;top:4px;transition:all ease-in-out .3s}.dropdown.open .fa-angle-down{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.no-arrow>.dropdown .fa-angle-down{display:none}.hac-dropdown .dropdown-menu{overflow:auto;width:100%}.hac-dropdown .form-control:disabled,.hac-dropdown .form-control[readonly]{background:0 0}.hac-dropdown-grouplabel :hover{background:0 0}.hac-dropdown-groupitem{padding-left:15px}.hac-cal{color:#555;font-size:14px;line-height:normal}.hac-cal-month{font-size:14px;padding:10px 18px;width:100%}.hac-cal-month:not(:first-child){border-left:1px solid #e1e1e2}.hac-cal-header{align-items:start;display:flex;font-weight:400;margin-bottom:2px;padding:2px 0;text-align:center}.hac-cal-header .hac-cal-arrow{flex:1 0 auto}.hac-cal-header .hac-cal-monthlabel{flex:4 0 auto}.hac-cal-monthlabel{display:block;font-size:14px;margin:5px 0;text-align:center;text-transform:uppercase}.hac-cal-weeks{display:table;padding-bottom:10px;width:100%}.hac-cal-weedays{display:table-row}.hac-cal-weekday{display:table-cell;font-size:9px;padding-bottom:7px;text-transform:uppercase;text-align:center}.hac-cal-week{display:table-row;text-align:center}.hac-cal-day{cursor:pointer;display:table-cell;font-size:12px;line-height:19px;padding:3.3px;border-color:transparent;border-style:solid;border-width:1.7px}.hac-cal-day--is-today{font-weight:700}.hac-cal-day--is-selected{background:#eee}.hac-cal-day--is-start{border-left-color:#e18682}.hac-cal-day--is-end{border-right-color:#e18682}.hac-cal-day--in-range,.hac-cal-day--in-rangehover:not(.hac-cal-day--is-hidden):not(.hac-cal-day--is-disabled),.hac-cal-day--is-end,.hac-cal-day--is-start{background-color:#eee}.hac-cal-day--is-hidden{background:0 0;pointer-events:none;border-left-color:transparent;border-right-color:transparent}.hac-cal-day--is-hidden .hac-cal-daynum{opacity:.1}.hac-cal-day--is-disabled{background:0 0;pointer-events:none}.hac-cal-day--is-disabled .hac-cal-daynum{opacity:.1}.hac-cal-selectorwrapper{align-items:center;display:flex;line-height:normal}.hac-cal-date{align-self:flex-end;border-bottom-color:#e1e1e2;border-bottom-style:dashed;border-bottom-width:1px;bottom:-1px;display:inline-block;flex:4 0 auto;font-size:14px;margin-left:4px;margin-right:4px;min-width:40px;padding:2px 3.2px;position:relative}.hac-cal-date--is-active{border-bottom-color:#e18682}.hac-cal-date--is-disabled{opacity:.8}.hac-cal-wrapper.dropdown-menu{border:1px solid #e1e1e2;background:#fff;display:flex;opacity:0;overflow-x:auto;padding:0;position:absolute;visibility:hidden;z-index:1000;width:0}.hac-cal-wrapper.dropdown-menu.hac-cal-wrapper--is-opened{opacity:1;transition:opacity .25s ease-in;visibility:visible;width:auto}.hac-cal-wrapper.dropdown-menu.hac-cal-wrapper--animating.hac-cal-wrapper--is-opened .hac-cal-day{opacity:1!important}.hac-cal-wrapper.dropdown-menu.hac-cal-wrapper--animating.hac-cal-wrapper--is-opened .hac-cal-week{opacity:1!important}.hac-cal-wrapper.dropdown-menu.hac-cal-wrapper--fullwidth{width:100%!important}.hac-cal-wrapper.dropdown-menu .hac-cal-day{transition:opacity .2s ease-in;-webkit-transform:rotateY(360deg);transform:rotateY(360deg)}.hac-cal-wrapper.dropdown-menu .hac-cal-day:nth-child(1){transition-delay:.25s}.hac-cal-wrapper.dropdown-menu .hac-cal-day:nth-child(2){transition-delay:.32s}.hac-cal-wrapper.dropdown-menu .hac-cal-day:nth-child(3){transition-delay:.39s}.hac-cal-wrapper.dropdown-menu .hac-cal-day:nth-child(4){transition-delay:.45s}.hac-cal-wrapper.dropdown-menu .hac-cal-day:nth-child(5){transition-delay:.5s}.hac-cal-wrapper.dropdown-menu .hac-cal-day:nth-child(6){transition-delay:.53s}.hac-cal-wrapper.dropdown-menu .hac-cal-day:nth-child(7){transition-delay:.55s}.hac-cal-wrapper.dropdown-menu .hac-cal-week{opacity:0;transition:opacity .2s ease-in}.hac-cal-wrapper.dropdown-menu .hac-cal-week:nth-child(2){transition-delay:0}.hac-cal-wrapper.dropdown-menu .hac-cal-week:nth-child(3){transition-delay:.15s}.hac-cal-wrapper.dropdown-menu .hac-cal-week:nth-child(4){transition-delay:.25s}.hac-cal-wrapper.dropdown-menu .hac-cal-week:nth-child(5){transition-delay:.29s}.hac-cal-wrapper.dropdown-menu .hac-cal-week:nth-child(6){transition-delay:.33s}.hac-cal-wrapper.dropdown-menu .hac-cal-week:nth-child(7){transition-delay:.37s}.hac-cal-arrow{font-size:20px}.hac-cal-arrow--right{float:right}.hac-cal-chevron{border-style:solid;border-width:1px 1px 0 0;content:'';cursor:pointer;display:inline-block;height:7px;left:2.15px;position:relative;top:10px;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);vertical-align:top;width:7px}.hac-cal-chevron--right{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.hac-cal .fa{cursor:pointer}.no-cal-icon .hac-cal .fa-calendar{display:none}/*# sourceMappingURL=hac.css.map */\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./demo/styles.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./demo/styles.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.small-width {\r\n  max-width: 160px;\r\n}\r\n\r\n.medium-width {\r\n  max-width: 300px;\r\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 2:
/*!**************************************************************************************!*\
  !*** multi ./demo/styles.css ../dist/handy-angular-components/assets/styles/hac.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Joan\Documents\Projects\frontend\handy-angular-components\example\demo\styles.css */"./demo/styles.css");
module.exports = __webpack_require__(/*! C:\Users\Joan\Documents\Projects\frontend\handy-angular-components\dist\handy-angular-components\assets\styles\hac.css */"../dist/handy-angular-components/assets/styles/hac.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map