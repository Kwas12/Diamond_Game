"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Diamond = exports.NUMBER_OF_DAIMONDS_TYPES = exports.DIAMOND_SIZE = void 0;

var _gameLevelsEsm = require("./gameLevels.esm.js");

var _SpriteEsm = require("./Sprite.esm.js");

var _CanvasEsm = require("./Canvas.esm.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DIAMOND_ORGINAL_SIZE = 256;
var DIAMOND_SIZE = 48 * _CanvasEsm.CANVAS_RESOLUTION_MULTIPLAY;
exports.DIAMOND_SIZE = DIAMOND_SIZE;
var NUMBER_OF_DAIMONDS_TYPES = 6;
exports.NUMBER_OF_DAIMONDS_TYPES = NUMBER_OF_DAIMONDS_TYPES;
var DIAMOND_ZOOM = DIAMOND_SIZE / DIAMOND_ORGINAL_SIZE;

var Diamond =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Diamond, _Sprite);

  function Diamond(x, y, row, column, kind, diamondsSpriteImage) {
    var _this;

    _classCallCheck(this, Diamond);

    var offset = {
      x: _gameLevelsEsm.GAME_BOARD_X_OFFSET,
      y: _gameLevelsEsm.GAME_BOARD_Y_OFFSET
    };
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Diamond).call(this, x, y, DIAMOND_ORGINAL_SIZE, DIAMOND_ORGINAL_SIZE, diamondsSpriteImage, NUMBER_OF_DAIMONDS_TYPES, offset));
    _this.row = row;
    _this.column = column;
    _this.kind = kind;
    _this.match = 0;
    return _this;
  }

  _createClass(Diamond, [{
    key: "draw",
    value: function draw() {
      _get(_getPrototypeOf(Diamond.prototype), "draw", this).call(this, this.kind, DIAMOND_ZOOM);
    }
  }]);

  return Diamond;
}(_SpriteEsm.Sprite);

exports.Diamond = Diamond;