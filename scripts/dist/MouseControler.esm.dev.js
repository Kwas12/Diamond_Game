"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mouseControler = void 0;

var _CanvasEsm = require("./Canvas.esm.js");

var _MainMenuEsm = require("./MainMenu.esm.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MouseControler =
/*#__PURE__*/
function () {
  function MouseControler() {
    var _this = this;

    _classCallCheck(this, MouseControler);

    this.x = 0;
    this.y = 0;
    this.state = 0;
    this.clicked = false;

    _CanvasEsm.canvas.element.addEventListener("mousedown", function (event) {
      return _this.mouseDown(event);
    });
  }

  _createClass(MouseControler, [{
    key: "mouseDown",
    value: function mouseDown(event) {
      event.preventDefault();

      var offset = _CanvasEsm.canvas.element.getBoundingClientRect();

      var scale = Number(document.documentElement.style.getPropertyValue(_MainMenuEsm.SCALE_PROPERTY));
      this.x = (event.clientX - offset.left) / scale;
      this.y = (event.clientY - offset.top) / scale;
      this.clicked = true;
    }
  }]);

  return MouseControler;
}();

var mouseControler = new MouseControler();
exports.mouseControler = mouseControler;