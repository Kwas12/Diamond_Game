"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.levelSelect = void 0;

var _CommonEsm = require("./Common.esm.js");

var _CanvasEsm = require("./Canvas.esm.js");

var _LoaderEsm = require("./Loader.esm.js");

var _GameEsm = require("./Game.esm.js");

var _MediaEsm = require("./Media.esm.js");

var _gameLevelsEsm = require("./gameLevels.esm.js");

var _UserDataEsm = require("./UserData.esm.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LEVEL_SELECT_BUTTON_ID = "level-select__button";
var LEVEL_SELECT_ID = "js-level-select-screen";

var LevelSelect =
/*#__PURE__*/
function (_Common) {
  _inherits(LevelSelect, _Common);

  function LevelSelect() {
    _classCallCheck(this, LevelSelect);

    return _possibleConstructorReturn(this, _getPrototypeOf(LevelSelect).call(this, LEVEL_SELECT_ID));
  }

  _createClass(LevelSelect, [{
    key: "createButtons",
    value: function createButtons() {
      var _this = this;

      while (this.element.firstChild) {
        this.element.removeChild(this.element.firstChild);
      }

      _gameLevelsEsm.gameLevels.some(function (gameLevels) {
        return _this.createButton(gameLevels.level);
      });
    }
  }, {
    key: "createButton",
    value: function createButton(value) {
      var _this2 = this;

      if (!_UserDataEsm.userData.checkAvabilityLevel(value)) {
        return true;
      }

      var button = document.createElement("button");
      button.type = "button";
      button.classList.add(LEVEL_SELECT_BUTTON_ID);
      button.textContent = value;
      button.value = value;
      button.addEventListener("click", function (event) {
        return _this2.buttonOnClickHandler(event);
      });
      this.element.appendChild(button);
    }
  }, {
    key: "buttonOnClickHandler",
    value: function buttonOnClickHandler(event) {
      this.changeVisibilityScreen(this.element, _CommonEsm.HIDDEN_SCREEN);
      this.changeVisibilityScreen(_CanvasEsm.canvas.element, _CommonEsm.VISIBLE_SCREEN);
      this.loadLevel(event.currentTarget.value);
    }
  }, {
    key: "loadLevel",
    value: function loadLevel(level) {
      if (_MediaEsm.media.backgroundImage && _MediaEsm.media.diamondsSprites && _MediaEsm.media.backgroundMusic && _MediaEsm.media.swapSound) {
        _GameEsm.game.playLevel(level);

        return;
      }

      if (!_MediaEsm.media.diamondsSprites) {
        _MediaEsm.media.diamondsSprites = _LoaderEsm.loader.loadImage("images/diamonds-transparent.png");
      }

      if (!_MediaEsm.media.backgroundImage) {
        _MediaEsm.media.backgroundImage = _LoaderEsm.loader.loadImage("images/levelbackground.png");
      }

      if (!_MediaEsm.media.swapSound) {
        _MediaEsm.media.swapSound = _LoaderEsm.loader.laoadSound("sounds/stone_rock_or_wood_moved.mp3");
      }

      if (!_MediaEsm.media.backgroundMusic) {
        _MediaEsm.media.backgroundMusic = _LoaderEsm.loader.laoadSound("sounds/music-background.mp3");
      }

      window.addEventListener(_LoaderEsm.DATA_LOADED_EVENT_NAME, function () {
        return _GameEsm.game.playLevel(level);
      });
    }
  }]);

  return LevelSelect;
}(_CommonEsm.Common);

var levelSelect = new LevelSelect();
exports.levelSelect = levelSelect;