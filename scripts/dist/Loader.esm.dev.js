"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loader = exports.DATA_LOADED_EVENT_NAME = void 0;

var _CommonEsm = require("./Common.esm.js");

var _CanvasEsm = require("./Canvas.esm.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LOAD_CURENT_ID = "js-loadnigscreen-curent";
var LOAD_TOTAL_ID = "js-loadnigscreen-total";
var LOADER_ELEMENT_ID = "js-loading-screen";
var DATA_LOADED_EVENT_NAME = "dataLoaded";
exports.DATA_LOADED_EVENT_NAME = DATA_LOADED_EVENT_NAME;

var Loader =
/*#__PURE__*/
function (_Common) {
  _inherits(Loader, _Common);

  function Loader() {
    var _this;

    _classCallCheck(this, Loader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loader).call(this, LOADER_ELEMENT_ID));

    _this.bindToElements();

    _this.clearFlags();

    return _this;
  }

  _createClass(Loader, [{
    key: "bindToElements",
    value: function bindToElements() {
      this.currentElement = this.bindToElement(LOAD_CURENT_ID);
      this.totalElement = this.bindToElement(LOAD_TOTAL_ID);
    }
  }, {
    key: "loadImage",
    value: function loadImage(imageUrl) {
      var _this2 = this;

      this.changeVisibilityScreen(this.element, _CommonEsm.VISIBLE_SCREEN);
      this.isAllLoaded = false;
      this.totalCounter++;
      this.totalElement = this.totalCounter;
      var image = new Image();
      image.src = imageUrl;
      image.addEventListener("load", function (event) {
        return _this2.itemLoaded(event);
      }, false);
      return image;
    }
  }, {
    key: "laoadSound",
    value: function laoadSound(soundUrl) {
      var _this3 = this;

      this.changeVisibilityScreen(this.element, _CommonEsm.VISIBLE_SCREEN);
      this.isAllLoaded = false;
      this.totalCounter++;
      var audio = new Audio();
      audio.addEventListener("canplaythrough", function (event) {
        return _this3.itemLoaded(event);
      }, false);
      audio.src = soundUrl;
      return audio;
    }
  }, {
    key: "itemLoaded",
    value: function itemLoaded(event) {
      event.target.removeEventListener(event.type, this.itemLoaded, false);
      this.loadedCounter++;
      this.currentElement.textContent = this.loadedCounter;

      if (this.loadedCounter === this.totalCounter) {
        this.clearFlags();
        this.changeVisibilityScreen(this.element, _CommonEsm.HIDDEN_SCREEN);
        window.dispatchEvent(new CustomEvent(DATA_LOADED_EVENT_NAME));
      }
    }
  }, {
    key: "clearFlags",
    value: function clearFlags() {
      this.isAllLoaded = true;
      this.loadedCounter = 0;
      this.totalCounter = 0;
    }
  }]);

  return Loader;
}(_CommonEsm.Common);

var loader = new Loader();
exports.loader = loader;