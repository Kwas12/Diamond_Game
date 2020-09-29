"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settings = void 0;

var _MainMenuEsm = require("./MainMenu.esm.js");

var _CommonEsm = require("./Common.esm.js");

var _MediaEsm = require("./Media.esm.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GAME_SETTINGS_ID = "js-settings-screen";
var GAME_LAYER_SETINGS_MUSIC_ON_OFF_ID = "js-music-on-off";
var GAME_LAYER_SETINGS_MUSIC_UP_ID = "js-music-volume-increase";
var GAME_LAYER_SETINGS_MUSIC_DOWN_ID = "js-music-volume-decrease";
var GAME_LAYER_SETINGS_SOUND_ON_OFF_ID = "js-sound-on-off";
var GAME_LAYER_SETINGS_SOUND_UP_ID = "js-sound-volume-increase";
var GAME_LAYER_SETINGS_SOUND_DOWN_ID = "js-sound-volume-decrease";
var GAME_SETINGS_EXIT_ID = "js-settings-screen-exit-button";

var Settings =
/*#__PURE__*/
function (_Common) {
  _inherits(Settings, _Common);

  function Settings() {
    var _this;

    _classCallCheck(this, Settings);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Settings).call(this, GAME_SETTINGS_ID));

    _this.bindToElements();

    return _this;
  }

  _createClass(Settings, [{
    key: "bindToElements",
    value: function bindToElements() {
      var _this2 = this;

      var exitSettingsElement = this.bindToElement(GAME_SETINGS_EXIT_ID);
      var musicOnOffElement = this.bindToElement(GAME_LAYER_SETINGS_MUSIC_ON_OFF_ID);
      var musicVolumeUpElement = this.bindToElement(GAME_LAYER_SETINGS_MUSIC_UP_ID);
      var musicVolumeDownElement = this.bindToElement(GAME_LAYER_SETINGS_MUSIC_DOWN_ID);
      var soundOnOffElement = this.bindToElement(GAME_LAYER_SETINGS_SOUND_ON_OFF_ID);
      var soundVolumeUpElement = this.bindToElement(GAME_LAYER_SETINGS_SOUND_UP_ID);
      var soundVolumeDownElement = this.bindToElement(GAME_LAYER_SETINGS_SOUND_DOWN_ID);
      exitSettingsElement.addEventListener("click", function () {
        return _this2.exitVisibleScreen();
      });
      musicOnOffElement.addEventListener("click", function () {
        return _MediaEsm.media.toggleMusicOnOff();
      });
      musicVolumeUpElement.addEventListener("click", function () {
        return _MediaEsm.media.increaseMusicVolume();
      });
      musicVolumeDownElement.addEventListener("click", function () {
        return _MediaEsm.media.decreaseMusicVolume();
      });
      soundOnOffElement.addEventListener("click", function () {
        return _MediaEsm.media.toggleSoundOnOff();
      });
      soundVolumeUpElement.addEventListener("click", function () {
        return _MediaEsm.media.increaseSoundVolume();
      });
      soundVolumeDownElement.addEventListener("click", function () {
        return _MediaEsm.media.decreaseSoundVolume();
      });
    }
  }, {
    key: "exitVisibleScreen",
    value: function exitVisibleScreen() {
      this.changeVisibilityScreen(this.element, _CommonEsm.HIDDEN_SCREEN);
      this.changeVisibilityScreen(_MainMenuEsm.mainMenu.element, _CommonEsm.VISIBLE_SCREEN);
    }
  }]);

  return Settings;
}(_CommonEsm.Common);

var settings = new Settings();
exports.settings = settings;