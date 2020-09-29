"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainMenu = exports.SCALE_PROPERTY = void 0;

var _CommonEsm = require("./Common.esm.js");

var _LevelSelectEsm = require("./LevelSelect.esm.js");

var _CanvasEsm = require("./Canvas.esm.js");

var _SettinsEsm = require("./Settins.esm.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SCALE_PROPERTY = "--scale-value";
exports.SCALE_PROPERTY = SCALE_PROPERTY;
var START_SCREEN_SETTINGS_BUTTON_ID = "js-setings-button";
var START_SCREEN_GAME_BUTTON_ID = "js-start-game";
var START_SCREEN_ID = "js-start-screen";
var MINI_SETINGS_LAYER_ID = "js-mini-settings-layer";
var MINI_SETINGS_BUTTON_ID = "js-mini-settings-button";

var MainMenu =
/*#__PURE__*/
function (_Common) {
  _inherits(MainMenu, _Common);

  function MainMenu() {
    var _this;

    _classCallCheck(this, MainMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainMenu).call(this, START_SCREEN_ID));

    _this.bindToGameElements();

    _this.resizeGameWindow();

    window.addEventListener("resize", _this.resizeGameWindow);
    return _this;
  }

  _createClass(MainMenu, [{
    key: "bindToGameElements",
    value: function bindToGameElements() {
      var _this2 = this;

      var gameStartButton = this.bindToElement(START_SCREEN_GAME_BUTTON_ID);
      var gameSettingsButton = this.bindToElement(START_SCREEN_SETTINGS_BUTTON_ID);
      var miniSettingsButtonId = this.bindToElement(MINI_SETINGS_BUTTON_ID);
      this.miniSettingsLayerElement = this.bindToElement(MINI_SETINGS_LAYER_ID);
      gameStartButton.addEventListener("click", function () {
        return _this2.showLevelScreen();
      });
      gameSettingsButton.addEventListener("click", function () {
        return _this2.showSettingsSceen();
      });
      miniSettingsButtonId.addEventListener("click", function () {
        return _this2.showSettingsSceen();
      });
    }
  }, {
    key: "showLevelScreen",
    value: function showLevelScreen() {
      _LevelSelectEsm.levelSelect.createButtons();

      this.changeVisibilityScreen(this.element, _CommonEsm.HIDDEN_SCREEN);
      this.changeVisibilityScreen(_LevelSelectEsm.levelSelect.element, _CommonEsm.VISIBLE_SCREEN);
      console.log("Wybór poziomu");
    }
  }, {
    key: "showSettingsSceen",
    value: function showSettingsSceen() {
      this.changeVisibilityScreen(this.element, _CommonEsm.HIDDEN_SCREEN);
      this.changeVisibilityScreen(_SettinsEsm.settings.element, _CommonEsm.VISIBLE_SCREEN);
    }
  }, {
    key: "resizeGameWindow",
    value: function resizeGameWindow() {
      var _window = window,
          width = _window.innerWidth,
          height = _window.innerHeight;

      var scale = Math.min(width / _CanvasEsm.CANVAS_HEIGHT, height / _CanvasEsm.CANVAS_WIDTH) * _CanvasEsm.CANVAS_RESOLUTION_MULTIPLAY;

      document.documentElement.style.setProperty(SCALE_PROPERTY, scale);
    }
  }]);

  return MainMenu;
}(_CommonEsm.Common);

var mainMenu = new MainMenu();
exports.mainMenu = mainMenu;