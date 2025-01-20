/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/LogInModal */ "flarum/forum/components/LogInModal");
/* harmony import */ var flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4__);
/*
 * This file is part of justoverclock/custom-header.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */






flarum_app__WEBPACK_IMPORTED_MODULE_1___default().initializers.add('justoverclock/custom-header', function () {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function () {
    var headerImage = document.getElementById('StreamsHero-content');
    var bgImageUrl = flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('justoverclock-custom-header.headerBackgroundImage') || flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + '/assets/extensions/justoverclock-custom-header/bg.jpg';
    headerImage.style.backgroundImage = "url('" + bgImageUrl + "')";
    headerImage.setAttribute('background-size', 'cover');
  });
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'view', function (vdom) {
    if (vdom.children && vdom.children.splice) {
      var user = (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user;
      var bg = flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + '/assets/extensions/justoverclock-custom-header/bg.jpg';
      var LinkButtonOne = flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('LinkButtonOne');
      var LinkButtonTwo = flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('LinkButtonTwo');

      // definiamo il tasto di iscrizione
      var HeaderButtons = {
        view: function view(vnode) {
          if (!user) return m('a', {
            className: 'Button StreamsSignUp js-signup',
            onclick: function onclick() {
              return flarum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show((flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default()));
            },
            'data-component': 'hero',
            'data-element': 'buttons'
          }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('custom-header.forum.signup'));
        }
      };
      // definiamo il tasto login
      var LoginButton = {
        view: function view(vnode) {
          if (!user) return m('a', {
            className: 'Button StreamsLogin js-login',
            onclick: function onclick() {
              return flarum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show((flarum_forum_components_LogInModal__WEBPACK_IMPORTED_MODULE_4___default()));
            }
          }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('custom-header.forum.login'));
        }
      };
      // inizio icone social
      var twitterIcon = {
        view: function view(vnode) {
          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('twitterIcon') === '') {
            return;
          } else {
            return m('i', {
              className: 'socialic fab fa-twitter'
            });
          }
        }
      };
      var facebookIcon = {
        view: function view(vnode) {
          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('facebookIcon') === '') {
            return;
          } else {
            return m('i', {
              className: 'socialic fab fa-facebook-square'
            });
          }
        }
      };
      var youtubeIcon = {
        view: function view(vnode) {
          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('youtubeIcon') === '') {
            return;
          } else {
            return m('i', {
              className: 'socialic fab fa-youtube'
            });
          }
        }
      };
      var gitHubIcon = {
        view: function view(vnode) {
          if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('githubIcon') === '') {
            return;
          } else {
            return m('i', {
              className: 'socialic fab fa-github-square'
            });
          }
        }
      };
      //codice per l'header
      var insert = m('div', {
        className: 'StreamsHero-image'
      }, m('div', {
        className: 'StreamsHero-content',
        id: 'StreamsHero-content'
      }, [m('div', {
        className: 'StreamsHero-buttonContainer'
      }, [m('a', {
        className: 'js-nav',
        'data-element': 'logo',
        target: '_blank'
      }, [m('a', {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('twitterIcon'),
        title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('custom-header.forum.twitter')
      }, m(twitterIcon)), m('a', {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('facebookIcon'),
        title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('custom-header.forum.facebook')
      }, m(facebookIcon)), m('a', {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('youtubeIcon'),
        title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('custom-header.forum.youtube')
      }, m(youtubeIcon)), m('a', {
        href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('githubIcon'),
        title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('custom-header.forum.github')
      }, m(gitHubIcon))]), m(HeaderButtons), m(LoginButton)]), m('h2', {
        className: 'StreamsHero-header'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('headerTitle')), m('p', {
        className: 'StreamsHero-blurb'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('headerTagline')), m('a', {
        href: LinkButtonOne,
        className: 'headerButtons'
      }, m('span', {
        className: 'buttontext'
      }), flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('buttonText') || 'Button 1'), m('a', {
        href: LinkButtonTwo,
        className: 'headerButtons'
      }, m('span', {
        className: 'buttontext'
      }), flarum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('button2Text') || 'Button 2')]));
      vdom.children.splice(0, 0, insert);
    }
  });
});
(0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'oncreate', function (vnode) {
  var welcomeHero = document.getElementsByClassName('Hero WelcomeHero');
  // nascondiamo la welcome hero nella pagina principale
  if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default().current.matches((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default()))) {
    for (var i = 0; i < welcomeHero.length; i++) {
      welcomeHero[i].style.display = 'none';
    }
  }
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/LogInModal":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/LogInModal']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/LogInModal'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/SignUpModal'];

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
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map