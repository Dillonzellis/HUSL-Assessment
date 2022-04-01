/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nbody {\n  background-color: white;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 18px;\n  /* line-height: 28px; */\n  letter-spacing: 1px; }\n\nnav {\n  background-image: linear-gradient(134.46deg, #4279db 0%, #82afff 99.07%);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n  box-shadow: 0px 0px 20px rgba(15, 26, 79, 0.3); }\n  @media only screen and (min-width: 1050px) {\n    nav {\n      justify-content: space-around;\n      min-height: 100px; } }\n  nav .logo {\n    margin-left: 1.5rem; }\n    @media only screen and (max-width: 1050px) {\n      nav .logo img {\n        height: 64px; } }\n    @media only screen and (min-width: 1050px) {\n      nav .logo img {\n        width: 252px;\n        height: 98px; } }\n  nav .nav-links {\n    display: flex;\n    justify-content: space-around;\n    width: 100%; }\n    @media only screen and (max-width: 1050px) {\n      nav .nav-links {\n        position: absolute;\n        left: 0;\n        top: 60px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 50%;\n        transition: transform 0.3s ease-in; } }\n    @media only screen and (min-width: 1050px) {\n      nav .nav-links {\n        width: 80%;\n        min-height: 100%; } }\n    nav .nav-links li {\n      list-style: none;\n      display: flex;\n      align-items: center; }\n      @media only screen and (max-width: 1050px) {\n        nav .nav-links li {\n          opacity: 0;\n          width: 100%;\n          border-bottom: 1px solid #e9eef2;\n          padding: 1rem 0; }\n          nav .nav-links li .animate {\n            animation: navLinkFade 0.3s ease forwards; }\n          nav .nav-links li:first-child {\n            margin-top: 2rem; }\n          nav .nav-links li:nth-last-child(3) {\n            border-bottom: none; }\n          nav .nav-links li:last-child {\n            border-bottom: none; }\n          nav .nav-links li .accent {\n            color: #38e5c4; }\n          nav .nav-links li a {\n            margin-left: 5rem;\n            color: #200d59; }\n          nav .nav-links li .arrow-wrapper {\n            position: relative; }\n            nav .nav-links li .arrow-wrapper img {\n              position: absolute;\n              left: 20px; } }\n    @media only screen and (min-width: 1050px) {\n      nav .nav-links .nav-link:hover {\n        cursor: pointer;\n        border-top: 1px solid white; } }\n    nav .nav-links a {\n      text-decoration: none; }\n      @media only screen and (min-width: 1050px) {\n        nav .nav-links a {\n          color: white; } }\n    nav .nav-links .arrow-wrapper {\n      display: flex; }\n      nav .nav-links .arrow-wrapper .mobile-arrow {\n        display: flex;\n        align-items: center; }\n        @media only screen and (min-width: 1050px) {\n          nav .nav-links .arrow-wrapper .mobile-arrow {\n            display: none; } }\n      nav .nav-links .arrow-wrapper .submenu {\n        display: none; }\n        @media only screen and (min-width: 1050px) {\n          nav .nav-links .arrow-wrapper .submenu {\n            position: absolute;\n            top: 140px;\n            width: 25%;\n            flex-direction: column; } }\n    nav .nav-links .search {\n      display: none; }\n      @media only screen and (min-width: 1050px) {\n        nav .nav-links .search {\n          display: flex; } }\n    @media only screen and (max-width: 1050px) {\n      nav .nav-links .btn {\n        border-bottom: none;\n        border: 1px solid #38e5c4;\n        width: 85vw;\n        display: flex;\n        justify-content: center;\n        color: #38e5c4 !important;\n        margin: auto !important;\n        padding: 1rem; }\n        nav .nav-links .btn:hover {\n          cursor: pointer; }\n        nav .nav-links .btn a {\n          text-align: center; } }\n    @media only screen and (min-width: 1050px) {\n      nav .nav-links .btn {\n        border: 1px solid white;\n        padding: 0.75rem 2.5rem; } }\n  @media only screen and (min-width: 1050px) {\n    nav .mobile-search-burger-wrapper {\n      display: none; } }\n  nav .mobile-search {\n    display: flex;\n    align-items: center; }\n  nav .burger {\n    cursor: pointer;\n    margin-right: 1rem; }\n    @media only screen and (min-width: 1050px) {\n      nav .burger {\n        display: none; } }\n    nav .burger div {\n      width: 25px;\n      height: 3px;\n      background-color: white;\n      margin: 5px;\n      transition: all 0.3s ease; }\n\n.mobile-search-burger-wrapper {\n  display: flex; }\n  .mobile-search-burger-wrapper img {\n    margin-right: 1rem; }\n\n.search-bar {\n  display: none;\n  justify-content: left;\n  align-items: center; }\n  @media only screen and (max-width: 1050px) {\n    .search-bar .search-bar {\n      display: none;\n      margin-top: 75px; } }\n  @media only screen and (min-width: 1050px) {\n    .search-bar {\n      margin-top: 110px;\n      margin-left: 20%; } }\n  .search-bar .input-wrapper {\n    display: flex;\n    border-bottom: 1px solid #e9eef2;\n    width: 70%;\n    position: relative; }\n    .search-bar .input-wrapper input {\n      font-size: 18px;\n      font-family: \"PT Sans\", sans-serif;\n      font-weight: bold;\n      width: 100%;\n      border: none;\n      line-height: 3rem; }\n      .search-bar .input-wrapper input::placeholder {\n        color: black; }\n      .search-bar .input-wrapper input:focus {\n        outline-color: #38e5c4; }\n    .search-bar .input-wrapper button {\n      background-color: white;\n      border: none; }\n\n.show-flex {\n  display: flex; }\n\n.show-block {\n  display: block !important; }\n\n@media only screen and (max-width: 1050px) {\n  .show {\n    display: block !important; } }\n\n.hide {\n  display: none !important; }\n\n.nav-active {\n  transform: translateX(0); }\n\n.nav-remove {\n  transform: scaleX(-100); }\n\n@keyframes navLinkFade {\n  from {\n    opacity: 0;\n    transform: translateX(-50px); }\n  to {\n    opacity: 1;\n    transform: translateX(0px); } }\n\n.toggle .line1 {\n  transform: rotate(-45deg) translate(-5px, 6px); }\n\n.toggle .line2 {\n  opacity: 0; }\n\n.toggle .line3 {\n  transform: rotate(45deg) translate(-5px, -6px); }\n", "",{"version":3,"sources":["webpack://./src/styles/config/_reset.scss","webpack://./src/styles/nav/_new-nav.scss","webpack://./src/styles/config/_variables.scss","webpack://./src/styles/nav/_animations.scss"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB,EAAA;;AAGxB;EACE,uBAAuB;EACvB,kCAAkC;EAClC,eAAe;EACf,uBAAA;EACA,mBAAmB,EAAA;;ACXrB;EACE,wEAAwE;EACxE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,8CAA8C,EAAA;EAE9C;IARF;MASI,6BAA6B;MAC7B,iBAAiB,EAAA,EAwLpB;EAlMD;IAaI,mBAAmB,EAAA;IACnB;MAdJ;QAgBQ,YAAY,EAAA,EACb;IAGH;MApBJ;QAsBQ,YAAY;QACZ,YAAY,EAAA,EACb;EAxBP;IA6BI,aAAa;IACb,6BAA6B;IAC7B,WAAW,EAAA;IAEX;MAjCJ;QAkCM,kBAAkB;QAClB,OAAO;QACP,SAAS;QAET,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,UAAU;QAEV,kCAAkC,EAAA,EA0HrC;IAvHC;MA9CJ;QA+CM,UAAU;QACV,gBAAgB,EAAA,EAqHnB;IArKH;MAoDM,gBAAgB;MAChB,aAAa;MACb,mBAAmB,EAAA;MAEnB;QAxDN;UAyDQ,UAAU;UACV,WAAW;UACX,gCAAgC;UAChC,eAAe,EAAA;UA5DvB;YA+DU,yCAAyC,EAAA;UA/DnD;YAmEU,gBAAgB,EAAA;UAnE1B;YAsEU,mBAAmB,EAAA;UAtE7B;YA0EU,mBAAmB,EAAA;UA1E7B;YA8EU,cAAc,EAAA;UA9ExB;YAkFU,iBAAiB;YACjB,cAAc,EAAA;UAnFxB;YAsFU,kBAAkB,EAAA;YAtF5B;cAwFY,kBAAkB;cAClB,UAAU,EAAA,EACX;IAKP;MA/FJ;QAkGU,eAAe;QACf,2BAA2B,EAAA,EAC5B;IApGT;MAwGM,qBAAqB,EAAA;MACrB;QAzGN;UA0GQ,YAAY,EAAA,EAEf;IA5GL;MA8GM,aAAa,EAAA;MA9GnB;QAoHQ,aAAa;QACb,mBAAmB,EAAA;QALnB;UAhHR;YAiHU,aAAa,EAAA,EAKhB;MAtHP;QAwHQ,aAAa,EAAA;QACb;UAzHR;YA0HU,kBAAkB;YAClB,UAAU;YACV,UAAU;YACV,sBAAsB,EAAA,EAIzB;IAjIP;MAoIM,aAAa,EAAA;MACb;QArIN;UAsIQ,aAAa,EAAA,EAEhB;IAGC;MA3IN;QA4IQ,mBAAmB;QAEnB,yBC7IQ;QD8IR,WAAW;QACX,aAAa;QACb,uBAAuB;QACvB,yBAAyB;QACzB,uBAAuB;QACvB,aAAa,EAAA;QApJrB;UAsJU,eAAe,EAAA;QAtJzB;UAyJU,kBAAkB,EAAA,EAInB;IAGH;MAhKN;QAiKQ,uBAAuB;QACvB,uBAAuB,EAAA,EAE1B;EAID;IAxKJ;MAyKM,aAAa,EAAA,EAEhB;EA3KH;IA8KI,aAAa;IACb,mBAAmB,EAAA;EA/KvB;IAmLI,eAAe;IACf,kBAAkB,EAAA;IAElB;MAtLJ;QAuLM,aAAa,EAAA,EAUhB;IAjMH;MA2LM,WAAW;MACX,WAAW;MACX,uBAAuB;MACvB,WAAW;MACX,yBAAyB,EAAA;;AAK/B;EACE,aAAa,EAAA;EADf;IAGI,kBAAkB,EAAA;;AAItB;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB,EAAA;EAEnB;IALF;MAOM,aAAa;MACb,gBAAgB,EAAA,EAUjB;EAGH;IArBF;MAsBI,iBAAiB;MACjB,gBAAgB,EAAA,EA8BnB;EArDD;IA0BI,aAAa;IAEb,gCAAgC;IAEhC,UAAU;IACV,kBAAkB,EAAA;IA/BtB;MAkCM,eAAe;MACf,kCAAkC;MAClC,iBAAiB;MACjB,WAAW;MACX,YAAY;MACZ,iBAAiB,EAAA;MAvCvB;QA0CQ,YAAY,EAAA;MA1CpB;QA6CQ,sBCvPQ,EAAA;ID0MhB;MAiDM,uBAAuB;MACvB,YAAY,EAAA;;AAKlB;EACE,aAAa,EAAA;;AAGf;EACE,yBAAyB,EAAA;;AAG3B;EACE;IACE,yBAAyB,EAAA,EAC1B;;AAGH;EACE,wBAAwB,EAAA;;AEhR1B;EACE,wBAAwB,EAAA;;AAG1B;EACE,uBAAuB,EAAA;;AAGzB;EACE;IACE,UAAU;IACV,4BAA4B,EAAA;EAE9B;IACE,UAAU;IACV,0BAA0B,EAAA,EAAA;;AAI9B;EACE,8CAA8C,EAAA;;AAEhD;EACE,UAAU,EAAA;;AAEZ;EACE,8CAA8C,EAAA","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n  font-family: \"PT Sans\", sans-serif;\r\n  font-size: 18px;\r\n  /* line-height: 28px; */\r\n  letter-spacing: 1px;\r\n}\r\n","nav {\r\n  background-image: linear-gradient(134.46deg, #4279db 0%, #82afff 99.07%);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 60px;\r\n  box-shadow: 0px 0px 20px rgba(15, 26, 79, 0.3);\r\n\r\n  @media only screen and (min-width: 1050px) {\r\n    justify-content: space-around;\r\n    min-height: 100px;\r\n  }\r\n  .logo {\r\n    margin-left: 1.5rem;\r\n    @media only screen and (max-width: 1050px) {\r\n      img {\r\n        height: 64px;\r\n      }\r\n    }\r\n\r\n    @media only screen and (min-width: 1050px) {\r\n      img {\r\n        width: 252px;\r\n        height: 98px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .nav-links {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n\r\n    @media only screen and (max-width: 1050px) {\r\n      position: absolute;\r\n      left: 0;\r\n      top: 60px;\r\n      // height: 80vh;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      width: 50%;\r\n      //   transform: translateX(-100%);\r\n      transition: transform 0.3s ease-in;\r\n    }\r\n\r\n    @media only screen and (min-width: 1050px) {\r\n      width: 80%;\r\n      min-height: 100%;\r\n    }\r\n\r\n    li {\r\n      list-style: none;\r\n      display: flex;\r\n      align-items: center;\r\n\r\n      @media only screen and (max-width: 1050px) {\r\n        opacity: 0;\r\n        width: 100%;\r\n        border-bottom: 1px solid #e9eef2;\r\n        padding: 1rem 0;\r\n\r\n        .animate {\r\n          animation: navLinkFade 0.3s ease forwards;\r\n        }\r\n\r\n        &:first-child {\r\n          margin-top: 2rem;\r\n        }\r\n        &:nth-last-child(3) {\r\n          border-bottom: none;\r\n        }\r\n\r\n        &:last-child {\r\n          border-bottom: none;\r\n        }\r\n\r\n        .accent {\r\n          color: #38e5c4;\r\n        }\r\n\r\n        a {\r\n          margin-left: 5rem;\r\n          color: #200d59;\r\n        }\r\n        .arrow-wrapper {\r\n          position: relative;\r\n          img {\r\n            position: absolute;\r\n            left: 20px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    @media only screen and (min-width: 1050px) {\r\n      .nav-link {\r\n        &:hover {\r\n          cursor: pointer;\r\n          border-top: 1px solid white;\r\n        }\r\n      }\r\n    }\r\n    a {\r\n      text-decoration: none;\r\n      @media only screen and (min-width: 1050px) {\r\n        color: white;\r\n      }\r\n    }\r\n    .arrow-wrapper {\r\n      display: flex;\r\n      .mobile-arrow {\r\n        @media only screen and (min-width: 1050px) {\r\n          display: none;\r\n        }\r\n\r\n        display: flex;\r\n        align-items: center;\r\n      }\r\n      .submenu {\r\n        display: none;\r\n        @media only screen and (min-width: 1050px) {\r\n          position: absolute;\r\n          top: 140px;\r\n          width: 25%;\r\n          flex-direction: column;\r\n        }\r\n        .submenu-item {\r\n        }\r\n      }\r\n    }\r\n    .search {\r\n      display: none;\r\n      @media only screen and (min-width: 1050px) {\r\n        display: flex;\r\n      }\r\n    }\r\n\r\n    .btn {\r\n      @media only screen and (max-width: 1050px) {\r\n        border-bottom: none;\r\n\r\n        border: 1px solid $accent;\r\n        width: 85vw;\r\n        display: flex;\r\n        justify-content: center;\r\n        color: #38e5c4 !important;\r\n        margin: auto !important;\r\n        padding: 1rem;\r\n        &:hover {\r\n          cursor: pointer;\r\n        }\r\n        a {\r\n          text-align: center;\r\n\r\n          // margin: unset;\r\n          // padding: 0 auto;\r\n        }\r\n      }\r\n\r\n      @media only screen and (min-width: 1050px) {\r\n        border: 1px solid white;\r\n        padding: 0.75rem 2.5rem;\r\n      }\r\n    }\r\n  }\r\n\r\n  .mobile-search-burger-wrapper {\r\n    @media only screen and (min-width: 1050px) {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  .mobile-search {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .burger {\r\n    cursor: pointer;\r\n    margin-right: 1rem;\r\n\r\n    @media only screen and (min-width: 1050px) {\r\n      display: none;\r\n    }\r\n\r\n    div {\r\n      width: 25px;\r\n      height: 3px;\r\n      background-color: white;\r\n      margin: 5px;\r\n      transition: all 0.3s ease;\r\n    }\r\n  }\r\n}\r\n\r\n.mobile-search-burger-wrapper {\r\n  display: flex;\r\n  img {\r\n    margin-right: 1rem;\r\n  }\r\n}\r\n\r\n.search-bar {\r\n  display: none;\r\n  justify-content: left;\r\n  align-items: center;\r\n\r\n  @media only screen and (max-width: 1050px) {\r\n    .search-bar {\r\n      display: none;\r\n      margin-top: 75px;\r\n      .input-wrapper {\r\n        // width: 70%;\r\n\r\n        input {\r\n          // width: 100%;\r\n        }\r\n        button {\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  @media only screen and (min-width: 1050px) {\r\n    margin-top: 110px;\r\n    margin-left: 20%;\r\n  }\r\n  .input-wrapper {\r\n    display: flex;\r\n\r\n    border-bottom: 1px solid #e9eef2;\r\n    // border-bottom: 1px solid red;\r\n    width: 70%;\r\n    position: relative;\r\n\r\n    input {\r\n      font-size: 18px;\r\n      font-family: \"PT Sans\", sans-serif;\r\n      font-weight: bold;\r\n      width: 100%;\r\n      border: none;\r\n      line-height: 3rem;\r\n\r\n      &::placeholder {\r\n        color: black;\r\n      }\r\n      &:focus {\r\n        outline-color: $accent;\r\n      }\r\n    }\r\n    button {\r\n      background-color: white;\r\n      border: none;\r\n    }\r\n  }\r\n}\r\n\r\n.show-flex {\r\n  display: flex;\r\n}\r\n\r\n.show-block {\r\n  display: block !important;\r\n}\r\n\r\n@media only screen and (max-width: 1050px) {\r\n  .show {\r\n    display: block !important;\r\n  }\r\n}\r\n\r\n.hide {\r\n  display: none !important;\r\n}\r\n","$primary: rgb(41, 41, 100);\r\n$accent: #38e5c4;\r\n\r\n$bg: #f2f2f2;\r\n","// Animations\r\n.nav-active {\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-remove {\r\n  transform: scaleX(-100);\r\n}\r\n\r\n@keyframes navLinkFade {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateX(-50px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateX(0px);\r\n  }\r\n}\r\n\r\n.toggle .line1 {\r\n  transform: rotate(-45deg) translate(-5px, 6px);\r\n}\r\n.toggle .line2 {\r\n  opacity: 0;\r\n}\r\n.toggle .line3 {\r\n  transform: rotate(45deg) translate(-5px, -6px);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js/mobile-dropdown.js":
/*!***********************************!*\
  !*** ./src/js/mobile-dropdown.js ***!
  \***********************************/
/***/ (() => {

const mobileDropdown = () => {
  const accent = document.querySelector(".accent");
  const dropDown = document.querySelector(".submenu");
  const searchBar = document.querySelector(".search-bar");

  accent.addEventListener("click", () => {
    dropDown.classList.toggle("show-block");
    searchBar.classList.remove("show-flex");
    console.log("mobile dropdown");
  });
};

mobileDropdown();


/***/ }),

/***/ "./src/js/mobile-nav.js":
/*!******************************!*\
  !*** ./src/js/mobile-nav.js ***!
  \******************************/
/***/ (() => {

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const mobileSearch = document.querySelector(".mobile-search");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate nav links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    //Burger animation
    burger.classList.toggle("toggle");
  });

  // search bar burger logic
  mobileSearch.addEventListener("click", () => {
    if (nav.classList.contains("nav-active")) {
      navLinks.forEach((link, index) => {
        link.style.animation = "";
      });
      nav.classList.remove("nav-active");
      burger.classList.toggle("toggle");
    }
  });
};

navSlide();


/***/ }),

/***/ "./src/js/mobile-search-bar.js":
/*!*************************************!*\
  !*** ./src/js/mobile-search-bar.js ***!
  \*************************************/
/***/ (() => {

const mobileSearchBarDisplay = () => {
  const mobileSearch = document.querySelector(".mobile-search");
  const searchBar = document.querySelector(".search-bar");
  const navLinks = document.querySelector(".nav-links");

  mobileSearch.addEventListener("click", () => {
    if (navLinks.classList.contains("nav-active")) {
      // navLinks.classList.toggle("nav-active");
      // navLinks.classList.toggle("nav-remove");

    }

    searchBar.classList.toggle("show-flex");
    // navLinks.classList.toggle("hide");
  });
};

mobileSearchBarDisplay();


/***/ }),

/***/ "./src/js/search-bar.js":
/*!******************************!*\
  !*** ./src/js/search-bar.js ***!
  \******************************/
/***/ (() => {

const searchBarDisplay = () => {
  const searchIcon = document.querySelector(".search");
  const searchBar = document.querySelector(".search-bar");
  const subMenu = document.querySelector(".submenu");

  searchIcon.addEventListener("click", () => {
    searchBar.classList.toggle("show-flex");
    subMenu.classList.remove("show-block");
    // console.log("searchbar");
  });
};

searchBarDisplay();


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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_mobile_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/mobile-nav.js */ "./src/js/mobile-nav.js");
/* harmony import */ var _js_mobile_nav_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_nav_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_mobile_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mobile-dropdown */ "./src/js/mobile-dropdown.js");
/* harmony import */ var _js_mobile_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_search_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/search-bar */ "./src/js/search-bar.js");
/* harmony import */ var _js_search_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_search_bar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_mobile_search_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/mobile-search-bar */ "./src/js/mobile-search-bar.js");
/* harmony import */ var _js_mobile_search_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_search_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");







})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map