(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import { default as ready } from '../../js/utils/ready';

// ready(() => {
//   const burgers = document.querySelectorAll('.burger');
//   burgers.forEach((burger) => {
//     burger.addEventListener('click', () => {
//       burger.classList.toggle('active');
//     })
//   })
// });
"use strict";

},{}],2:[function(require,module,exports){
"use strict";var _ready = _interopRequireDefault(require("../../js/utils/ready"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _ready.default)(function () {
  document.addEventListener('click', function (event) {
    // Показать/скрыть боковое меню
    if (event.target.dataset.toggle === 'off-canvas') {
      event.preventDefault();
      toggleClassById('off-canvas', 'open');
      toggleClassById('burger', 'active');
    }
    // Показать/скрыть боковое меню и перейти на якорь
    if (event.target.dataset.toggleNative === 'off-canvas') {
      toggleClassById('off-canvas', 'open');
      toggleClassById('burger', 'active');
    }
  });
});

// Выбирает элемент с id 'off-canvas' и добавляет, иначе - убирает класс 'open'
function toggleClassById(id, className) {
  document.getElementById(id).classList.toggle(className);
};

},{"../../js/utils/ready":7}],3:[function(require,module,exports){
"use strict";var _ready = _interopRequireDefault(require("../../js/utils/ready"));
require("../../js/polyfills/nodeList-forEach-ie11-polyfill");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _ready.default)(function () {
  var links = document.querySelectorAll('[href^="#"][data-scroll-link]');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var hash = link.href.replace(/[^#]*(.*)/, '$1');
      if (hash && hash !== '#') {
        event.preventDefault();
        var scroll = window.pageYOffset;
        var targetTop = getOffsetRect(document.querySelector(hash)).top - 10;
        var scrollDiff = (scroll - targetTop) * -1;
        animate({
          duration: 500,
          timing: function timing(timeFraction) {
            return Math.pow(timeFraction, 2); // https://learn.javascript.ru/js-animation
          },
          draw: function draw(progress) {
            var scrollNow = scroll + progress * scrollDiff;
            window.scrollTo(0, scrollNow);
          } });

      }
    });
  });
});

function animate(_ref) {
  var start = performance.now();
  var timing = _ref.timing;
  var draw = _ref.draw;
  var duration = _ref.duration;
  requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    var progress = timing(timeFraction);
    draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var docElem = document.documentElement;
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
  var clientTop = docElem.clientTop || body.clientTop || 0;
  var clientLeft = docElem.clientLeft || body.clientLeft || 0;
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  return { top: Math.round(top), left: Math.round(left) };
};

},{"../../js/polyfills/nodeList-forEach-ie11-polyfill":6,"../../js/utils/ready":7}],4:[function(require,module,exports){
"use strict";var _ready = _interopRequireDefault(require("../../js/utils/ready"));
require("../../js/polyfills/nodeList-forEach-ie11-polyfill");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _ready.default)(function () {
  var sections = document.querySelectorAll('.section');

  var scrollToggle = function scrollToggle(sectionId) {
    var pageOffset = window.pageYOffset + 100;
    var section = document.getElementById(sectionId);
    var sectionBox = getCoords(section);
    var sectionlink = document.querySelector("[href='#".concat(sectionId, "'][data-scroll-link]"));
    if (sectionlink) {
      pageOffset > sectionBox.top && pageOffset < sectionBox.btm ?
      sectionlink.parentNode.classList.add('active') :
      sectionlink.parentNode.classList.remove('active');
    }
  };

  window.onscroll = function () {
    sections.forEach(function (section) {
      scrollToggle(section.id);
    });
  };
});

function getCoords(element) {
  var box = element.getBoundingClientRect();
  return {
    top: Math.round(box.top + pageYOffset),
    btm: Math.round(box.bottom + pageYOffset) };

};

},{"../../js/polyfills/nodeList-forEach-ie11-polyfill":6,"../../js/utils/ready":7}],5:[function(require,module,exports){
"use strict";
require("../blocks/burger/burger.js");
require("../blocks/off-canvas/off-canvas.js");
require("../blocks/scroll-link/scroll-link.js");
require("../blocks/scrolly/scrolly.js");

},{"../blocks/burger/burger.js":1,"../blocks/off-canvas/off-canvas.js":2,"../blocks/scroll-link/scroll-link.js":3,"../blocks/scrolly/scrolly.js":4}],6:[function(require,module,exports){
"use strict";if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

},{}],7:[function(require,module,exports){
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = function _default(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};exports.default = _default;

},{}]},{},[5]);
