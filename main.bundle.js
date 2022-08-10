(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/mini-wakuwaku.otf */ "./src/mini-wakuwaku.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --space-angle: 0deg;\n    --ani-time: 5s;\n}\n\n@media only screen and (min-width: 1000px) {\n    #container>#backdrop {\n        top: initial !important;\n        height: 100% !important;\n        bottom: -50px;\n        left: -250px !important;\n        right: initial !important;\n    }\n}\n\n@font-face {\n    font-family: wakuwaku;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    margin: 0;\n    font-family: 'wakuwaku', sans-serif;\n}\n\nh1, h2, h3 {\n    margin: 0;\n}\n\n#info {\n    position: absolute;\n    top: 0;\n    right: 0;\n    background-color: rgba(255, 255, 255, 0.26);\n    padding: 15px;\n    border-radius: 15px;\n    margin: 15px 15px 0 0;\n    backdrop-filter: blur(6px);\n    display: flex;\n    flex-direction: column;\n}\n\n#info>#city {\n    font-size: 2.7rem;\n    margin-bottom: 10px;\n}\n\n#info>#temp {\n    font-size: 6rem;\n    margin-left: -7px;\n    margin-right: 7px;\n    letter-spacing: -0.6rem;\n}\n\n#info>#clouds, #info>#time {\n    font-size: 1.5rem;\n    padding-left: 3px;\n    margin-bottom: 8px;\n}\n\n#searchbox {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#search {\n    border: none;\n    border-radius: 10px;\n    height: 30px;\n    font-size: 1rem;\n    font-family: sans-serif;\n    padding: 5px 10px 5px 10px;\n    margin: 10px 0 0 0;\n    transition: all 0.4s;\n    outline: none;\n}\n\n#search:hover, #search:focus {\n    background-color: rgb(168, 252, 255);\n}\n\n#btnbox {\n    display: flex;\n    justify-content: space-between;\n    gap: 5px;\n}\n\n#searchbtn {\n    width: 80%;\n    height: 50px;\n    background-color: #fff;\n}\n\n#searchbtn:hover {\n    background-color: rgba(155,231,164,1);\n}\n\n#unitbtn {\n    flex-grow: 1;\n    background-color: rgb(214, 77, 77);\n}\n\n#unitbtn:hover {\n    color: white;\n}\n\n#btnbox>button {\n    border-radius: 15px;\n    border: 5px solid black;\n    font-family: 'wakuwaku', sans-serif;\n    font-size: 1.5rem;\n    transition: all 0.4s;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n    position: relative;\n}\n\n#container>#sky {\n    height: 100%;\n    width: 100%;\n    background-color: #9debff;\n    filter: brightness(1);\n    transition: filter var(--ani-time);\n}\n\n#container>#backdrop {\n    display: block;\n    height: 100%;\n    top: 50px;\n    position: absolute;\n    left: -500px;\n    filter: brightness(0.1);\n    transition: all var(--ani-time);\n}\n\n#cloudbox {\n    width: 100vw;\n    height: 20vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#cloudbox>img {\n    transition: all 2s;\n    transform: translateX(120vw);\n}\n\n.hiddencloud {\n    display: none;\n}\n\n#sunmoonbox {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: rotate(var(--space-angle)) translate(-50%, -50%);\n    height: 120vw;\n    width: 120vw;\n\n    max-height: 170vh;\n    max-width: 170vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    transform-origin: top left;\n}\n\n#sun {\n    margin-top: 20px;\n    transform: rotate(180deg);\n    filter: drop-shadow(0px 0px 120px rgb(247, 251, 0));\n}\n\n#moon {\n    margin-bottom: 20px;\n    filter: drop-shadow(0px 0px 40px rgba(254, 255, 206, 0.507));\n}\n\n#rainbox {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100vw;\n    height : 85vh;\n\n}\n\n#raindrop {\n    height: 60px;\n    animation: rain 2s infinite;\n    position: absolute;\n}\n\n@keyframes rain {\n    from {transform: translate(0, 0)}\n    to {transform: translate(20px, 100vh);}\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI;QACI,uBAAuB;QACvB,uBAAuB;QACvB,aAAa;QACb,uBAAuB;QACvB,yBAAyB;IAC7B;AACJ;;AAEA;IACI,qBAAqB;IACrB,4CAAkC;AACtC;;AAEA;IACI,SAAS;IACT,mCAAmC;AACvC;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,2CAA2C;IAC3C,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,0BAA0B;IAC1B,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,0BAA0B;IAC1B,kBAAkB;IAClB,oBAAoB;IACpB,aAAa;AACjB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,QAAQ;AACZ;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,kCAAkC;AACtC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,mCAAmC;IACnC,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,qBAAqB;IACrB,kCAAkC;AACtC;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,SAAS;IACT,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,+BAA+B;AACnC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,2DAA2D;IAC3D,aAAa;IACb,YAAY;;IAEZ,iBAAiB;IACjB,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,mDAAmD;AACvD;;AAEA;IACI,mBAAmB;IACnB,4DAA4D;AAChE;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,YAAY;IACZ,aAAa;;AAEjB;;AAEA;IACI,YAAY;IACZ,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,MAAM,0BAA0B;IAChC,IAAI,iCAAiC,CAAC;AAC1C","sourcesContent":[":root {\n    --space-angle: 0deg;\n    --ani-time: 5s;\n}\n\n@media only screen and (min-width: 1000px) {\n    #container>#backdrop {\n        top: initial !important;\n        height: 100% !important;\n        bottom: -50px;\n        left: -250px !important;\n        right: initial !important;\n    }\n}\n\n@font-face {\n    font-family: wakuwaku;\n    src: url('/src/mini-wakuwaku.otf');\n}\n\nbody {\n    margin: 0;\n    font-family: 'wakuwaku', sans-serif;\n}\n\nh1, h2, h3 {\n    margin: 0;\n}\n\n#info {\n    position: absolute;\n    top: 0;\n    right: 0;\n    background-color: rgba(255, 255, 255, 0.26);\n    padding: 15px;\n    border-radius: 15px;\n    margin: 15px 15px 0 0;\n    backdrop-filter: blur(6px);\n    display: flex;\n    flex-direction: column;\n}\n\n#info>#city {\n    font-size: 2.7rem;\n    margin-bottom: 10px;\n}\n\n#info>#temp {\n    font-size: 6rem;\n    margin-left: -7px;\n    margin-right: 7px;\n    letter-spacing: -0.6rem;\n}\n\n#info>#clouds, #info>#time {\n    font-size: 1.5rem;\n    padding-left: 3px;\n    margin-bottom: 8px;\n}\n\n#searchbox {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#search {\n    border: none;\n    border-radius: 10px;\n    height: 30px;\n    font-size: 1rem;\n    font-family: sans-serif;\n    padding: 5px 10px 5px 10px;\n    margin: 10px 0 0 0;\n    transition: all 0.4s;\n    outline: none;\n}\n\n#search:hover, #search:focus {\n    background-color: rgb(168, 252, 255);\n}\n\n#btnbox {\n    display: flex;\n    justify-content: space-between;\n    gap: 5px;\n}\n\n#searchbtn {\n    width: 80%;\n    height: 50px;\n    background-color: #fff;\n}\n\n#searchbtn:hover {\n    background-color: rgba(155,231,164,1);\n}\n\n#unitbtn {\n    flex-grow: 1;\n    background-color: rgb(214, 77, 77);\n}\n\n#unitbtn:hover {\n    color: white;\n}\n\n#btnbox>button {\n    border-radius: 15px;\n    border: 5px solid black;\n    font-family: 'wakuwaku', sans-serif;\n    font-size: 1.5rem;\n    transition: all 0.4s;\n}\n\n#container {\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n    position: relative;\n}\n\n#container>#sky {\n    height: 100%;\n    width: 100%;\n    background-color: #9debff;\n    filter: brightness(1);\n    transition: filter var(--ani-time);\n}\n\n#container>#backdrop {\n    display: block;\n    height: 100%;\n    top: 50px;\n    position: absolute;\n    left: -500px;\n    filter: brightness(0.1);\n    transition: all var(--ani-time);\n}\n\n#cloudbox {\n    width: 100vw;\n    height: 20vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#cloudbox>img {\n    transition: all 2s;\n    transform: translateX(120vw);\n}\n\n.hiddencloud {\n    display: none;\n}\n\n#sunmoonbox {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: rotate(var(--space-angle)) translate(-50%, -50%);\n    height: 120vw;\n    width: 120vw;\n\n    max-height: 170vh;\n    max-width: 170vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    transform-origin: top left;\n}\n\n#sun {\n    margin-top: 20px;\n    transform: rotate(180deg);\n    filter: drop-shadow(0px 0px 120px rgb(247, 251, 0));\n}\n\n#moon {\n    margin-bottom: 20px;\n    filter: drop-shadow(0px 0px 40px rgba(254, 255, 206, 0.507));\n}\n\n#rainbox {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100vw;\n    height : 85vh;\n\n}\n\n#raindrop {\n    height: 60px;\n    animation: rain 2s infinite;\n    position: absolute;\n}\n\n@keyframes rain {\n    from {transform: translate(0, 0)}\n    to {transform: translate(20px, 100vh);}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images sync recursive ^\\.\\/cloud.*.*\\.png$":
/*!***********************************************!*\
  !*** ./src/images/ sync ^\.\/cloud.*.*\.png$ ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cloud1.png": "./src/images/cloud1.png",
	"./cloud1rain.png": "./src/images/cloud1rain.png",
	"./cloud2.png": "./src/images/cloud2.png",
	"./cloud2rain.png": "./src/images/cloud2rain.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync recursive ^\\.\\/cloud.*.*\\.png$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


let cityName = 'joinville';

//Set animation timing for JS and CSS.
const aniTime = 5000;
const root = document.querySelector(':root');
root.style.setProperty('--ani-time', `${aniTime/1000}s`);


//Cloud object with methods for showing clouds based on weather.
const Clouds = (() => {

    const cloudBox = document.getElementById('cloudbox');
    let cloudArray = [];

    const getClouds = () => {
        return cloudArray;
    }

    //Show clouds based on percipitation and cloudiness.
    const makeClouds = (percentage, weather) => {
        
        //Reset cloudArray and delete dom clouds.
        cloudArray.forEach(cloud => {
            cloud.style.transform = 'translateX(120vw)';
            setTimeout(() => {
                cloud.remove();
            }, 1500);
            
        });
        cloudArray = [];
        console.log(cloudArray, weather);

        for (let i = 0; i < 7; i++) {
            makeCloud(weather);
        }


        //Reset cloud position to hidden.
        cloudArray.forEach(cloud => {
            cloud.style.transform = 'translateX(120vw) translateY(0px)';
            
            setTimeout(() => {
                cloud.classList.add('hiddencloud');
            }, 1000);
        });


        //Set the amount of clouds based on the cloudiness percentage.
        const cloudAmount = Math.floor(percentage * 7 / 100);

        

        setTimeout(() => {
            //Move clouds equal to cloudAmount into frame.
            for (let i = 0; i < cloudAmount; i++) {
                //Skip trying to add an eighth cloud.
                if (i === 7) continue;

                //Show cloud.
                cloudArray[i].classList.remove('hiddencloud');

                //Evenly place clouds, then adjust them slightly.
                const flip = Math.floor(Math.random() * 2);
                
                let offsetX;
                if (flip === 0) {
                    offsetX = Math.floor(Math.random() * 100);
                } else {
                    offsetX = Math.floor(Math.random() * -100);
                }

                const offsetY = Math.floor(Math.random() * 50);
                setTimeout(() => {
                    cloudArray[i].style.marginRight = `${offsetX}px`;
                    cloudArray[i].style.transform = `translateY(${offsetY}px) translateX(0px)`;
                }, 200);
            }
        }, 1000);

    }

    const makeCloud = (weather) => {

        let rain;

        if (weather === 'Rain' || weather === 'Drizzle') {
            rain = 'rain'
        } else {
            rain = '';
        }



        const cloud = document.createElement('img');
        
        //Set cloud src image to a random choice of the two.
        const flip = Math.floor(Math.random() * 2) + 1;
        cloud.src = __webpack_require__("./src/images sync recursive ^\\.\\/cloud.*.*\\.png$")(`./cloud${flip}${rain}.png`);
      

        //Set cloud size randomly;
        const size = Math.floor(Math.random() * 40) + 65;
        cloud.style.height = `${size}px`;

        cloudBox.appendChild(cloud);
        cloudArray.push(cloud);
        cloud.classList.add('hiddencloud');
    }

    

    return {makeClouds, cloudArray, getClouds}
})();

let units = 'C';
let buttonActivated = false;

//Fetch weather data and return coordinates of selected location.
async function getWeather() {
    
    const city = document.getElementById('city');
    const temp = document.getElementById('temp');
    const clouds = document.getElementById('clouds');

    //Fetch weather data
    let response;
    try {
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=dc9c1848951905d082dbd9b3eec385f6`, {mode: 'cors'});
    } catch (err) {
        alert(err);
    }
    
    const data = await response.json();

    //Display error if city is not found.
    if (data['cod'] === '404') {
        city.innerText = 'Location not found'
        return;
    }

    //Set weather display based 
    city.innerText = data['name'];
    if (units === 'C') {
        temp.innerText = `${Math.round(data['main']['temp'])}°C`;
    } else {
        let newTemp = data['main']['temp'];
        newTemp = Math.round((newTemp * 9/5) + 32);
        temp.innerText = `${newTemp}°F`;
    }

    clouds.innerText = `Clouds: ${data['clouds']['all']} %`;

    //Find whether or not it's raining.
    const mainWeather = data['weather'][0]['main'];

    //Animate clouds based on cloudiness.
    const cloudiness = data['clouds']['all'];
    Clouds.makeClouds(cloudiness, mainWeather);

    //Remove raindrops from the DOM.
    const drops = Array.from(document.querySelectorAll('#raindrop'));
    drops.forEach(drop => {
        drop.remove();
    });

    //Add raindrops to the DOM.
    if (mainWeather === 'Rain' || mainWeather === 'Drizzle') {
        setTimeout(() => {
            const rainBox = document.getElementById('rainbox');
            if (mainWeather === 'Rain' || mainWeather === 'Drizzle') {

                //Add raindrops based on cloud amount.
                Clouds.getClouds().forEach(cloud => {
                    if (cloud.classList[0] === 'hiddencloud') {
                        return;
                    }
                    
                    
                    const raindrop = document.createElement('img');
    
                    //Randomize raindrop delay.
                    const randDelay = Math.random() * 2;
                    raindrop.style.animation = `rain 2s infinite ${randDelay}s`;
    
                    setTimeout(() => {
                        //Display the raindrop.
                        raindrop.src = __webpack_require__(/*! ../../../../src/images/raindrop.png */ "./src/images/raindrop.png");
                        raindrop.id = 'raindrop';
                    }, randDelay * 1000);
    
                    
    
                    //Add the drop to the DOM based on cloud position.
                    const rect = cloud.getBoundingClientRect();
                    raindrop.style.top = `${rect.top - 75}px`;
                    raindrop.style.left = `${rect.left + 75}px`;
                    rainBox.appendChild(raindrop);
                });
            }
        }, 3000);
    }

    //Make the unit conversion button convert temperature units.
    //Defaults to celsius.
    const unitButton = document.getElementById('unitbtn');
    if (!buttonActivated) {
        unitButton.addEventListener('click', () => {
            let newTemp = data['main']['temp'];
            
            //Convert units based on current selected units.
            if (units === 'C') {
                newTemp = Math.round((newTemp * 9/5) + 32);
                temp.innerText = `${newTemp}°F`;
                unitButton.innerText = 'C';
                unitButton.style.backgroundColor = 'rgb(131, 251, 245)';
                units = 'F';
            } else if (units === 'F') {
                temp.innerText = `${Math.round(data['main']['temp'])}°C`;
                unitButton.innerText = 'F';
                unitButton.style.backgroundColor = 'rgb(214, 77, 77)';
                units = 'C';
            }
        });
        buttonActivated = true;
    }



    return data['coord'];
}

async function getTime() {
    //Set initial position of sun and moon before adding transitions.
    const spaceBox = document.getElementById('sunmoonbox');
    spaceBox.style.transition = `all ${aniTime/1000}s`;

    const timeDisplay = document.getElementById('time');
    

    //Await weather response and use those coords to fetch time.
    const coord = await getWeather();
    
    //Stop function if return data is undefined.
    if (coord === undefined) return;

    const response = await fetch(`https://api.ipgeolocation.io/timezone?apiKey=eaa147c505244f71a90ccccdd5f78acc&lat=${coord['lat']}&long=${coord['lon']}`, {mode: 'cors'});
    const time = await response.json();

    //Remove seconds from the time displayed.
    let cleanTime = time['time_12'].slice(0, -6) + time['time_12'].slice(-3, time['time_12'].length);
    console.log(cleanTime);

    //Update time display based on API fetch.
    timeDisplay.innerText = cleanTime;
    
    //Remove leading 0s.
    if (timeDisplay.innerText[0] === '0') {
        timeDisplay.innerText = cleanTime.slice(1)
    }

    //Convert selected time as a fraction of 360;
    let newTime = time['time_24'].split(':');
    let fraction = newTime[1]/60;
    let percentage = (Number(newTime[0]) + Number(fraction)) / 24;
    const rotation = percentage * 360;

    //Move sun and moon relative to selected time.
    const root = document.querySelector(':root');
    root.style.setProperty('--space-angle', `${rotation}deg`);

    const backdrop = document.getElementById('backdrop');
    const sky = document.getElementById('sky');

    //Apply time as a fraction to backdrop brightness.
    let newFraction;

    if (percentage > 0.5) {
        newFraction = 1 - percentage;
        newFraction = newFraction * 2;
    } else if (percentage <= 0.5) {
        newFraction = percentage * 2;
    }

    backdrop.style.filter = `brightness(${newFraction})`;
    sky.style.filter = `brightness(${newFraction})`;

    //Apply time as a fraction to cloud brightnes.
    Clouds.cloudArray.forEach(cloud => {
        cloud.style.filter = `brightness(${newFraction})`;
    });
}


setTimeout(() => {
    getTime();
}, 0);




const searchButton = document.getElementById('searchbtn');
const searchBar = document.getElementById('search');

searchButton.addEventListener('click', () => {
    cityName = searchBar.value;
    getTime();
});



// window.addEventListener('click', () => {
    
//     spaceBox.classList.remove('rotating');
//     void spaceBox.offsetWidth;
//     spaceBox.classList.add('rotating');

//     setTimeout(() => {
//         spaceBox.classList.remove('rotating');
//     }, 5000);
// });










/***/ }),

/***/ "./src/images/cloud1.png":
/*!*******************************!*\
  !*** ./src/images/cloud1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c4bcc8a4118282713186.png";

/***/ }),

/***/ "./src/images/cloud1rain.png":
/*!***********************************!*\
  !*** ./src/images/cloud1rain.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9501dc52cb2fed0e7529.png";

/***/ }),

/***/ "./src/images/cloud2.png":
/*!*******************************!*\
  !*** ./src/images/cloud2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "51e733b95e0da287782a.png";

/***/ }),

/***/ "./src/images/cloud2rain.png":
/*!***********************************!*\
  !*** ./src/images/cloud2rain.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1982fd173b8b06053cc1.png";

/***/ }),

/***/ "./src/images/raindrop.png":
/*!*********************************!*\
  !*** ./src/images/raindrop.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f905b5f51c8536504ebd.png";

/***/ }),

/***/ "./src/mini-wakuwaku.otf":
/*!*******************************!*\
  !*** ./src/mini-wakuwaku.otf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f3f1238655e4ff536ac0.otf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxvQ0FBb0MsaUNBQWlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxhQUFhOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0hBQXNILGFBQWEsUUFBUSxhQUFhLElBQUksYUFBYTtBQUN6Szs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLFNBQVM7O0FBRXhEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSwwQ0FBMEMsWUFBWTtBQUN0RCxxQ0FBcUMsWUFBWTs7QUFFakQ7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZELEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBLENBQUM7Ozs7O0FBS0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbWFnZXMvIHN5bmMgXlxcLlxcL2Nsb3VkLiouKlxcLnBuZyQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvbWluaS13YWt1d2FrdS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tc3BhY2UtYW5nbGU6IDBkZWc7XFxuICAgIC0tYW5pLXRpbWU6IDVzO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAjY29udGFpbmVyPiNiYWNrZHJvcCB7XFxuICAgICAgICB0b3A6IGluaXRpYWwgIWltcG9ydGFudDtcXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICAgICAgYm90dG9tOiAtNTBweDtcXG4gICAgICAgIGxlZnQ6IC0yNTBweCAhaW1wb3J0YW50O1xcbiAgICAgICAgcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHdha3V3YWt1O1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnd2FrdXdha3UnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSwgaDIsIGgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jaW5mbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luOiAxNXB4IDE1cHggMCAwO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2luZm8+I2NpdHkge1xcbiAgICBmb250LXNpemU6IDIuN3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2luZm8+I3RlbXAge1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZyZW07XFxufVxcblxcbiNpbmZvPiNjbG91ZHMsICNpbmZvPiN0aW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbiNzZWFyY2hib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzZWFyY2g6aG92ZXIsICNzZWFyY2g6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY4LCAyNTIsIDI1NSk7XFxufVxcblxcbiNidG5ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jc2VhcmNoYnRuIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jc2VhcmNoYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsMjMxLDE2NCwxKTtcXG59XFxuXFxuI3VuaXRidG4ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDc3LCA3Nyk7XFxufVxcblxcbiN1bml0YnRuOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYnRuYm94PmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ3dha3V3YWt1Jywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjb250YWluZXI+I3NreSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGViZmY7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIHZhcigtLWFuaS10aW1lKTtcXG59XFxuXFxuI2NvbnRhaW5lcj4jYmFja2Ryb3Age1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTUwMHB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4xKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLWFuaS10aW1lKTtcXG59XFxuXFxuI2Nsb3VkYm94IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Nsb3VkYm94PmltZyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAycztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEyMHZ3KTtcXG59XFxuXFxuLmhpZGRlbmNsb3VkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3N1bm1vb25ib3gge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSh2YXIoLS1zcGFjZS1hbmdsZSkpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgaGVpZ2h0OiAxMjB2dztcXG4gICAgd2lkdGg6IDEyMHZ3O1xcblxcbiAgICBtYXgtaGVpZ2h0OiAxNzB2aDtcXG4gICAgbWF4LXdpZHRoOiAxNzB2aDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcXG59XFxuXFxuI3N1biB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMjBweCByZ2IoMjQ3LCAyNTEsIDApKTtcXG59XFxuXFxuI21vb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggNDBweCByZ2JhKDI1NCwgMjU1LCAyMDYsIDAuNTA3KSk7XFxufVxcblxcbiNyYWluYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0IDogODV2aDtcXG5cXG59XFxuXFxuI3JhaW5kcm9wIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBhbmltYXRpb246IHJhaW4gMnMgaW5maW5pdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyByYWluIHtcXG4gICAgZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCl9XFxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAxMDB2aCk7fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wi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ICAgIC0tYW5pLXRpbWU6IDVzO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAjY29udGFpbmVyPiNiYWNrZHJvcCB7XFxuICAgICAgICB0b3A6IGluaXRpYWwgIWltcG9ydGFudDtcXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICAgICAgYm90dG9tOiAtNTBweDtcXG4gICAgICAgIGxlZnQ6IC0yNTBweCAhaW1wb3J0YW50O1xcbiAgICAgICAgcmlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHdha3V3YWt1O1xcbiAgICBzcmM6IHVybCgnL3NyYy9taW5pLXdha3V3YWt1Lm90ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ3dha3V3YWt1Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEsIGgyLCBoMyB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2luZm8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1hcmdpbjogMTVweCAxNXB4IDAgMDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNpbmZvPiNjaXR5IHtcXG4gICAgZm9udC1zaXplOiAyLjdyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNpbmZvPiN0ZW1wIHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogLTdweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC42cmVtO1xcbn1cXG5cXG4jaW5mbz4jY2xvdWRzLCAjaW5mbz4jdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4jc2VhcmNoYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jc2VhcmNoIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jc2VhcmNoOmhvdmVyLCAjc2VhcmNoOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OCwgMjUyLCAyNTUpO1xcbn1cXG5cXG4jYnRuYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3NlYXJjaGJ0biB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuI3NlYXJjaGJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LDIzMSwxNjQsMSk7XFxufVxcblxcbiN1bml0YnRuIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCA3NywgNzcpO1xcbn1cXG5cXG4jdW5pdGJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2J0bmJveD5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICd3YWt1d2FrdScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGFpbmVyPiNza3kge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRlYmZmO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XFxuICAgIHRyYW5zaXRpb246IGZpbHRlciB2YXIoLS1hbmktdGltZSk7XFxufVxcblxcbiNjb250YWluZXI+I2JhY2tkcm9wIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC01MDBweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS1hbmktdGltZSk7XFxufVxcblxcbiNjbG91ZGJveCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjbG91ZGJveD5pbWcge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnM7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMjB2dyk7XFxufVxcblxcbi5oaWRkZW5jbG91ZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNzdW5tb29uYm94IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUodmFyKC0tc3BhY2UtYW5nbGUpKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGhlaWdodDogMTIwdnc7XFxuICAgIHdpZHRoOiAxMjB2dztcXG5cXG4gICAgbWF4LWhlaWdodDogMTcwdmg7XFxuICAgIG1heC13aWR0aDogMTcwdmg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxufVxcblxcbiNzdW4ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMTIwcHggcmdiKDI0NywgMjUxLCAwKSk7XFxufVxcblxcbiNtb29uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDQwcHggcmdiYSgyNTQsIDI1NSwgMjA2LCAwLjUwNykpO1xcbn1cXG5cXG4jcmFpbmJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodCA6IDg1dmg7XFxuXFxufVxcblxcbiNyYWluZHJvcCB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYW5pbWF0aW9uOiByYWluIDJzIGluZmluaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbkBrZXlmcmFtZXMgcmFpbiB7XFxuICAgIGZyb20ge3RyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApfVxcbiAgICB0byB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMTAwdmgpO31cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2Nsb3VkMS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2xvdWQxLnBuZ1wiLFxuXHRcIi4vY2xvdWQxcmFpbi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2xvdWQxcmFpbi5wbmdcIixcblx0XCIuL2Nsb3VkMi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2xvdWQyLnBuZ1wiLFxuXHRcIi4vY2xvdWQycmFpbi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2xvdWQycmFpbi5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvY2xvdWQuKi4qXFxcXC5wbmckXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5sZXQgY2l0eU5hbWUgPSAnam9pbnZpbGxlJztcblxuLy9TZXQgYW5pbWF0aW9uIHRpbWluZyBmb3IgSlMgYW5kIENTUy5cbmNvbnN0IGFuaVRpbWUgPSA1MDAwO1xuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLWFuaS10aW1lJywgYCR7YW5pVGltZS8xMDAwfXNgKTtcblxuXG4vL0Nsb3VkIG9iamVjdCB3aXRoIG1ldGhvZHMgZm9yIHNob3dpbmcgY2xvdWRzIGJhc2VkIG9uIHdlYXRoZXIuXG5jb25zdCBDbG91ZHMgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgY2xvdWRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvdWRib3gnKTtcbiAgICBsZXQgY2xvdWRBcnJheSA9IFtdO1xuXG4gICAgY29uc3QgZ2V0Q2xvdWRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gY2xvdWRBcnJheTtcbiAgICB9XG5cbiAgICAvL1Nob3cgY2xvdWRzIGJhc2VkIG9uIHBlcmNpcGl0YXRpb24gYW5kIGNsb3VkaW5lc3MuXG4gICAgY29uc3QgbWFrZUNsb3VkcyA9IChwZXJjZW50YWdlLCB3ZWF0aGVyKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAvL1Jlc2V0IGNsb3VkQXJyYXkgYW5kIGRlbGV0ZSBkb20gY2xvdWRzLlxuICAgICAgICBjbG91ZEFycmF5LmZvckVhY2goY2xvdWQgPT4ge1xuICAgICAgICAgICAgY2xvdWQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMTIwdncpJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsb3VkLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3VkQXJyYXkgPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2coY2xvdWRBcnJheSwgd2VhdGhlcik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIG1ha2VDbG91ZCh3ZWF0aGVyKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9SZXNldCBjbG91ZCBwb3NpdGlvbiB0byBoaWRkZW4uXG4gICAgICAgIGNsb3VkQXJyYXkuZm9yRWFjaChjbG91ZCA9PiB7XG4gICAgICAgICAgICBjbG91ZC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMjB2dykgdHJhbnNsYXRlWSgwcHgpJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvdWQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuY2xvdWQnKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vU2V0IHRoZSBhbW91bnQgb2YgY2xvdWRzIGJhc2VkIG9uIHRoZSBjbG91ZGluZXNzIHBlcmNlbnRhZ2UuXG4gICAgICAgIGNvbnN0IGNsb3VkQW1vdW50ID0gTWF0aC5mbG9vcihwZXJjZW50YWdlICogNyAvIDEwMCk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvL01vdmUgY2xvdWRzIGVxdWFsIHRvIGNsb3VkQW1vdW50IGludG8gZnJhbWUuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsb3VkQW1vdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAvL1NraXAgdHJ5aW5nIHRvIGFkZCBhbiBlaWdodGggY2xvdWQuXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDcpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgLy9TaG93IGNsb3VkLlxuICAgICAgICAgICAgICAgIGNsb3VkQXJyYXlbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuY2xvdWQnKTtcblxuICAgICAgICAgICAgICAgIC8vRXZlbmx5IHBsYWNlIGNsb3VkcywgdGhlbiBhZGp1c3QgdGhlbSBzbGlnaHRseS5cbiAgICAgICAgICAgICAgICBjb25zdCBmbGlwID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldFg7XG4gICAgICAgICAgICAgICAgaWYgKGZsaXAgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0WCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIC0xMDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3VkQXJyYXlbaV0uc3R5bGUubWFyZ2luUmlnaHQgPSBgJHtvZmZzZXRYfXB4YDtcbiAgICAgICAgICAgICAgICAgICAgY2xvdWRBcnJheVtpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke29mZnNldFl9cHgpIHRyYW5zbGF0ZVgoMHB4KWA7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ2xvdWQgPSAod2VhdGhlcikgPT4ge1xuXG4gICAgICAgIGxldCByYWluO1xuXG4gICAgICAgIGlmICh3ZWF0aGVyID09PSAnUmFpbicgfHwgd2VhdGhlciA9PT0gJ0RyaXp6bGUnKSB7XG4gICAgICAgICAgICByYWluID0gJ3JhaW4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYWluID0gJyc7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgY29uc3QgY2xvdWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgXG4gICAgICAgIC8vU2V0IGNsb3VkIHNyYyBpbWFnZSB0byBhIHJhbmRvbSBjaG9pY2Ugb2YgdGhlIHR3by5cbiAgICAgICAgY29uc3QgZmxpcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICsgMTtcbiAgICAgICAgY2xvdWQuc3JjID0gcmVxdWlyZShgL3NyYy9pbWFnZXMvY2xvdWQke2ZsaXB9JHtyYWlufS5wbmdgKTtcbiAgICAgIFxuXG4gICAgICAgIC8vU2V0IGNsb3VkIHNpemUgcmFuZG9tbHk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0MCkgKyA2NTtcbiAgICAgICAgY2xvdWQuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG5cbiAgICAgICAgY2xvdWRCb3guYXBwZW5kQ2hpbGQoY2xvdWQpO1xuICAgICAgICBjbG91ZEFycmF5LnB1c2goY2xvdWQpO1xuICAgICAgICBjbG91ZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW5jbG91ZCcpO1xuICAgIH1cblxuICAgIFxuXG4gICAgcmV0dXJuIHttYWtlQ2xvdWRzLCBjbG91ZEFycmF5LCBnZXRDbG91ZHN9XG59KSgpO1xuXG5sZXQgdW5pdHMgPSAnQyc7XG5sZXQgYnV0dG9uQWN0aXZhdGVkID0gZmFsc2U7XG5cbi8vRmV0Y2ggd2VhdGhlciBkYXRhIGFuZCByZXR1cm4gY29vcmRpbmF0ZXMgb2Ygc2VsZWN0ZWQgbG9jYXRpb24uXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICAgIFxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xuICAgIGNvbnN0IGNsb3VkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG91ZHMnKTtcblxuICAgIC8vRmV0Y2ggd2VhdGhlciBkYXRhXG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mdW5pdHM9bWV0cmljJmFwcGlkPWRjOWMxODQ4OTUxOTA1ZDA4MmRiZDliM2VlYzM4NWY2YCwge21vZGU6ICdjb3JzJ30pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBhbGVydChlcnIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgLy9EaXNwbGF5IGVycm9yIGlmIGNpdHkgaXMgbm90IGZvdW5kLlxuICAgIGlmIChkYXRhWydjb2QnXSA9PT0gJzQwNCcpIHtcbiAgICAgICAgY2l0eS5pbm5lclRleHQgPSAnTG9jYXRpb24gbm90IGZvdW5kJ1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9TZXQgd2VhdGhlciBkaXNwbGF5IGJhc2VkIFxuICAgIGNpdHkuaW5uZXJUZXh0ID0gZGF0YVsnbmFtZSddO1xuICAgIGlmICh1bml0cyA9PT0gJ0MnKSB7XG4gICAgICAgIHRlbXAuaW5uZXJUZXh0ID0gYCR7TWF0aC5yb3VuZChkYXRhWydtYWluJ11bJ3RlbXAnXSl9wrBDYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3VGVtcCA9IGRhdGFbJ21haW4nXVsndGVtcCddO1xuICAgICAgICBuZXdUZW1wID0gTWF0aC5yb3VuZCgobmV3VGVtcCAqIDkvNSkgKyAzMik7XG4gICAgICAgIHRlbXAuaW5uZXJUZXh0ID0gYCR7bmV3VGVtcH3CsEZgO1xuICAgIH1cblxuICAgIGNsb3Vkcy5pbm5lclRleHQgPSBgQ2xvdWRzOiAke2RhdGFbJ2Nsb3VkcyddWydhbGwnXX0gJWA7XG5cbiAgICAvL0ZpbmQgd2hldGhlciBvciBub3QgaXQncyByYWluaW5nLlxuICAgIGNvbnN0IG1haW5XZWF0aGVyID0gZGF0YVsnd2VhdGhlciddWzBdWydtYWluJ107XG5cbiAgICAvL0FuaW1hdGUgY2xvdWRzIGJhc2VkIG9uIGNsb3VkaW5lc3MuXG4gICAgY29uc3QgY2xvdWRpbmVzcyA9IGRhdGFbJ2Nsb3VkcyddWydhbGwnXTtcbiAgICBDbG91ZHMubWFrZUNsb3VkcyhjbG91ZGluZXNzLCBtYWluV2VhdGhlcik7XG5cbiAgICAvL1JlbW92ZSByYWluZHJvcHMgZnJvbSB0aGUgRE9NLlxuICAgIGNvbnN0IGRyb3BzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcmFpbmRyb3AnKSk7XG4gICAgZHJvcHMuZm9yRWFjaChkcm9wID0+IHtcbiAgICAgICAgZHJvcC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIC8vQWRkIHJhaW5kcm9wcyB0byB0aGUgRE9NLlxuICAgIGlmIChtYWluV2VhdGhlciA9PT0gJ1JhaW4nIHx8IG1haW5XZWF0aGVyID09PSAnRHJpenpsZScpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYWluQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW5ib3gnKTtcbiAgICAgICAgICAgIGlmIChtYWluV2VhdGhlciA9PT0gJ1JhaW4nIHx8IG1haW5XZWF0aGVyID09PSAnRHJpenpsZScpIHtcblxuICAgICAgICAgICAgICAgIC8vQWRkIHJhaW5kcm9wcyBiYXNlZCBvbiBjbG91ZCBhbW91bnQuXG4gICAgICAgICAgICAgICAgQ2xvdWRzLmdldENsb3VkcygpLmZvckVhY2goY2xvdWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvdWQuY2xhc3NMaXN0WzBdID09PSAnaGlkZGVuY2xvdWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYWluZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvL1JhbmRvbWl6ZSByYWluZHJvcCBkZWxheS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZERlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDI7XG4gICAgICAgICAgICAgICAgICAgIHJhaW5kcm9wLnN0eWxlLmFuaW1hdGlvbiA9IGByYWluIDJzIGluZmluaXRlICR7cmFuZERlbGF5fXNgO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRGlzcGxheSB0aGUgcmFpbmRyb3AuXG4gICAgICAgICAgICAgICAgICAgICAgICByYWluZHJvcC5zcmMgPSByZXF1aXJlKCcvc3JjL2ltYWdlcy9yYWluZHJvcC5wbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhaW5kcm9wLmlkID0gJ3JhaW5kcm9wJztcbiAgICAgICAgICAgICAgICAgICAgfSwgcmFuZERlbGF5ICogMTAwMCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAvL0FkZCB0aGUgZHJvcCB0byB0aGUgRE9NIGJhc2VkIG9uIGNsb3VkIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gY2xvdWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJhaW5kcm9wLnN0eWxlLnRvcCA9IGAke3JlY3QudG9wIC0gNzV9cHhgO1xuICAgICAgICAgICAgICAgICAgICByYWluZHJvcC5zdHlsZS5sZWZ0ID0gYCR7cmVjdC5sZWZ0ICsgNzV9cHhgO1xuICAgICAgICAgICAgICAgICAgICByYWluQm94LmFwcGVuZENoaWxkKHJhaW5kcm9wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgLy9NYWtlIHRoZSB1bml0IGNvbnZlcnNpb24gYnV0dG9uIGNvbnZlcnQgdGVtcGVyYXR1cmUgdW5pdHMuXG4gICAgLy9EZWZhdWx0cyB0byBjZWxzaXVzLlxuICAgIGNvbnN0IHVuaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdGJ0bicpO1xuICAgIGlmICghYnV0dG9uQWN0aXZhdGVkKSB7XG4gICAgICAgIHVuaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VGVtcCA9IGRhdGFbJ21haW4nXVsndGVtcCddO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL0NvbnZlcnQgdW5pdHMgYmFzZWQgb24gY3VycmVudCBzZWxlY3RlZCB1bml0cy5cbiAgICAgICAgICAgIGlmICh1bml0cyA9PT0gJ0MnKSB7XG4gICAgICAgICAgICAgICAgbmV3VGVtcCA9IE1hdGgucm91bmQoKG5ld1RlbXAgKiA5LzUpICsgMzIpO1xuICAgICAgICAgICAgICAgIHRlbXAuaW5uZXJUZXh0ID0gYCR7bmV3VGVtcH3CsEZgO1xuICAgICAgICAgICAgICAgIHVuaXRCdXR0b24uaW5uZXJUZXh0ID0gJ0MnO1xuICAgICAgICAgICAgICAgIHVuaXRCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxMzEsIDI1MSwgMjQ1KSc7XG4gICAgICAgICAgICAgICAgdW5pdHMgPSAnRic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVuaXRzID09PSAnRicpIHtcbiAgICAgICAgICAgICAgICB0ZW1wLmlubmVyVGV4dCA9IGAke01hdGgucm91bmQoZGF0YVsnbWFpbiddWyd0ZW1wJ10pfcKwQ2A7XG4gICAgICAgICAgICAgICAgdW5pdEJ1dHRvbi5pbm5lclRleHQgPSAnRic7XG4gICAgICAgICAgICAgICAgdW5pdEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDIxNCwgNzcsIDc3KSc7XG4gICAgICAgICAgICAgICAgdW5pdHMgPSAnQyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidXR0b25BY3RpdmF0ZWQgPSB0cnVlO1xuICAgIH1cblxuXG5cbiAgICByZXR1cm4gZGF0YVsnY29vcmQnXTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgICAvL1NldCBpbml0aWFsIHBvc2l0aW9uIG9mIHN1biBhbmQgbW9vbiBiZWZvcmUgYWRkaW5nIHRyYW5zaXRpb25zLlxuICAgIGNvbnN0IHNwYWNlQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bm1vb25ib3gnKTtcbiAgICBzcGFjZUJveC5zdHlsZS50cmFuc2l0aW9uID0gYGFsbCAke2FuaVRpbWUvMTAwMH1zYDtcblxuICAgIGNvbnN0IHRpbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKTtcbiAgICBcblxuICAgIC8vQXdhaXQgd2VhdGhlciByZXNwb25zZSBhbmQgdXNlIHRob3NlIGNvb3JkcyB0byBmZXRjaCB0aW1lLlxuICAgIGNvbnN0IGNvb3JkID0gYXdhaXQgZ2V0V2VhdGhlcigpO1xuICAgIFxuICAgIC8vU3RvcCBmdW5jdGlvbiBpZiByZXR1cm4gZGF0YSBpcyB1bmRlZmluZWQuXG4gICAgaWYgKGNvb3JkID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmlwZ2VvbG9jYXRpb24uaW8vdGltZXpvbmU/YXBpS2V5PWVhYTE0N2M1MDUyNDRmNzFhOTBjY2NjZGQ1Zjc4YWNjJmxhdD0ke2Nvb3JkWydsYXQnXX0mbG9uZz0ke2Nvb3JkWydsb24nXX1gLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgdGltZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vUmVtb3ZlIHNlY29uZHMgZnJvbSB0aGUgdGltZSBkaXNwbGF5ZWQuXG4gICAgbGV0IGNsZWFuVGltZSA9IHRpbWVbJ3RpbWVfMTInXS5zbGljZSgwLCAtNikgKyB0aW1lWyd0aW1lXzEyJ10uc2xpY2UoLTMsIHRpbWVbJ3RpbWVfMTInXS5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKGNsZWFuVGltZSk7XG5cbiAgICAvL1VwZGF0ZSB0aW1lIGRpc3BsYXkgYmFzZWQgb24gQVBJIGZldGNoLlxuICAgIHRpbWVEaXNwbGF5LmlubmVyVGV4dCA9IGNsZWFuVGltZTtcbiAgICBcbiAgICAvL1JlbW92ZSBsZWFkaW5nIDBzLlxuICAgIGlmICh0aW1lRGlzcGxheS5pbm5lclRleHRbMF0gPT09ICcwJykge1xuICAgICAgICB0aW1lRGlzcGxheS5pbm5lclRleHQgPSBjbGVhblRpbWUuc2xpY2UoMSlcbiAgICB9XG5cbiAgICAvL0NvbnZlcnQgc2VsZWN0ZWQgdGltZSBhcyBhIGZyYWN0aW9uIG9mIDM2MDtcbiAgICBsZXQgbmV3VGltZSA9IHRpbWVbJ3RpbWVfMjQnXS5zcGxpdCgnOicpO1xuICAgIGxldCBmcmFjdGlvbiA9IG5ld1RpbWVbMV0vNjA7XG4gICAgbGV0IHBlcmNlbnRhZ2UgPSAoTnVtYmVyKG5ld1RpbWVbMF0pICsgTnVtYmVyKGZyYWN0aW9uKSkgLyAyNDtcbiAgICBjb25zdCByb3RhdGlvbiA9IHBlcmNlbnRhZ2UgKiAzNjA7XG5cbiAgICAvL01vdmUgc3VuIGFuZCBtb29uIHJlbGF0aXZlIHRvIHNlbGVjdGVkIHRpbWUuXG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zcGFjZS1hbmdsZScsIGAke3JvdGF0aW9ufWRlZ2ApO1xuXG4gICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2Ryb3AnKTtcbiAgICBjb25zdCBza3kgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2t5Jyk7XG5cbiAgICAvL0FwcGx5IHRpbWUgYXMgYSBmcmFjdGlvbiB0byBiYWNrZHJvcCBicmlnaHRuZXNzLlxuICAgIGxldCBuZXdGcmFjdGlvbjtcblxuICAgIGlmIChwZXJjZW50YWdlID4gMC41KSB7XG4gICAgICAgIG5ld0ZyYWN0aW9uID0gMSAtIHBlcmNlbnRhZ2U7XG4gICAgICAgIG5ld0ZyYWN0aW9uID0gbmV3RnJhY3Rpb24gKiAyO1xuICAgIH0gZWxzZSBpZiAocGVyY2VudGFnZSA8PSAwLjUpIHtcbiAgICAgICAgbmV3RnJhY3Rpb24gPSBwZXJjZW50YWdlICogMjtcbiAgICB9XG5cbiAgICBiYWNrZHJvcC5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygke25ld0ZyYWN0aW9ufSlgO1xuICAgIHNreS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygke25ld0ZyYWN0aW9ufSlgO1xuXG4gICAgLy9BcHBseSB0aW1lIGFzIGEgZnJhY3Rpb24gdG8gY2xvdWQgYnJpZ2h0bmVzLlxuICAgIENsb3Vkcy5jbG91ZEFycmF5LmZvckVhY2goY2xvdWQgPT4ge1xuICAgICAgICBjbG91ZC5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygke25ld0ZyYWN0aW9ufSlgO1xuICAgIH0pO1xufVxuXG5cbnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGdldFRpbWUoKTtcbn0sIDApO1xuXG5cblxuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoYnRuJyk7XG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjaXR5TmFtZSA9IHNlYXJjaEJhci52YWx1ZTtcbiAgICBnZXRUaW1lKCk7XG59KTtcblxuXG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBcbi8vICAgICBzcGFjZUJveC5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGluZycpO1xuLy8gICAgIHZvaWQgc3BhY2VCb3gub2Zmc2V0V2lkdGg7XG4vLyAgICAgc3BhY2VCb3guY2xhc3NMaXN0LmFkZCgncm90YXRpbmcnKTtcblxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICBzcGFjZUJveC5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGluZycpO1xuLy8gICAgIH0sIDUwMDApO1xuLy8gfSk7XG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9