"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameState = void 0;

var _DaimondEsm = require("./Daimond.esm.js");

var _GameEsm = require("./Game.esm.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameState =
/*#__PURE__*/
function () {
  function GameState(level, leftMovement, piontsToWin, diamonds, diamondsSpriteImage) {
    var _this = this;

    _classCallCheck(this, GameState);

    var _leftMovement = leftMovement;
    var _playerScores = 0;

    var _gameBoard = diamonds.map(function (_ref) {
      var x = _ref.x,
          y = _ref.y,
          row = _ref.row,
          column = _ref.column,
          kind = _ref.kind;
      return new _DaimondEsm.Diamond(x, y, row, column, kind, diamondsSpriteImage);
    });

    var _isSwaping = false;
    var _isMoving = false;
    this._pointsToWin = piontsToWin;
    this._level = level;

    this.getLeftMovement = function () {
      return _leftMovement;
    };

    this.decreasePointsMovement = function () {
      return _leftMovement--;
    };

    this.increasePointsMovement = function () {
      return _leftMovement++;
    };

    this.getPlayerPionts = function () {
      return _playerScores;
    };

    this.increasePlayerPionts = function (points) {
      return _playerScores += points;
    };

    this.getIsSwaping = function () {
      return _isSwaping;
    };

    this.setIsSwaping = function (value) {
      return _isSwaping = value;
    };

    this.getIsMoving = function () {
      return _isMoving;
    };

    this.setIsMoving = function (value) {
      return _isMoving = value;
    };

    this.isPlayerWinner = function () {
      return _playerScores >= _this._pointsToWin;
    };

    this.getGameBoard = function () {
      return _gameBoard;
    };
  }

  _createClass(GameState, [{
    key: "mixDiamonds",
    value: function mixDiamonds() {
      var _gameBoard2;

      var mixedDiamonds = _gameBoard.splice(0, _GameEsm.DIAMONDS_ARRAY_WIDTH);

      var index = _GameEsm.DIAMONDS_ARRAY_WIDTH;

      while (_gameBoard.length) {
        var randomNumber = Math.floor(Math.random() * _gameBoard.length);

        var nextElementToMix = _gameBoard.splice(randomNumber, 1)[0];

        var element = _objectSpread({}, nextElementToMix, {
          row: index % _GameEsm.DIAMONDS_ARRAY_WIDTH,
          column: Math.floor(index / _GameEsm.DIAMONDS_ARRAY_WIDTH)
        });

        index++;
        mixedDiamonds.push(element);
      }

      (_gameBoard2 = _gameBoard).push.apply(_gameBoard2, _toConsumableArray(mixedDiamonds));
    }
  }, {
    key: "level",
    get: function get() {
      return this._level;
    }
  }, {
    key: "pointsToWin",
    get: function get() {
      return this._pointsToWin;
    }
  }]);

  return GameState;
}();

exports.GameState = GameState;