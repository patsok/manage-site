"use strict";
(self["webpackChunkmanage_site"] = self["webpackChunkmanage_site"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n}\n\n.testimonials .button, .header .button, .nav .button {\n  background-color: #F3603C;\n  color: #FCF6F5;\n  padding: 12px 32px;\n  border-radius: 22px;\n  box-shadow: 0px 15px 15px -10px #FF9F8E;\n  font-family: \"Be Vietnam Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 19px;\n  cursor: pointer;\n}\n.testimonials .button:hover, .header .button:hover, .nav .button:hover {\n  background: #F98F75;\n}\n\n.nav {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  align-items: center;\n  padding: 56px clamp(24px, 9vw, 165px);\n  color: #242D52;\n  font-family: \"Be Vietnam Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 19px;\n  position: relative;\n}\n.nav .logo {\n  grid-area: 1/1/2/2;\n}\n.nav .nav-items {\n  grid-area: 1/2/2/3;\n  justify-self: center;\n}\n.nav .nav-items ul {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  list-style: none;\n}\n.nav .nav-items ul li:hover {\n  opacity: 0.5;\n}\n.nav .nav-items ul a {\n  text-decoration: none;\n  color: #1D1E25;\n}\n.nav .nav-items.nav-mobile {\n  position: fixed;\n  display: inline-block;\n  background: #FFFFFF;\n  box-shadow: 0px 10px 20px rgba(80, 86, 98, 0.03);\n  width: 82%;\n  border-radius: 4px;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 23px;\n  text-align: center;\n  letter-spacing: -0.285714px;\n  padding: 40px;\n  margin-top: 450px;\n  z-index: 10;\n}\n.nav .nav-items.nav-mobile ul {\n  display: flex;\n  flex-direction: column;\n}\n.nav .button {\n  grid-area: 1/3/2/4;\n  justify-self: end;\n}\n.nav .hidden, .nav .mobile-hidden {\n  display: none;\n}\n\n.gradient {\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.33%, rgba(0, 0, 0, 0.599049) 99.79%);\n}\n\n@media only screen and (max-width: 1000px) {\n  .nav .nav-items, .nav .button {\n    display: none;\n  }\n  .nav .hamburger {\n    display: flex;\n    cursor: pointer;\n    grid-area: 1/3/2/4;\n    justify-self: end;\n  }\n  .nav .hamburger img {\n    width: 25px;\n  }\n  .nav .close-button {\n    display: flex;\n    justify-self: end;\n    grid-area: 1/3/2/4;\n    cursor: pointer;\n  }\n  .nav .close-button img {\n    width: 25px;\n  }\n  .nav .mobile-hidden {\n    display: none;\n  }\n}\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px clamp(24px, 9vw, 165px);\n  font-family: \"Be Vietnam Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  color: #242D52;\n}\n.header .header-left {\n  display: flex;\n  flex-direction: column;\n}\n.header h1 {\n  font-weight: 700;\n  font-size: clamp(40px, 5vw, 56px);\n  line-height: clamp(50px, 5vw, 64px);\n  letter-spacing: -1px;\n  max-width: 16ch;\n  padding-bottom: 16px;\n}\n.header p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 26px;\n  opacity: 0.5;\n  max-width: 32ch;\n  padding-bottom: 40px;\n}\n.header .button {\n  justify-self: start;\n  width: fit-content;\n}\n.header .header-right {\n  max-width: 540px;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .header {\n    text-align: center;\n    flex-direction: column-reverse;\n  }\n  .header .header-left {\n    align-items: center;\n  }\n  .header .button {\n    align-self: center;\n  }\n}\nbody {\n  position: relative;\n}\n\n.accent-img {\n  position: absolute;\n  width: 436px;\n  height: 970px;\n  right: 0px;\n  top: -243.1px;\n  background: #FFF0EC;\n  border-radius: 272px;\n  transform: rotate(45deg);\n  z-index: -5;\n}\n\n.about {\n  display: flex;\n  padding: 64px clamp(24px, 9vw, 165px);\n  color: #242D52;\n  font-family: \"Be Vietnam Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  gap: 32px;\n}\n.about .about-left {\n  width: 50%;\n}\n.about .about-left h2 {\n  font-weight: 700;\n  font-size: 40px;\n  line-height: 44px;\n  letter-spacing: -0.714286px;\n  padding-bottom: 24px;\n  max-width: 16ch;\n}\n.about .about-left p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 26px;\n  opacity: 0.5;\n  max-width: 32ch;\n}\n.about .about-right {\n  width: 50%;\n}\n.about .about-right .about-card {\n  display: grid;\n  grid-template-columns: 70px 1fr;\n  align-items: center;\n  gap: 28px;\n  padding-bottom: 40px;\n}\n.about .about-right .about-card .about-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #F3603C;\n  color: #FCF6F5;\n  border-radius: 22px;\n  font-family: \"Be Vietnam Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 23px;\n  letter-spacing: -0.285714px;\n  width: 67px;\n  height: 39px;\n}\n.about .about-right .about-card h3 {\n  grid-area: 1/2/2/3;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 23px;\n}\n.about .about-right .about-card p {\n  margin-top: -10px;\n  grid-area: 2/2/3/3;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 26px;\n  opacity: 0.5;\n}\n\n@media only screen and (max-width: 768px) {\n  .about {\n    flex-direction: column;\n    align-items: center;\n  }\n  .about .about-left {\n    width: 100%;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .about .about-right {\n    width: 100%;\n  }\n  .about .about-right .about-card p {\n    grid-area: 2/1/3/3;\n  }\n}\n.testimonials {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 64px 0px;\n  font-family: \"Be Vietnam Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n.testimonials .swiper-container {\n  width: 100%;\n  height: 300px;\n  margin: 20px auto;\n  padding: 64px 0px;\n  position: relative;\n}\n.testimonials .swiper-slide-container {\n  text-align: center;\n  font-size: 18px;\n  height: 256px;\n  max-width: 540px;\n  margin: 0 auto;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  background-color: #FAFAFA;\n  color: #242D52;\n}\n.testimonials .swiper-slide-container .photo {\n  position: absolute;\n  top: -40px;\n}\n.testimonials .swiper-slide-container h3 {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 23px;\n  text-align: center;\n  letter-spacing: -0.285714px;\n  padding-bottom: 19px;\n}\n.testimonials .swiper-slide-container p {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: center;\n  opacity: 0.5;\n  max-width: 42ch;\n}\n.testimonials .swiper-pagination {\n  display: none;\n}\n.testimonials .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: -50px;\n}\n.testimonials .swiper-pagination .swiper-pagination-bullet {\n  border: 1px solid #F3603C;\n  border-radius: 3.5px;\n  background-color: initial;\n}\n.testimonials .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background: #F3603C;\n  border: 1px solid #F3603C;\n  border-radius: 3.5px;\n}\n.testimonials .button {\n  margin-top: 48px;\n}\n\n@media only screen and (max-width: 1400px) {\n  .testimonials .swiper-pagination {\n    display: block;\n  }\n  .testimonials .button {\n    margin-top: 62px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.scss","webpack://./src/styles/nav.scss","webpack://./src/styles/header.scss","webpack://./src/styles/about.scss","webpack://./src/styles/testimonials.scss"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    min-height: 100vh;\n}\n\n$primary-color: #F3603C;\n$secondary-color: #242D52;\n$text-color: #1D1E25;\n$accent-color: #FFF0EC;\n$button-color: #FCF6F5;\n@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&display=swap');\n$font-stack: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\n%button-design{\n    background-color: $primary-color;\n    color: $button-color;\n    padding: 12px 32px;\n    border-radius: 22px;\n    box-shadow: 0px 15px 15px -10px #FF9F8E;\n    font-family: $font-stack;\n    font-weight: 700;\n    font-size: 13px;\n    line-height: 19px;\n    cursor: pointer;\n    \n    &:hover{\n        background: #F98F75;\n    }\n}\n\n@import \"./nav\";\n@import \"./header\";\n@import \"./about\";\n@import \"./testimonials\";",".nav{\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    align-items: center;\n    padding: 56px clamp(24px,9vw,165px);\n    color:$secondary-color;\n    font-family: $font-stack;\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 19px;\n    position: relative;\n\n    .logo{\n        grid-area: 1/1/2/2;\n    }\n\n    .nav-items{\n        grid-area: 1/2/2/3;\n        justify-self: center;\n        ul{\n            display: flex;\n            align-items: center;\n            gap: 32px;\n            list-style: none;\n\n            li:hover{\n                opacity: 0.5;\n            }\n\n            a{\n                text-decoration: none;\n                color:$text-color;\n            }\n        }\n    }\n\n    .nav-items.nav-mobile{\n        position: fixed;\n        display: inline-block;\n        background: #FFFFFF;\n        box-shadow: 0px 10px 20px rgba(80, 86, 98, 0.03);\n        width: 82%;\n        border-radius: 4px;\n        font-size: 16px;\n        font-weight: 700;\n        line-height: 23px;\n        text-align: center;\n        letter-spacing: -0.285714px;\n        padding: 40px;\n        margin-top: 450px;\n        z-index: 10;\n        ul{\n            display: flex;\n            flex-direction: column;\n        }\n    }\n\n    .button{\n        grid-area: 1/3/2/4;\n        justify-self: end;\n        @extend %button-design;\n    }\n    .hidden,.mobile-hidden {\n        display: none;\n    }\n}\n\n.gradient{\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.33%, rgba(0, 0, 0, 0.599049) 99.79%);\n    // z-index: 5;\n}\n\n@media only screen and (max-width:1000px){\n    .nav{\n        .nav-items,.button{\n            display: none;\n        }\n\n        .hamburger{\n            display:flex;\n            cursor: pointer;\n            grid-area: 1/3/2/4;\n            justify-self: end;\n            img{\n                width: 25px;\n            }\n        }\n\n        .close-button{\n            display: flex;\n            justify-self: end;\n            grid-area: 1/3/2/4;\n            cursor: pointer;\n            img{\n                width: 25px;\n            }\n        }\n\n        .mobile-hidden{\n            display: none;\n        }\n    }\n}",".header{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0px clamp(24px,9vw,165px);\n    font-family: $font-stack;\n    color: $secondary-color;\n\n    .header-left{\n        display: flex;\n        flex-direction: column;\n    }\n\n    h1{\n        font-weight: 700;\n        font-size: clamp(40px,5vw,56px);\n        line-height: clamp(50px,5vw,64px);\n        letter-spacing: -1px;\n        max-width: 16ch;\n        padding-bottom: 16px;\n    }\n    p{\n        font-weight: 400;\n        font-size: 16px;\n        line-height: 26px;\n        opacity: 0.5;\n        max-width: 32ch;\n        padding-bottom: 40px;\n    }\n    .button{\n        @extend %button-design;\n        justify-self: start;\n        width: fit-content;\n    }\n\n    .header-right{\n        max-width: 540px;\n        width: 100%;\n    }\n}\n\n@media only screen and (max-width:768px){\n    .header{\n        text-align: center;\n        flex-direction: column-reverse;\n        .header-left{\n            align-items: center;\n        }\n\n        .button{\n            align-self: center;\n        }\n    }\n}\n\nbody{\n    position: relative;\n}\n\n.accent-img{\n    position: absolute;\n    width: 436px;\n    height: 970px;\n    right: 0px;\n    top: -243.1px;\n    background: #FFF0EC;\n    border-radius: 272px;\n    transform: rotate(45deg);\n    z-index: -5;\n}",".about{\n    display: flex;\n    padding: 64px clamp(24px,9vw,165px);\n    color: $secondary-color;\n    font-family: $font-stack;\n    gap:32px;\n    \n    .about-left{\n        width: 50%;\n        h2{\n            font-weight: 700;\n            font-size: 40px;\n            line-height: 44px;\n            letter-spacing: -0.714286px;\n            padding-bottom: 24px;\n            max-width: 16ch;\n        }\n        p{\n            font-weight: 400;\n            font-size: 16px;\n            line-height: 26px;\n            opacity: 0.5;\n            max-width: 32ch;\n        }\n    }\n    .about-right{\n        width: 50%;\n\n        .about-card{\n            display: grid;\n            grid-template-columns: 70px 1fr;\n            align-items: center;\n            gap:28px;\n            padding-bottom: 40px;\n                .about-number{\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    background-color: $primary-color;\n                    color: $button-color;\n                    border-radius: 22px;\n                    font-family: $font-stack;\n                    font-size: 16px;\n                    font-weight: 700;\n                    line-height: 23px;\n                    letter-spacing: -0.285714px;\n                    width: 67px;\n                    height: 39px;\n                }\n                h3{\n                    grid-area: 1/2/2/3;\n                    font-weight: 700;\n                    font-size: 16px;\n                    line-height: 23px;\n                }\n                p{\n                    margin-top: -10px;\n                    grid-area: 2/2/3/3;\n                    font-weight: 400;\n                    font-size: 16px;\n                    line-height: 26px;\n                    opacity: 0.5;\n                    // max-width: 41ch;\n                }\n            \n        }\n    }\n}\n\n\n@media only screen and (max-width:768px){\n    .about{\n        flex-direction: column;\n        align-items: center;\n\n        .about-left{\n            width: 100%;\n            text-align: center;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n        .about-right{\n            width: 100%;\n            .about-card{\n                p{\n                    grid-area: 2/1/3/3;\n                }\n            }\n        }\n    }\n}",".testimonials{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 64px 0px;\n    font-family: $font-stack;\n\n    .swiper-container {\n        width: 100%;\n        height: 300px;\n        margin: 20px auto;\n        padding: 64px 0px;\n        position: relative;\n    }\n    \n    .swiper-slide-container {\n        text-align: center;\n        font-size: 18px;\n        height: 256px;\n        max-width: 540px;\n        margin:0 auto;\n        justify-content: center;\n        align-items: center;\n        display: flex;\n        flex-direction: column;\n        background-color: #FAFAFA;\n        color: $secondary-color;\n    \n            .photo{\n                position: absolute;\n                top: -40px;\n            }\n                    h3{\n                font-weight: 700;\n                font-size: 16px;\n                line-height: 23px;\n                text-align: center;\n                letter-spacing: -0.285714px;\n                padding-bottom: 19px;\n            }\n            p{\n                font-weight: 400;\n                font-size: 16px;\n                line-height: 26px;\n                text-align: center;\n                opacity: 0.5;\n                max-width: 42ch;\n            }\n    }\n    .swiper-pagination{\n        display: none;\n\n        &.swiper-pagination-bullets.swiper-pagination-horizontal {\n            bottom:-50px;\n        }\n\n\n        .swiper-pagination-bullet{\n            border: 1px solid $primary-color;\n            border-radius: 3.5px;\n            background-color:initial;\n            &.swiper-pagination-bullet-active{\n                background: $primary-color;\n                border: 1px solid $primary-color;\n                border-radius: 3.5px;\n            }\n        }\n    }\n\n\n\n    .button{\n        @extend %button-design;\n        margin-top: 48px;\n    }\n}\n\n@media only screen and (max-width:1400px){\n    .testimonials{\n        .swiper-pagination{\n            display: block;\n        }\n        .button{\n            margin-top: 62px;\n        }\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");


const hamburgerMenu = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const mobileNav = document.querySelector('.nav-items');
const body = document.querySelector('body')
const nav = document.querySelector('.nav');

hamburgerMenu.addEventListener('click',showNav);
closeButton.addEventListener('click',closeNav);

function showNav(){
    hamburgerMenu.classList.add('mobile-hidden');
    mobileNav.classList.add('nav-mobile');
    closeButton.classList.remove('mobile-hidden');
    body.classList.add('gradient');
    nav.setAttribute('style','position:fixed');
    nav.setAttribute('style','padding-bottom:54px');

}

function closeNav(){
    hamburgerMenu.classList.remove('mobile-hidden');
    mobileNav.classList.remove('nav-mobile');
    closeButton.classList.add('mobile-hidden');
    body.classList.remove('gradient');
    nav.setAttribute('style','position:static');
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsV0FBVyxZQUFZLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxRQUFRLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxN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QWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDZjhCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5hZ2Utc2l0ZS8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vbWFuYWdlLXNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21hbmFnZS1zaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWFuYWdlLXNpdGUvLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzPzIwM2IiLCJ3ZWJwYWNrOi8vbWFuYWdlLXNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWFuYWdlLXNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21hbmFnZS1zaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21hbmFnZS1zaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21hbmFnZS1zaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWFuYWdlLXNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tYW5hZ2Utc2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlK1ZpZXRuYW0rUHJvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udGVzdGltb25pYWxzIC5idXR0b24sIC5oZWFkZXIgLmJ1dHRvbiwgLm5hdiAuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzYwM0M7XFxuICBjb2xvcjogI0ZDRjZGNTtcXG4gIHBhZGRpbmc6IDEycHggMzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICBib3gtc2hhZG93OiAwcHggMTVweCAxNXB4IC0xMHB4ICNGRjlGOEU7XFxuICBmb250LWZhbWlseTogXFxcIkJlIFZpZXRuYW0gUHJvXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGVzdGltb25pYWxzIC5idXR0b246aG92ZXIsIC5oZWFkZXIgLmJ1dHRvbjpob3ZlciwgLm5hdiAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNGOThGNzU7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNTZweCBjbGFtcCgyNHB4LCA5dncsIDE2NXB4KTtcXG4gIGNvbG9yOiAjMjQyRDUyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZSBWaWV0bmFtIFByb1xcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMTlweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm5hdiAubG9nbyB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcbi5uYXYgLm5hdi1pdGVtcyB7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLm5hdiAubmF2LWl0ZW1zIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMnB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm5hdiAubmF2LWl0ZW1zIHVsIGxpOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLm5hdiAubmF2LWl0ZW1zIHVsIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMxRDFFMjU7XFxufVxcbi5uYXYgLm5hdi1pdGVtcy5uYXYtbW9iaWxlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoODAsIDg2LCA5OCwgMC4wMyk7XFxuICB3aWR0aDogODIlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4NTcxNHB4O1xcbiAgcGFkZGluZzogNDBweDtcXG4gIG1hcmdpbi10b3A6IDQ1MHB4O1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5uYXYgLm5hdi1pdGVtcy5uYXYtbW9iaWxlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubmF2IC5idXR0b24ge1xcbiAgZ3JpZC1hcmVhOiAxLzMvMi80O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbi5uYXYgLmhpZGRlbiwgLm5hdiAubW9iaWxlLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjAwMDEpIDAuMzMlLCByZ2JhKDAsIDAsIDAsIDAuNTk5MDQ5KSA5OS43OSUpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgLm5hdiAubmF2LWl0ZW1zLCAubmF2IC5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm5hdiAuaGFtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgfVxcbiAgLm5hdiAuaGFtYnVyZ2VyIGltZyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgfVxcbiAgLm5hdiAuY2xvc2UtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGdyaWQtYXJlYTogMS8zLzIvNDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLm5hdiAuY2xvc2UtYnV0dG9uIGltZyB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgfVxcbiAgLm5hdiAubW9iaWxlLWhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwcHggY2xhbXAoMjRweCwgOXZ3LCAxNjVweCk7XFxuICBmb250LWZhbWlseTogXFxcIkJlIFZpZXRuYW0gUHJvXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgY29sb3I6ICMyNDJENTI7XFxufVxcbi5oZWFkZXIgLmhlYWRlci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaGVhZGVyIGgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IGNsYW1wKDQwcHgsIDV2dywgNTZweCk7XFxuICBsaW5lLWhlaWdodDogY2xhbXAoNTBweCwgNXZ3LCA2NHB4KTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgbWF4LXdpZHRoOiAxNmNoO1xcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxufVxcbi5oZWFkZXIgcCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBtYXgtd2lkdGg6IDMyY2g7XFxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG59XFxuLmhlYWRlciAuYnV0dG9uIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcbi5oZWFkZXIgLmhlYWRlci1yaWdodCB7XFxuICBtYXgtd2lkdGg6IDU0MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG4gIC5oZWFkZXIgLmhlYWRlci1sZWZ0IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5oZWFkZXIgLmJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hY2NlbnQtaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA0MzZweDtcXG4gIGhlaWdodDogOTcwcHg7XFxuICByaWdodDogMHB4O1xcbiAgdG9wOiAtMjQzLjFweDtcXG4gIGJhY2tncm91bmQ6ICNGRkYwRUM7XFxuICBib3JkZXItcmFkaXVzOiAyNzJweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHotaW5kZXg6IC01O1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDY0cHggY2xhbXAoMjRweCwgOXZ3LCAxNjVweCk7XFxuICBjb2xvcjogIzI0MkQ1MjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmUgVmlldG5hbSBQcm9cXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICBnYXA6IDMycHg7XFxufVxcbi5hYm91dCAuYWJvdXQtbGVmdCB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG4uYWJvdXQgLmFib3V0LWxlZnQgaDIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjcxNDI4NnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XFxuICBtYXgtd2lkdGg6IDE2Y2g7XFxufVxcbi5hYm91dCAuYWJvdXQtbGVmdCBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjZweDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIG1heC13aWR0aDogMzJjaDtcXG59XFxuLmFib3V0IC5hYm91dC1yaWdodCB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG4uYWJvdXQgLmFib3V0LXJpZ2h0IC5hYm91dC1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwcHggMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbn1cXG4uYWJvdXQgLmFib3V0LXJpZ2h0IC5hYm91dC1jYXJkIC5hYm91dC1udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzYwM0M7XFxuICBjb2xvcjogI0ZDRjZGNTtcXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICBmb250LWZhbWlseTogXFxcIkJlIFZpZXRuYW0gUHJvXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4NTcxNHB4O1xcbiAgd2lkdGg6IDY3cHg7XFxuICBoZWlnaHQ6IDM5cHg7XFxufVxcbi5hYm91dCAuYWJvdXQtcmlnaHQgLmFib3V0LWNhcmQgaDMge1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbn1cXG4uYWJvdXQgLmFib3V0LXJpZ2h0IC5hYm91dC1jYXJkIHAge1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5hYm91dCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuYWJvdXQgLmFib3V0LWxlZnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmFib3V0IC5hYm91dC1yaWdodCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmFib3V0IC5hYm91dC1yaWdodCAuYWJvdXQtY2FyZCBwIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbiAgfVxcbn1cXG4udGVzdGltb25pYWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDY0cHggMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZSBWaWV0bmFtIFByb1xcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuLnRlc3RpbW9uaWFscyAuc3dpcGVyLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHBhZGRpbmc6IDY0cHggMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udGVzdGltb25pYWxzIC5zd2lwZXItc2xpZGUtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGhlaWdodDogMjU2cHg7XFxuICBtYXgtd2lkdGg6IDU0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxuICBjb2xvcjogIzI0MkQ1MjtcXG59XFxuLnRlc3RpbW9uaWFscyAuc3dpcGVyLXNsaWRlLWNvbnRhaW5lciAucGhvdG8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNDBweDtcXG59XFxuLnRlc3RpbW9uaWFscyAuc3dpcGVyLXNsaWRlLWNvbnRhaW5lciBoMyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMjg1NzE0cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTlweDtcXG59XFxuLnRlc3RpbW9uaWFscyAuc3dpcGVyLXNsaWRlLWNvbnRhaW5lciBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIG1heC13aWR0aDogNDJjaDtcXG59XFxuLnRlc3RpbW9uaWFscyAuc3dpcGVyLXBhZ2luYXRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRlc3RpbW9uaWFscyAuc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsIHtcXG4gIGJvdHRvbTogLTUwcHg7XFxufVxcbi50ZXN0aW1vbmlhbHMgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0YzNjAzQztcXG4gIGJvcmRlci1yYWRpdXM6IDMuNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG59XFxuLnRlc3RpbW9uaWFscyAuc3dpcGVyLXBhZ2luYXRpb24gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNGMzYwM0M7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRjM2MDNDO1xcbiAgYm9yZGVyLXJhZGl1czogMy41cHg7XFxufVxcbi50ZXN0aW1vbmlhbHMgLmJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiA0OHB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xcbiAgLnRlc3RpbW9uaWFscyAuc3dpcGVyLXBhZ2luYXRpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC50ZXN0aW1vbmlhbHMgLmJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDYycHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbmF2LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYWJvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy90ZXN0aW1vbmlhbHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFTQTtFQUNJLHlCQVRZO0VBVVosY0FOVztFQU9YLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDRLQVJTO0VBU1QsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTko7QUFRSTtFQUNJLG1CQUFBO0FBTlI7O0FDM0JB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SSxjQUFBO0VKa1FWO0VJaFFNO0lBQ0ksZ0JBQUE7RUprUVY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keXtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiRwcmltYXJ5LWNvbG9yOiAjRjM2MDNDO1xcbiRzZWNvbmRhcnktY29sb3I6ICMyNDJENTI7XFxuJHRleHQtY29sb3I6ICMxRDFFMjU7XFxuJGFjY2VudC1jb2xvcjogI0ZGRjBFQztcXG4kYnV0dG9uLWNvbG9yOiAjRkNGNkY1O1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlK1ZpZXRuYW0rUHJvJmRpc3BsYXk9c3dhcCcpO1xcbiRmb250LXN0YWNrOiAnQmUgVmlldG5hbSBQcm8nLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuXFxuJWJ1dHRvbi1kZXNpZ257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgICBjb2xvcjogJGJ1dHRvbi1jb2xvcjtcXG4gICAgcGFkZGluZzogMTJweCAzMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMTVweCAxNXB4IC0xMHB4ICNGRjlGOEU7XFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zdGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBsaW5lLWhlaWdodDogMTlweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOThGNzU7XFxuICAgIH1cXG59XFxuXFxuQGltcG9ydCBcXFwiLi9uYXZcXFwiO1xcbkBpbXBvcnQgXFxcIi4vaGVhZGVyXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2Fib3V0XFxcIjtcXG5AaW1wb3J0IFxcXCIuL3Rlc3RpbW9uaWFsc1xcXCI7XCIsXCIubmF2e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1NnB4IGNsYW1wKDI0cHgsOXZ3LDE2NXB4KTtcXG4gICAgY29sb3I6JHNlY29uZGFyeS1jb2xvcjtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIC5sb2dve1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtaXRlbXN7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIHVse1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDMycHg7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgICAgICAgICBsaTpob3ZlcntcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBhe1xcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiR0ZXh0LWNvbG9yO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubmF2LWl0ZW1zLm5hdi1tb2JpbGV7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDgwLCA4NiwgOTgsIDAuMDMpO1xcbiAgICAgICAgd2lkdGg6IDgyJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yODU3MTRweDtcXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiA0NTBweDtcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICAgICAgdWx7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5idXR0b257XFxuICAgICAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgIEBleHRlbmQgJWJ1dHRvbi1kZXNpZ247XFxuICAgIH1cXG4gICAgLmhpZGRlbiwubW9iaWxlLWhpZGRlbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbi5ncmFkaWVudHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjAwMDEpIDAuMzMlLCByZ2JhKDAsIDAsIDAsIDAuNTk5MDQ5KSA5OS43OSUpO1xcbiAgICAvLyB6LWluZGV4OiA1O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcXG4gICAgLm5hdntcXG4gICAgICAgIC5uYXYtaXRlbXMsLmJ1dHRvbntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmhhbWJ1cmdlcntcXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMS8zLzIvNDtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jbG9zZS1idXR0b257XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1vYmlsZS1oaWRkZW57XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cIixcIi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4IGNsYW1wKDI0cHgsOXZ3LDE2NXB4KTtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG5cXG4gICAgLmhlYWRlci1sZWZ0e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgaDF7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCg0MHB4LDV2dyw1NnB4KTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBjbGFtcCg1MHB4LDV2dyw2NHB4KTtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNmNoO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICAgIH1cXG4gICAgcHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIG1heC13aWR0aDogMzJjaDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgICB9XFxuICAgIC5idXR0b257XFxuICAgICAgICBAZXh0ZW5kICVidXR0b24tZGVzaWduO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyLXJpZ2h0e1xcbiAgICAgICAgbWF4LXdpZHRoOiA1NDBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgICAuaGVhZGVyLWxlZnR7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5idXR0b257XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFjY2VudC1pbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDQzNnB4O1xcbiAgICBoZWlnaHQ6IDk3MHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IC0yNDMuMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGMEVDO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNzJweDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICB6LWluZGV4OiAtNTtcXG59XCIsXCIuYWJvdXR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDY0cHggY2xhbXAoMjRweCw5dncsMTY1cHgpO1xcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbiAgICBnYXA6MzJweDtcXG4gICAgXFxuICAgIC5hYm91dC1sZWZ0e1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIGgye1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC43MTQyODZweDtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE2Y2g7XFxuICAgICAgICB9XFxuICAgICAgICBwe1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMyY2g7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLmFib3V0LXJpZ2h0e1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG5cXG4gICAgICAgIC5hYm91dC1jYXJke1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MHB4IDFmcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDoyOHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgICAgICAgICAgICAgICAuYWJvdXQtbnVtYmVye1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRidXR0b24tY29sb3I7XFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4NTcxNHB4O1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY3cHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM5cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgaDN7XFxuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiA0MWNoO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcXG4gICAgLmFib3V0e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAuYWJvdXQtbGVmdHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgICAuYWJvdXQtcmlnaHR7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgLmFib3V0LWNhcmR7XFxuICAgICAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IDIvMS8zLzM7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG59XCIsXCIudGVzdGltb25pYWxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA2NHB4IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcblxcbiAgICAuc3dpcGVyLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMzAwcHg7XFxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgICAgIHBhZGRpbmc6IDY0cHggMHB4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc3dpcGVyLXNsaWRlLWNvbnRhaW5lciB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBoZWlnaHQ6IDI1NnB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiA1NDBweDtcXG4gICAgICAgIG1hcmdpbjowIGF1dG87XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gICAgXFxuICAgICAgICAgICAgLnBob3Rve1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHRvcDogLTQwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgaDN7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4NTcxNHB4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTlweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDJjaDtcXG4gICAgICAgICAgICB9XFxuICAgIH1cXG4gICAgLnN3aXBlci1wYWdpbmF0aW9ue1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgICAgICYuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1ob3Jpem9udGFsIHtcXG4gICAgICAgICAgICBib3R0b206LTUwcHg7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0e1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMuNXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6aW5pdGlhbDtcXG4gICAgICAgICAgICAmLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmV7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMy41cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxuXFxuICAgIC5idXR0b257XFxuICAgICAgICBAZXh0ZW5kICVidXR0b24tZGVzaWduO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNDhweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTQwMHB4KXtcXG4gICAgLnRlc3RpbW9uaWFsc3tcXG4gICAgICAgIC5zd2lwZXItcGFnaW5hdGlvbntcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIH1cXG4gICAgICAgIC5idXR0b257XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNjJweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG5jb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtYnV0dG9uXCIpO1xuY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1pdGVtcycpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuXG5oYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzaG93TmF2KTtcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjbG9zZU5hdik7XG5cbmZ1bmN0aW9uIHNob3dOYXYoKXtcbiAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1oaWRkZW4nKTtcbiAgICBtb2JpbGVOYXYuY2xhc3NMaXN0LmFkZCgnbmF2LW1vYmlsZScpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vYmlsZS1oaWRkZW4nKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2dyYWRpZW50Jyk7XG4gICAgbmF2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdwb3NpdGlvbjpmaXhlZCcpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywncGFkZGluZy1ib3R0b206NTRweCcpO1xuXG59XG5cbmZ1bmN0aW9uIGNsb3NlTmF2KCl7XG4gICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtb2JpbGUtaGlkZGVuJyk7XG4gICAgbW9iaWxlTmF2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1tb2JpbGUnKTtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtaGlkZGVuJyk7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdncmFkaWVudCcpO1xuICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywncG9zaXRpb246c3RhdGljJyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9