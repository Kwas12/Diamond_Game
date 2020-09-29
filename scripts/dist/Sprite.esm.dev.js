"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sprite = void 0;

var _CanvasEsm = require("./Canvas.esm.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(x, y, width, height, spriteImage) {
    var numberOfSprites = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    var offset = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {
      x: 0,
      y: 0
    };

    _classCallCheck(this, Sprite);

    this.alpha = 255;
    this.height = height;
    this.numberOfSprites = numberOfSprites;
    this.offset = _objectSpread({}, offset);
    this.spriteImage = spriteImage;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  _createClass(Sprite, [{
    key: "draw",
    value: function draw() {
      var numberOfSprites = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (numberOfSprites > this.numberOfSprites) {
        return;
      }

      if (this.alpha !== 255) {
        _CanvasEsm.canvas.context.globalAlpha = this.alpha / 255;
      }

      _CanvasEsm.canvas.context.drawImage(this.spriteImage, numberOfSprites * this.width, 0, this.width, this.height, this.x + this.offset.x, this.y + this.offset.y, this.width * ratio, this.height * ratio);

      if (this.alpha !== 255) {
        _CanvasEsm.canvas.context.globalAlpha = 1;
      }
    }
  }]);

  return Sprite;
}();

exports.Sprite = Sprite;