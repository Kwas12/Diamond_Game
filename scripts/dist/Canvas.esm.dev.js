"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canvas = exports.CANVAS_HEIGHT = exports.CANVAS_WIDTH = exports.CANVAS_RESOLUTION_MULTIPLAY = void 0;

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

var GAME_SCREEN_ID = "js-game-screen";
var CANVAS_RESOLUTION_MULTIPLAY = window.innerWidth / 640;
exports.CANVAS_RESOLUTION_MULTIPLAY = CANVAS_RESOLUTION_MULTIPLAY;
var CANVAS_WIDTH = 640 * CANVAS_RESOLUTION_MULTIPLAY;
exports.CANVAS_WIDTH = CANVAS_WIDTH;
var CANVAS_HEIGHT = 480 * CANVAS_RESOLUTION_MULTIPLAY;
exports.CANVAS_HEIGHT = CANVAS_HEIGHT;

var Canvas =
/*#__PURE__*/
function (_Common) {
  _inherits(Canvas, _Common);

  function Canvas() {
    var _this;

    _classCallCheck(this, Canvas);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this, GAME_SCREEN_ID));

    _this.configureCanvas();

    return _this;
  }

  _createClass(Canvas, [{
    key: "configureCanvas",
    value: function configureCanvas() {
      this.context = this.element.getContext("2d");
      this.context.canvas.width = CANVAS_WIDTH;
      this.context.canvas.height = CANVAS_HEIGHT;
      this.context.font = "".concat(20 * CANVAS_RESOLUTION_MULTIPLAY, "px Arial");
      this.context.fillStyle = "rgb(255,255,255)";
    }
  }, {
    key: "drawGameOnCanvas",
    value: function drawGameOnCanvas(gameState) {
      this.drawBackground();
      this.drawTextOnCanvas(gameState.pointsToWin, 520 * CANVAS_RESOLUTION_MULTIPLAY, 92 * CANVAS_RESOLUTION_MULTIPLAY);
      this.drawTextOnCanvas(gameState.getPlayerPionts(), 520 * CANVAS_RESOLUTION_MULTIPLAY, 163 * CANVAS_RESOLUTION_MULTIPLAY);
      this.drawTextOnCanvas(gameState.getLeftMovement(), 520 * CANVAS_RESOLUTION_MULTIPLAY, 234 * CANVAS_RESOLUTION_MULTIPLAY);
    }
  }, {
    key: "drawBackground",
    value: function drawBackground() {
      this.context.drawImage(_MediaEsm.media.backgroundImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
  }, {
    key: "drawTextOnCanvas",
    value: function drawTextOnCanvas(text, cordinateX, cordinateY) {
      this.context.fillText("".concat(text), cordinateX, cordinateY);
    }
  }]);

  return Canvas;
}(_CommonEsm.Common);

var canvas = new Canvas();
exports.canvas = canvas;