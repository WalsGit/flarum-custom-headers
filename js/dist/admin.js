/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/Settings.js":
/*!******************************************!*\
  !*** ./src/admin/components/Settings.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/components/UploadImageButton */ "flarum/admin/components/UploadImageButton");
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);





var Settings = /*#__PURE__*/function (_ExtensionPage) {
  function Settings() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Settings, _ExtensionPage);
  var _proto = Settings.prototype;
  _proto.content = function content() {
    return m("div", {
      className: "DiscussionCardsSettings"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "DiscussionCardsSettings--content"
    }, m("div", {
      className: "Section"
    }, m("div", {
      className: "DC-DefaultImageSettings"
    }, m("h4", null, "titre"), m("p", {
      className: "helpText"
    }, "help"), m((flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_3___default()), {
      name: "walsgit_discussion_cards_default_image",
      "class": "DC-UploadImageBtn"
    }), this.buildSettingComponent({
      setting: 'justoverclock-custom-header.useRemotImage',
      name: 'justoverclock-custom-header.useRemoteImage',
      type: 'switch',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('custom-header.admin.useRemoteImage'),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('custom-header.admin.useRemoteImage-help')
    }), this.buildSettingComponent({
      setting: 'justoverclock-custom-header.headerBackgroundImage',
      name: 'justoverclock-custom-header.headerBackgroundImage',
      type: 'url',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('custom-header.admin.headerBackgroundImage'),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('custom-header.admin.headerBackgroundImage-help')
    }))))));
  };
  return Settings;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Settings */ "./src/admin/components/Settings.js");
/*
 * This file is part of walsgit/custom-headers.
 *
 * Copyright (c) 2021 Marco Colia. https://flarum.it
 * Copyright (c) 2025 Wa!id.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */



flarum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('walsgit/custom-headers', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('walsgit-custom-headers').registerPage(_components_Settings__WEBPACK_IMPORTED_MODULE_1__["default"]).registerSetting({
    setting: 'walsgit-custom-headers.headerBackgroundImage',
    name: 'walsgit-custom-headers.headerBackgroundImage',
    type: 'url',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.headerBackgroundImage'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.headerBackgroundImage-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.headerTitle',
    name: 'headerTitle',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.headerTitle'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.headerTitle-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.headerTagline',
    name: 'headerTagline',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.headerTagline'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.headerTagline-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.twitterIcon',
    name: 'twitterIcon',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.twitterIcon'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.twitterIcon-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.facebookIcon',
    name: 'facebookIcon',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.facebookIcon'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.facebookIcon-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.youtubeIcon',
    name: 'youtubeIcon',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.youtubeIcon'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.youtubeIcon-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.githubIcon',
    name: 'githubIcon',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.githubIcon'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.githubIcon-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.buttonText',
    name: 'buttonText',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.button-text'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.button-text-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.LinkButtonOne',
    name: 'LinkButtonOne',
    type: 'URL',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.link-button-one'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.link-button-one-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.button2Text',
    name: 'button2Text',
    type: 'text',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.button2-text'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.button2-text-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.LinkButtonTwo',
    name: 'LinkButtonTwo',
    type: 'URL',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.link-button-two'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.link-button-two-help')
  }).registerSetting({
    setting: 'walsgit-custom-headers.showOnRoutes',
    name: 'showOnRoutes',
    type: 'test',
    label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.show-on-routes'),
    help: flarum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('custom-headers.admin.show-on-routes-help')
  });
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/UploadImageButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/UploadImageButton']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/UploadImageButton'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map