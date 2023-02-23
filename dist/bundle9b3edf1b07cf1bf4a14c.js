/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = {
  peopleButton: document.querySelector('.js-people-btn'),
  filmsButton: document.querySelector('.js-films-btn'),
  starshipsButton: document.querySelector('.js-starships-btn'),
  planetsButton: document.querySelector('.js-planets-btn'),
  nav: document.querySelector('.nav'),
  navList: document.querySelector('.nav__list'),
  closeSectionButton: document.querySelector('.js-close-section'),
  loader: document.querySelector('.js-loader'),
  closeSectionActiveClass: 'close-section--active',
  sectionActiveClass: 'section--active',
  navActiveClass: 'nav--active',
  init: function init() {
    this.filmsButtonEventListener();
    this.peopleButtonEventListener();
    this.starshipsButtonEventListener();
    this.planetsButtonEventListener();
    this.closeSectionEventListener();
  },
  filmsButtonEventListener: function filmsButtonEventListener() {
    this.filmsButton.addEventListener('click', this.loadFilms);
  },
  peopleButtonEventListener: function peopleButtonEventListener() {
    this.peopleButton.addEventListener('click', this.loadPeople);
  },
  starshipsButtonEventListener: function starshipsButtonEventListener() {
    this.starshipsButton.addEventListener('click', this.loadStarships);
  },
  planetsButtonEventListener: function planetsButtonEventListener() {
    this.planetsButton.addEventListener('click', this.loadPlanets);
  },
  cleanContainerHtml: function cleanContainerHtml() {
    var section = document.querySelector('.section');
    var sectionContent = document.querySelector('.section__content');
    sectionContent.innerHTML = '';
    section.classList.add(this.sectionActiveClass);
  },
  setTitle: function setTitle(title) {
    var titleEl = document.querySelector('.js-section-title');
    titleEl.textContent = title;
  },
  removeNavList: function removeNavList() {
    this.nav.classList.remove(this.navActiveClass);
    this.closeSectionButton.classList.add(this.closeSectionActiveClass);
  },
  closeSectionEventListener: function closeSectionEventListener() {
    var _this = this;
    this.closeSectionButton.addEventListener('click', function () {
      var section = document.querySelector('.section');
      _this.closeSectionButton.classList.remove(_this.closeSectionActiveClass);
      section.classList.remove(_this.sectionActiveClass);
      setTimeout(function () {
        _this.nav.classList.add(_this.navActiveClass);
        data.setTitle('Do. Or do not. There is no try.');
      }, 200);
    });
  },
  loadFilms: function loadFilms() {
    data.removeNavList();
    data.cleanContainerHtml();
    data.setTitle('Films');
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: 'https://swapi.dev/api/films/',
      dataType: 'json',
      beforeSend: function beforeSend() {
        $('.js-loader').show();
      },
      success: function success(data) {
        setTimeout(function () {
          $('.js-loader').hide();
        }, 500);
        var items = data.results;
        items.map(function (element) {
          var container = document.querySelector('.section__content');
          var div = document.createElement('div');
          div.setAttribute('class', 'item');
          div.innerHTML = "\n                            <span class=\"desc desc--uppercase\">".concat(element.title, "</span>\n                            <span class=\"desc desc--md\">Director: ").concat(element.director, "</span>\n                            <span class=\"desc desc--sm\">Release date: ").concat(element.release_date, "</span>\n                        ");
          setTimeout(function () {
            container.appendChild(div);
          }, 500);
        });
      }
    });
  },
  loadPeople: function loadPeople() {
    data.removeNavList();
    data.cleanContainerHtml();
    data.setTitle('People');
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: 'https://swapi.dev/api/people/',
      dataType: 'json',
      beforeSend: function beforeSend() {
        $('.js-loader').show();
      },
      success: function success(data) {
        setTimeout(function () {
          $('.js-loader').hide();
        }, 500);
        var items = data.results;
        items.map(function (element) {
          var container = document.querySelector('.section__content');
          var div = document.createElement('div');
          div.setAttribute('class', 'item');
          div.innerHTML = "\n                            <span class=\"desc desc--uppercase\">".concat(element.name, "</span>\n                            <span class=\"desc desc--md\">Gender: ").concat(element.gender, "</span>\n                            <span class=\"desc desc--sm\">Birth year: ").concat(element.birth_year, "</span>\n                        ");
          setTimeout(function () {
            container.appendChild(div);
          }, 500);
        });
      }
    });
  },
  loadStarships: function loadStarships() {
    data.removeNavList();
    data.cleanContainerHtml();
    data.setTitle('Starships');
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: 'https://swapi.dev/api/starships/',
      dataType: 'json',
      beforeSend: function beforeSend() {
        $('.js-loader').show();
      },
      success: function success(data) {
        setTimeout(function () {
          $('.js-loader').hide();
        }, 500);
        var items = data.results;
        items.map(function (element) {
          var container = document.querySelector('.section__content');
          var div = document.createElement('div');
          div.setAttribute('class', 'item');
          div.innerHTML = "\n                            <span class=\"desc desc--uppercase\">".concat(element.name, "</span>\n                            <span class=\"desc desc--md\">Model: ").concat(element.model, "</span>\n                            <span class=\"desc desc--sm\">Passengers: ").concat(element.passengers, "</span>\n                            <span class=\"desc desc--xs\">Manufacturer: ").concat(element.manufacturer, "</span>\n                        ");
          setTimeout(function () {
            container.appendChild(div);
          }, 500);
        });
      }
    });
  },
  loadPlanets: function loadPlanets() {
    data.removeNavList();
    data.cleanContainerHtml();
    data.setTitle('Planets');
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: 'https://swapi.dev/api/planets/',
      dataType: 'json',
      beforeSend: function beforeSend() {
        $('.js-loader').show();
      },
      success: function success(data) {
        setTimeout(function () {
          $('.js-loader').hide();
        }, 500);
        var items = data.results;
        items.map(function (element) {
          var container = document.querySelector('.section__content');
          var div = document.createElement('div');
          div.setAttribute('class', 'item');
          div.innerHTML = "\n                            <span class=\"desc desc--uppercase\">".concat(element.name, "</span>\n                            <span class=\"desc desc--md\">Climate: ").concat(element.climate, "</span>\n                            <span class=\"desc desc--sm\">Population: ").concat(element.population, "</span>\n                            <span class=\"desc desc--xs\">Terrain: ").concat(element.terrain, "</span>\n                        ");
          setTimeout(function () {
            container.appendChild(div);
          }, 500);
        });
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./src/particles.js":
/*!**************************!*\
  !*** ./src/particles.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var particles = {
  init: function init() {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 190,
          "density": {
            "enable": true,
            "value_area": 789.1476416322727
          }
        },
        "color": {
          "value": "#8ca76e"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.8,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "bounce",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
    var count_particles, stats, _update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    _update = function update() {
      stats.begin();
      stats.end();
      requestAnimationFrame(_update);
    };
    requestAnimationFrame(_update);
    ;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (particles);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Josefin Sans\", sans-serif;\n  scroll-behavior: smooth;\n  background-color: #000;\n}\n\nul,\nol {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.has-cover {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.wrap {\n  max-width: 1320px;\n  padding: 0 20px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.wrap--small {\n  max-width: 800px;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n#particles-js {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hidden {\n  display: none;\n}\n\ncanvas {\n  display: block;\n  position: fixed;\n  z-index: -10;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\ndiv:not(#particles-js) > canvas {\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.main {\n  position: relative;\n  min-height: 300px;\n}\n\na,\nbutton {\n  font-family: \"Josefin Sans\", sans-serif;\n}\n\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n}\n\n.hamburger:hover {\n  opacity: 0.7;\n}\n\n.hamburger.is-active:hover {\n  opacity: 0.7;\n}\n\n.hamburger.is-active .hamburger-inner,\n.hamburger.is-active .hamburger-inner::before,\n.hamburger.is-active .hamburger-inner::after {\n  background-color: #fff;\n}\n\n.hamburger-box {\n  width: 40px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n}\n\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 40px;\n  height: 4px;\n  background-color: #fff;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n}\n\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block;\n}\n\n.hamburger-inner::before {\n  top: -10px;\n}\n\n.hamburger-inner::after {\n  bottom: -10px;\n}\n\n.hamburger--emphatic {\n  overflow: hidden;\n}\n\n.hamburger--emphatic .hamburger-inner {\n  transition: background-color 0.125s 0.175s ease-in;\n}\n\n.hamburger--emphatic .hamburger-inner::before {\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n}\n\n.hamburger--emphatic .hamburger-inner::after {\n  top: 10px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n}\n\n.hamburger--emphatic.is-active .hamburger-inner {\n  transition-delay: 0s;\n  transition-timing-function: ease-out;\n  background-color: transparent !important;\n}\n\n.hamburger--emphatic.is-active .hamburger-inner::before {\n  left: -80px;\n  top: -80px;\n  transform: translate3d(80px, 80px, 0) rotate(45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.hamburger--emphatic.is-active .hamburger-inner::after {\n  right: -80px;\n  top: -80px;\n  transform: translate3d(-80px, 80px, 0) rotate(-45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.header {\n  width: 100%;\n  padding: 30px 0;\n}\n\n.header__container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header__logo {\n  width: 100px;\n}\n\n.nav {\n  position: absolute;\n  top: 300px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 25;\n  transition: 0.5s ease-in-out;\n  transform: rotateX(50deg) translateY(-1550px) scale(0);\n}\n\n.nav--active {\n  transform: none;\n  opacity: 1;\n}\n.nav--active .close-section {\n  display: none;\n}\n.nav--active .nav__list {\n  display: flex;\n  transform: none;\n  opacity: 1;\n}\n\n.nav__list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.nav__item {\n  padding: 0 20px;\n}\n@media (max-width: 992px) {\n  .nav__item {\n    padding: 15px 20px;\n  }\n}\n\n.nav__btn {\n  background-color: transparent;\n  color: transparent;\n  margin: 0 25px;\n  font-size: 120px;\n  text-transform: lowercase;\n  cursor: pointer;\n  transition: 250ms ease-in-out;\n  position: relative;\n  padding: 10px;\n  position: relative;\n  border: none;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: rgb(236, 213, 82);\n}\n.nav__btn:hover {\n  color: rgb(236, 213, 82);\n}\n@media (max-width: 992px) {\n  .nav__btn {\n    font-size: 50px;\n    width: 100%;\n    margin: 0;\n  }\n}\n\n.close-section {\n  position: relative;\n  display: block;\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  opacity: 0;\n  transition: 250ms ease-in-out;\n}\n\n.close-section--active {\n  opacity: 1;\n}\n\n.close-section__inner {\n  background-color: rgb(236, 213, 82);\n  width: 100%;\n  border-radius: 10px;\n  height: 3px;\n  display: block;\n  transform: rotate(45deg);\n  position: relative;\n}\n.close-section__inner::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background-color: rgb(236, 213, 82);\n  transform: rotate(90deg);\n}\n\n@keyframes crawl {\n  0% {\n    top: -100px;\n    transform: rotateX(20deg) translateZ(0);\n  }\n  100% {\n    top: -6000px;\n    transform: rotateX(25deg) translateZ(-2500px);\n  }\n}\n.section {\n  width: 100%;\n  position: relative;\n  z-index: 20;\n  transition: 250ms ease-in-out;\n}\n\n.section--active .section__content {\n  opacity: 1;\n}\n\n.section__content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  opacity: 0;\n  transition: 250ms ease-in-out;\n}\n\n.section__title {\n  color: white;\n  text-align: center;\n  margin: 20px 0 30px;\n  font-size: 35px;\n}\n\n.item {\n  background-color: rgb(23, 23, 23);\n  flex: 1 1 calc(25% - 20px);\n  max-width: calc(25% - 20px);\n  padding: 20px;\n  border-top: 3px solid rgb(236, 213, 82);\n  margin-bottom: 50px;\n  box-shadow: 0px 3px 17px -7px rgba(236, 213, 82, 0.68);\n  transition: 250ms ease-in-out;\n}\n.item span {\n  display: block;\n}\n@media (max-width: 992px) {\n  .item {\n    flex: 1 1 100%;\n    max-width: 100%;\n  }\n}\n\n.desc {\n  color: #fff;\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.desc--uppercase {\n  text-transform: uppercase;\n}\n\n.desc--md {\n  color: #fff;\n  padding: 5px 0;\n}\n\n.desc--sm {\n  color: rgb(236, 213, 82);\n  margin-top: 10px;\n}\n\n.desc--xs {\n  color: rgb(236, 213, 82);\n  margin-top: 10px;\n  font-size: 10px;\n}\n\n.loader {\n  font-size: 100px;\n  color: #fff;\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.loader__text {\n  font-size: 35px;\n  display: block;\n  margin-bottom: 30px;\n  text-transform: lowercase;\n  font-weight: 500;\n  color: rgb(236, 213, 82);\n  text-align: center;\n}\n\n.loader__img {\n  width: 200px;\n  height: 151px;\n}\n\n.dot {\n  display: inline;\n  position: relative;\n  animation: showHideDot 1.5s ease-in-out infinite;\n}\n.dot.one {\n  animation-delay: 0.2s;\n}\n.dot.two {\n  animation-delay: 0.4s;\n}\n.dot.three {\n  animation-delay: 0.6s;\n}\n\n@keyframes showHideDot {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.footer {\n  width: 100%;\n  padding: 20px 0;\n  color: #fff;\n  border-top: 1px solid rgb(236, 213, 82);\n  background-color: #000;\n  display: none;\n}\n\n.footer__content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__link {\n  color: rgb(236, 213, 82);\n  transition: 250ms ease-in-out;\n}\n.footer__link:hover {\n  opacity: 0.6;\n}", "",{"version":3,"sources":["webpack://./src/styles/assets/_layout.scss","webpack://./src/styles/main.scss","webpack://./src/styles/assets/_variables.scss","webpack://./src/styles/assets/_mixins.scss","webpack://./src/styles/components/_buttons.scss","webpack://./src/styles/plugins/_hamburger.scss","webpack://./src/styles/layout/_header.scss","webpack://./src/styles/layout/_section.scss","webpack://./src/styles/layout/_footer.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;ACCJ;;ADCA;EACI,uCELW;EFMX,uBAAA;EACA,sBEHI;ADKR;;ADAA;;EAEI,qBAAA;ACGJ;;ADDA;EACI,qBAAA;ACIJ;;ADFA;EACI,4BAAA;EACA,sBAAA;EACA,2BAAA;ACKJ;;ADHA;EACI,iBAAA;EACA,eAAA;EACA,cAAA;EACA,WAAA;ACMJ;;ADJA;EACI,gBAAA;ACOJ;;ADLA;EG9BI,SAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;EACA,kBAAA;EACA,UAAA;AFuCJ;;ADbA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;ACgBJ;;ADdA;EACI,aAAA;ACiBJ;;ADfA;EACI,cAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;ACkBJ;;ADdQ;EACI,mBAAA;EACA,oBAAA;ACiBZ;;ADbA;EACI,kBAAA;EACA,iBAAA;ACgBJ;;AGpFA;;EAEI,uCFDW;ADwFf;;AIzFA;;;;;;EAAA;AAOA;EACI,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,oCAAA;EACA,0BAAA;EACA,kCAAA;EACA,aAAA;EACA,cAAA;EACA,oBAAA;EACA,6BAAA;EACA,SAAA;EACA,SAAA;EACA,iBAAA;AJ4FJ;;AI3FI;EACE,YAAA;AJ8FN;;AI7FI;EACE,YAAA;AJgGN;;AI/FI;;;EAGE,sBAAA;AJkGN;;AIhGE;EACE,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;AJmGJ;;AIjGE;EACE,cAAA;EACA,QAAA;EACA,gBAAA;AJoGJ;;AInGI;EACE,WAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,8BAAA;EACA,0BAAA;EACA,gCAAA;AJsGN;;AIrGI;EACE,WAAA;EACA,cAAA;AJwGN;;AIvGI;EACE,UAAA;AJ0GN;;AIzGI;EACE,aAAA;AJ4GN;;AI3GA;EACI,gBAAA;AJ8GJ;;AI7GI;EACE,kDAAA;AJgHN;;AI/GM;EACE,OAAA;EACA,sHAAA;AJkHR;;AIjHM;EACE,SAAA;EACA,QAAA;EACA,uHAAA;AJoHR;;AInHI;EACE,oBAAA;EACA,oCAAA;EACA,wCAAA;AJsHN;;AIrHM;EACE,WAAA;EACA,UAAA;EACA,mDAAA;EACA,sHAAA;AJwHR;;AIvHM;EACE,YAAA;EACA,UAAA;EACA,qDAAA;EACA,uHAAA;AJ0HR;;AK1MA;EACI,WAAA;EACA,eAAA;AL6MJ;;AK3MA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AL8MJ;;AK5MA;EACI,YAAA;AL+MJ;;AK7MA;EACI,kBAAA;EACA,UAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,4BAAA;EACA,sDAAA;ALgNJ;;AK9MA;EACI,eAAA;EACA,UAAA;ALiNJ;AKhNI;EACI,aAAA;ALkNR;AKhNI;EACI,aAAA;EACA,eAAA;EACA,UAAA;ALkNR;;AK/MA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;ALkNJ;;AKhNA;EACI,eAAA;ALmNJ;AKlNI;EAFJ;IAGO,kBAAA;ELqNL;AACF;;AKnNA;EACI,6BAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,yBAAA;EACA,eAAA;EACA,6BJ5CS;EI6CT,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,8BAAA;EACA,4CAAA;ALsNJ;AKrNI;EACI,wBJxDC;AD+QT;AKrNI;EAjBJ;IAkBQ,eAAA;IACA,WAAA;IACA,SAAA;ELwNN;AACF;;AKtNA;EACI,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;EACA,YAAA;EACA,eAAA;EACA,UAAA;EACA,6BJrES;AD8Rb;;AKvNA;EACI,UAAA;AL0NJ;;AKxNA;EACI,mCJ/EK;EIgFL,WAAA;EACA,mBAAA;EACA,WAAA;EACA,cAAA;EACA,wBAAA;EACA,kBAAA;AL2NJ;AK1NI;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,mCJ7FC;EI8FD,wBAAA;AL4NR;;AKzNA;EACI;IACE,WAAA;IACA,uCAAA;EL4NJ;EK1NE;IACE,YAAA;IACA,6CAAA;EL4NJ;AACF;AM3UA;EACI,WAAA;EACA,kBAAA;EACA,WAAA;EACA,6BLMS;ADuUb;;AM1UI;EACI,UAAA;AN6UR;;AM1UA;EACI,aAAA;EACA,eAAA;EACA,6BAAA;EACA,UAAA;EACA,6BLNS;ADmVb;;AM3UA;EACI,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AN8UJ;;AM5UA;EACI,iCLlBQ;EKmBR,0BAAA;EACA,2BAAA;EACA,aAAA;EACA,uCAAA;EACA,mBAAA;EACA,sDAAA;EACA,6BLtBS;ADqWb;AM9UI;EACI,cAAA;ANgVR;AM9UI;EAZJ;IAaQ,cAAA;IACA,eAAA;ENiVN;AACF;;AM/UA;EACI,WLtCI;EKuCJ,eAAA;EACA,mBAAA;ANkVJ;;AMhVA;EACI,yBAAA;ANmVJ;;AMjVA;EACI,WL9CI;EK+CJ,cAAA;ANoVJ;;AMlVA;EACI,wBLhDK;EKiDL,gBAAA;ANqVJ;;AMnVA;EACI,wBLpDK;EKqDL,gBAAA;EACA,eAAA;ANsVJ;;AMpVA;EACI,gBAAA;EACA,WL5DI;EK6DJ,aAAA;EACA,kBAAA;EACA,SAAA;EACA,SAAA;EACA,gCAAA;ANuVJ;;AMrVA;EACI,eAAA;EACA,cAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,wBLvEK;EKwEL,kBAAA;ANwVJ;;AMtVA;EACI,YAAA;EACA,aAAA;ANyVJ;;AMvVA;EACI,eAAA;EACA,kBAAA;EACA,gDAAA;AN0VJ;AMzVI;EAAQ,qBAAA;AN4VZ;AM3VI;EAAQ,qBAAA;AN8VZ;AM7VI;EAAU,qBAAA;ANgWd;;AM9VA;EACI;IAAK,UAAA;ENkWP;EMjWE;IAAM,UAAA;ENoWR;EMnWE;IAAM,UAAA;ENsWR;EMrWE;IAAO,UAAA;ENwWT;AACF;AOzcA;EACI,WAAA;EACA,eAAA;EACA,WNCI;EMAJ,uCAAA;EACA,sBAAA;EACA,aAAA;AP2cJ;;AOzcA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;AP4cJ;;AO1cA;EACI,wBNRK;EMSL,6BNLS;ADkdb;AO5cI;EACI,YAAA;AP8cR","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    font-family: $font-default;\r\n    scroll-behavior: smooth;\r\n    background-color: $black;\r\n}\r\nul,\r\nol {\r\n    list-style-type: none;\r\n}\r\na {\r\n    text-decoration: none;\r\n}\r\n.has-cover {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n.wrap {\r\n    max-width: 1320px;\r\n    padding: 0 20px;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n}\r\n.wrap--small {\r\n    max-width: 800px;\r\n}\r\n.sr-only {\r\n    @include no-display;\r\n}\r\n#particles-js {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n.hidden {\r\n    display: none;\r\n}\r\ncanvas {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: -10;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\ndiv {\r\n    &:not(#particles-js) {\r\n        > canvas {\r\n            width: 0 !important;\r\n            height: 0 !important;\r\n        }\r\n    }\r\n}\r\n.main {\r\n    position: relative;\r\n    min-height: 300px;\r\n}","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Josefin Sans\", sans-serif;\n  scroll-behavior: smooth;\n  background-color: #000;\n}\n\nul,\nol {\n  list-style-type: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.has-cover {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.wrap {\n  max-width: 1320px;\n  padding: 0 20px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.wrap--small {\n  max-width: 800px;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n#particles-js {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.hidden {\n  display: none;\n}\n\ncanvas {\n  display: block;\n  position: fixed;\n  z-index: -10;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\ndiv:not(#particles-js) > canvas {\n  width: 0 !important;\n  height: 0 !important;\n}\n\n.main {\n  position: relative;\n  min-height: 300px;\n}\n\na,\nbutton {\n  font-family: \"Josefin Sans\", sans-serif;\n}\n\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n}\n\n.hamburger:hover {\n  opacity: 0.7;\n}\n\n.hamburger.is-active:hover {\n  opacity: 0.7;\n}\n\n.hamburger.is-active .hamburger-inner,\n.hamburger.is-active .hamburger-inner::before,\n.hamburger.is-active .hamburger-inner::after {\n  background-color: #fff;\n}\n\n.hamburger-box {\n  width: 40px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n}\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n}\n\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 40px;\n  height: 4px;\n  background-color: #fff;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n}\n\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block;\n}\n\n.hamburger-inner::before {\n  top: -10px;\n}\n\n.hamburger-inner::after {\n  bottom: -10px;\n}\n\n.hamburger--emphatic {\n  overflow: hidden;\n}\n\n.hamburger--emphatic .hamburger-inner {\n  transition: background-color 0.125s 0.175s ease-in;\n}\n\n.hamburger--emphatic .hamburger-inner::before {\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n}\n\n.hamburger--emphatic .hamburger-inner::after {\n  top: 10px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n}\n\n.hamburger--emphatic.is-active .hamburger-inner {\n  transition-delay: 0s;\n  transition-timing-function: ease-out;\n  background-color: transparent !important;\n}\n\n.hamburger--emphatic.is-active .hamburger-inner::before {\n  left: -80px;\n  top: -80px;\n  transform: translate3d(80px, 80px, 0) rotate(45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.hamburger--emphatic.is-active .hamburger-inner::after {\n  right: -80px;\n  top: -80px;\n  transform: translate3d(-80px, 80px, 0) rotate(-45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.header {\n  width: 100%;\n  padding: 30px 0;\n}\n\n.header__container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header__logo {\n  width: 100px;\n}\n\n.nav {\n  position: absolute;\n  top: 300px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 25;\n  transition: 0.5s ease-in-out;\n  transform: rotateX(50deg) translateY(-1550px) scale(0);\n}\n\n.nav--active {\n  transform: none;\n  opacity: 1;\n}\n.nav--active .close-section {\n  display: none;\n}\n.nav--active .nav__list {\n  display: flex;\n  transform: none;\n  opacity: 1;\n}\n\n.nav__list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.nav__item {\n  padding: 0 20px;\n}\n@media (max-width: 992px) {\n  .nav__item {\n    padding: 15px 20px;\n  }\n}\n\n.nav__btn {\n  background-color: transparent;\n  color: transparent;\n  margin: 0 25px;\n  font-size: 120px;\n  text-transform: lowercase;\n  cursor: pointer;\n  transition: 250ms ease-in-out;\n  position: relative;\n  padding: 10px;\n  position: relative;\n  border: none;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: rgb(236, 213, 82);\n}\n.nav__btn:hover {\n  color: rgb(236, 213, 82);\n}\n@media (max-width: 992px) {\n  .nav__btn {\n    font-size: 50px;\n    width: 100%;\n    margin: 0;\n  }\n}\n\n.close-section {\n  position: relative;\n  display: block;\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  opacity: 0;\n  transition: 250ms ease-in-out;\n}\n\n.close-section--active {\n  opacity: 1;\n}\n\n.close-section__inner {\n  background-color: rgb(236, 213, 82);\n  width: 100%;\n  border-radius: 10px;\n  height: 3px;\n  display: block;\n  transform: rotate(45deg);\n  position: relative;\n}\n.close-section__inner::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background-color: rgb(236, 213, 82);\n  transform: rotate(90deg);\n}\n\n@keyframes crawl {\n  0% {\n    top: -100px;\n    transform: rotateX(20deg) translateZ(0);\n  }\n  100% {\n    top: -6000px;\n    transform: rotateX(25deg) translateZ(-2500px);\n  }\n}\n.section {\n  width: 100%;\n  position: relative;\n  z-index: 20;\n  transition: 250ms ease-in-out;\n}\n\n.section--active .section__content {\n  opacity: 1;\n}\n\n.section__content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  opacity: 0;\n  transition: 250ms ease-in-out;\n}\n\n.section__title {\n  color: white;\n  text-align: center;\n  margin: 20px 0 30px;\n  font-size: 35px;\n}\n\n.item {\n  background-color: rgb(23, 23, 23);\n  flex: 1 1 calc(25% - 20px);\n  max-width: calc(25% - 20px);\n  padding: 20px;\n  border-top: 3px solid rgb(236, 213, 82);\n  margin-bottom: 50px;\n  box-shadow: 0px 3px 17px -7px rgba(236, 213, 82, 0.68);\n  transition: 250ms ease-in-out;\n}\n.item span {\n  display: block;\n}\n@media (max-width: 992px) {\n  .item {\n    flex: 1 1 100%;\n    max-width: 100%;\n  }\n}\n\n.desc {\n  color: #fff;\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.desc--uppercase {\n  text-transform: uppercase;\n}\n\n.desc--md {\n  color: #fff;\n  padding: 5px 0;\n}\n\n.desc--sm {\n  color: rgb(236, 213, 82);\n  margin-top: 10px;\n}\n\n.desc--xs {\n  color: rgb(236, 213, 82);\n  margin-top: 10px;\n  font-size: 10px;\n}\n\n.loader {\n  font-size: 100px;\n  color: #fff;\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.loader__text {\n  font-size: 35px;\n  display: block;\n  margin-bottom: 30px;\n  text-transform: lowercase;\n  font-weight: 500;\n  color: rgb(236, 213, 82);\n  text-align: center;\n}\n\n.loader__img {\n  width: 200px;\n  height: 151px;\n}\n\n.dot {\n  display: inline;\n  position: relative;\n  animation: showHideDot 1.5s ease-in-out infinite;\n}\n.dot.one {\n  animation-delay: 0.2s;\n}\n.dot.two {\n  animation-delay: 0.4s;\n}\n.dot.three {\n  animation-delay: 0.6s;\n}\n\n@keyframes showHideDot {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  60% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.footer {\n  width: 100%;\n  padding: 20px 0;\n  color: #fff;\n  border-top: 1px solid rgb(236, 213, 82);\n  background-color: #000;\n  display: none;\n}\n\n.footer__content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__link {\n  color: rgb(236, 213, 82);\n  transition: 250ms ease-in-out;\n}\n.footer__link:hover {\n  opacity: 0.6;\n}","// fonts\r\n$font-default: 'Josefin Sans', sans-serif;\r\n\r\n// colors\r\n$white: #fff;\r\n$black: #000;\r\n$yellow: rgb(236, 213, 82);\r\n$dark-grey: rgb(23, 23, 23);\r\n\r\n// transition\r\n$transition: 250ms ease-in-out;","@mixin no-display {\r\n    border: 0;\r\n    clip: rect(0, 0, 0, 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n}\r\n\r\n@mixin bg-wrapper {\r\n    position: relative;\r\n}\r\n\r\n@mixin bg-image {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}","a,\r\nbutton {\r\n    font-family: $font-default;\r\n}","/*!\r\n * Hamburgers\r\n * @description Tasty CSS-animated hamburgers\r\n * @author Jonathan Suh @jonsuh\r\n * @site https://jonsuh.com/hamburgers\r\n * @link https://github.com/jonsuh/hamburgers\r\n */\r\n.hamburger {\r\n    padding: 15px 15px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    transition-property: opacity, filter;\r\n    transition-duration: 0.15s;\r\n    transition-timing-function: linear;\r\n    font: inherit;\r\n    color: inherit;\r\n    text-transform: none;\r\n    background-color: transparent;\r\n    border: 0;\r\n    margin: 0;\r\n    overflow: visible; }\r\n    .hamburger:hover {\r\n      opacity: 0.7; }\r\n    .hamburger.is-active:hover {\r\n      opacity: 0.7; }\r\n    .hamburger.is-active .hamburger-inner,\r\n    .hamburger.is-active .hamburger-inner::before,\r\n    .hamburger.is-active .hamburger-inner::after {\r\n      background-color: #fff; }\r\n  \r\n  .hamburger-box {\r\n    width: 40px;\r\n    height: 24px;\r\n    display: inline-block;\r\n    position: relative; }\r\n  \r\n  .hamburger-inner {\r\n    display: block;\r\n    top: 50%;\r\n    margin-top: -2px; }\r\n    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\r\n      width: 40px;\r\n      height: 4px;\r\n      background-color: #fff;\r\n      border-radius: 4px;\r\n      position: absolute;\r\n      transition-property: transform;\r\n      transition-duration: 0.15s;\r\n      transition-timing-function: ease; }\r\n    .hamburger-inner::before, .hamburger-inner::after {\r\n      content: \"\";\r\n      display: block; }\r\n    .hamburger-inner::before {\r\n      top: -10px; }\r\n    .hamburger-inner::after {\r\n      bottom: -10px; }\r\n.hamburger--emphatic {\r\n    overflow: hidden; }\r\n    .hamburger--emphatic .hamburger-inner {\r\n      transition: background-color 0.125s 0.175s ease-in; }\r\n      .hamburger--emphatic .hamburger-inner::before {\r\n        left: 0;\r\n        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }\r\n      .hamburger--emphatic .hamburger-inner::after {\r\n        top: 10px;\r\n        right: 0;\r\n        transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }\r\n    .hamburger--emphatic.is-active .hamburger-inner {\r\n      transition-delay: 0s;\r\n      transition-timing-function: ease-out;\r\n      background-color: transparent !important; }\r\n      .hamburger--emphatic.is-active .hamburger-inner::before {\r\n        left: -80px;\r\n        top: -80px;\r\n        transform: translate3d(80px, 80px, 0) rotate(45deg);\r\n        transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\r\n      .hamburger--emphatic.is-active .hamburger-inner::after {\r\n        right: -80px;\r\n        top: -80px;\r\n        transform: translate3d(-80px, 80px, 0) rotate(-45deg);\r\n        transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }",".header {\r\n    width: 100%;\r\n    padding: 30px 0;\r\n}\r\n.header__container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.header__logo {\r\n    width: 100px;\r\n}\r\n.nav {\r\n    position: absolute;\r\n    top: 300px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 25;\r\n    transition: 0.5s ease-in-out;\r\n    transform: rotateX(50deg) translateY(-1550px) scale(0);\r\n}\r\n.nav--active {\r\n    transform: none;\r\n    opacity: 1;\r\n    .close-section {\r\n        display: none;\r\n    }\r\n    .nav__list {\r\n        display: flex;\r\n        transform: none;\r\n        opacity: 1;\r\n    }\r\n}\r\n.nav__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n.nav__item {\r\n    padding: 0 20px;\r\n    @media (max-width: 992px) {\r\n       padding: 15px 20px;\r\n    }\r\n}\r\n.nav__btn {\r\n    background-color: transparent;\r\n    color: transparent;\r\n    margin: 0 25px;\r\n    font-size: 120px;\r\n    text-transform: lowercase;\r\n    cursor: pointer;\r\n    transition: $transition;\r\n    position: relative;\r\n    padding: 10px;\r\n    position: relative;\r\n    border: none;\r\n    -webkit-text-stroke-width: 2px;\r\n    -webkit-text-stroke-color: rgb(236, 213, 82);\r\n    &:hover {\r\n        color: $yellow;\r\n    }\r\n    @media (max-width: 992px) {\r\n        font-size: 50px;\r\n        width: 100%;\r\n        margin: 0;\r\n     }\r\n}\r\n.close-section {\r\n    position: relative;\r\n    display: block;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    transition: $transition;\r\n}\r\n.close-section--active {\r\n    opacity: 1;\r\n}\r\n.close-section__inner {\r\n    background-color: $yellow;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    height: 3px;\r\n    display: block;\r\n    transform: rotate(45deg);\r\n    position: relative;\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        width: 100%;\r\n        top: 0;\r\n        left: 0;\r\n        height: 3px;\r\n        background-color: $yellow;\r\n        transform: rotate(90deg);\r\n    }\r\n}\r\n@keyframes crawl {\r\n    0% {\r\n      top: -100px;\r\n      transform: rotateX(20deg)  translateZ(0);\r\n    }\r\n    100% { \r\n      top: -6000px;\r\n      transform: rotateX(25deg) translateZ(-2500px);\r\n    }\r\n  }",".section {\r\n    width: 100%;\r\n    position: relative;\r\n    z-index: 20;\r\n    transition: $transition;\r\n}\r\n.section--active {\r\n    .section__content {\r\n        opacity: 1;\r\n    }\r\n}\r\n.section__content {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    opacity: 0;\r\n    transition: $transition;\r\n}\r\n.section__title {\r\n    color: white;\r\n    text-align: center;\r\n    margin: 20px 0 30px;\r\n    font-size: 35px;\r\n}\r\n.item {\r\n    background-color: $dark-grey;\r\n    flex: 1 1 calc(25% - 20px);\r\n    max-width: calc(25% - 20px);\r\n    padding: 20px;\r\n    border-top: 3px solid $yellow;\r\n    margin-bottom: 50px;\r\n    box-shadow: 0px 3px 17px -7px rgba($yellow, 68%);\r\n    transition: $transition;\r\n    span {\r\n        display: block;\r\n    }\r\n    @media (max-width: 992px) {\r\n        flex: 1 1 100%;\r\n        max-width: 100%;\r\n    }\r\n}\r\n.desc {\r\n    color: $white;\r\n    font-size: 18px;\r\n    margin-bottom: 15px;\r\n}\r\n.desc--uppercase {\r\n    text-transform: uppercase;\r\n}\r\n.desc--md {\r\n    color: $white;\r\n    padding: 5px 0;\r\n}\r\n.desc--sm {\r\n    color: $yellow;\r\n    margin-top: 10px;\r\n}\r\n.desc--xs {\r\n    color: $yellow;\r\n    margin-top: 10px;\r\n    font-size: 10px;\r\n}\r\n.loader {\r\n    font-size: 100px;\r\n    color: $white;\r\n    display: none;\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n.loader__text {\r\n    font-size: 35px;\r\n    display: block;\r\n    margin-bottom: 30px;\r\n    text-transform: lowercase;\r\n    font-weight: 500;\r\n    color: $yellow;\r\n    text-align: center;\r\n}\r\n.loader__img {\r\n    width: 200px;\r\n    height: 151px;\r\n}\r\n.dot {\r\n    display: inline;\r\n    position: relative;\r\n    animation: showHideDot 1.5s ease-in-out infinite;\r\n    &.one { animation-delay: 0.2s; }\r\n    &.two { animation-delay: 0.4s; }\r\n    &.three { animation-delay: 0.6s; }\r\n}\r\n@keyframes showHideDot {\r\n    0% { opacity: 0; }\r\n    50% { opacity: 1; }\r\n    60% { opacity: 1; }\r\n    100% { opacity: 0; }\r\n  }\r\n  ",".footer {\r\n    width: 100%;\r\n    padding: 20px 0;\r\n    color: $white;\r\n    border-top: 1px solid $yellow;\r\n    background-color: $black;\r\n    display: none;\r\n}\r\n.footer__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.footer__link {\r\n    color: $yellow;\r\n    transition: $transition;\r\n    &:hover {\r\n        opacity: 0.6;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/baby-yoda.svg":
/*!**********************************!*\
  !*** ./src/assets/baby-yoda.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "baby-yoda.svg";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_baby_yoda_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/baby-yoda.svg */ "./src/assets/baby-yoda.svg");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _particles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./particles */ "./src/particles.js");




_data__WEBPACK_IMPORTED_MODULE_3__["default"].init();

_particles__WEBPACK_IMPORTED_MODULE_4__["default"].init();
})();

/******/ })()
;
//# sourceMappingURL=bundle9b3edf1b07cf1bf4a14c.js.map