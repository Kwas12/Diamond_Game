"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resultScreen = void 0;

var _CanvasEsm = require("./Canvas.esm.js");

var _CommonEsm = require("./Common.esm.js");

var _LevelSelectEsm = require("./LevelSelect.esm.js");

var _MainMenuEsm = require("./MainMenu.esm.js");

var _UserDataEsm = require("./UserData.esm.js");

var _GameEsm = require("./Game.esm.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RESULT_SCREEN_GAME_WIN_CLASS = "end-screen--is-win";
var RESULT_SCREEN_END_SCREEN_ID = "js-end-screen";
var RESULT_SCREEN_HEADER_ID = "js-game-result";
var RESULT_SCREEN_UESR_POINTS_ID = "js-user-points";
var RESULT_SCREEN_HIGH_SCORES_ID = "js-high-scores";
var RESULT_SCREEN_BACK_BUTTON_ID = "js-back-to-levels";
var RESULT_SCREEN_RESTART_LEVEL_BUTTON_ID = "js-restart-level";

var ResultScreen =
/*#__PURE__*/
function (_Common) {
  _inherits(ResultScreen, _Common);

  function ResultScreen() {
    var _this;

    _classCallCheck(this, ResultScreen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultScreen).call(this, RESULT_SCREEN_END_SCREEN_ID));

    _this.bindToElements();

    return _this;
  }

  _createClass(ResultScreen, [{
    key: "bindToElements",
    value: function bindToElements() {
      var _this2 = this;

      this.resultTextElement = this.bindToElement(RESULT_SCREEN_HEADER_ID);
      this.userPointsElement = this.bindToElement(RESULT_SCREEN_UESR_POINTS_ID);
      this.highScoreElement = this.bindToElement(RESULT_SCREEN_HIGH_SCORES_ID);
      var backButtonElement = this.bindToElement(RESULT_SCREEN_BACK_BUTTON_ID);
      var restartButtonElement = this.bindToElement(RESULT_SCREEN_RESTART_LEVEL_BUTTON_ID);
      backButtonElement.addEventListener("click", function () {
        return _this2.backButtonClick();
      });
      restartButtonElement.addEventListener("click", function () {
        return _this2.restartLevelClick();
      });
    }
  }, {
    key: "viewResultScreen",
    value: function viewResultScreen(isGameWin, playerPoints, level) {
      if (isGameWin) {
        this.element.classList.add(RESULT_SCREEN_GAME_WIN_CLASS);
      } else {
        this.element.classList.remove(RESULT_SCREEN_GAME_WIN_CLASS);
      }

      this.changeVisibilityScreen(this.element, _CommonEsm.VISIBLE_SCREEN);
      this.resultTextElement.textContent = isGameWin ? "Wygrałeś" : "Przegrałeś";
      this.userPointsElement.textContent = String(playerPoints());
      this.highScoreElement.textContent = String(_UserDataEsm.userData.getHightScores(level));
    }
  }, {
    key: "backButtonClick",
    value: function backButtonClick() {
      this.changeVisibilityScreen(_CanvasEsm.canvas.element, _CommonEsm.HIDDEN_SCREEN);
      this.changeVisibilityScreen(_MainMenuEsm.mainMenu.miniSettingsLayerElement, _CommonEsm.HIDDEN_SCREEN);
      this.changeVisibilityScreen(this.element, _CommonEsm.HIDDEN_SCREEN);

      _MainMenuEsm.mainMenu.showLevelScreen();
    }
  }, {
    key: "restartLevelClick",
    value: function restartLevelClick() {
      this.changeVisibilityScreen(this.element, _CommonEsm.HIDDEN_SCREEN);

      _LevelSelectEsm.levelSelect.loadLevel(_GameEsm.game.gameState.level);
    }
  }]);

  return ResultScreen;
}(_CommonEsm.Common);

var resultScreen = new ResultScreen();
exports.resultScreen = resultScreen;