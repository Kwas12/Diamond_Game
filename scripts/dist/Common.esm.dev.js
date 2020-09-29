"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Common = exports.VISIBLE_SCREEN = exports.HIDDEN_SCREEN = exports.HIDDEN_CLASS = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HIDDEN_CLASS = "hidden";
exports.HIDDEN_CLASS = HIDDEN_CLASS;
var HIDDEN_SCREEN = false;
exports.HIDDEN_SCREEN = HIDDEN_SCREEN;
var VISIBLE_SCREEN = true;
exports.VISIBLE_SCREEN = VISIBLE_SCREEN;

var Common =
/*#__PURE__*/
function () {
  function Common(elementID) {
    _classCallCheck(this, Common);

    if (typeof elementID === "undefined") {
      return;
    }

    this.element = this.bindToElement(elementID);
  }

  _createClass(Common, [{
    key: "bindToElement",
    value: function bindToElement(elementToFindById) {
      var element = document.getElementById(elementToFindById);

      if (!element) {
        throw new Error("Nie znaleziono elementu o Id: ".concat(elementToFindById));
      }

      return element;
    }
  }, {
    key: "changeVisibilityScreen",
    value: function changeVisibilityScreen(element, mode) {
      if (mode === VISIBLE_SCREEN) {
        element.classList.remove(HIDDEN_CLASS);
      } else {
        element.classList.add(HIDDEN_CLASS);
      }
    }
  }]);

  return Common;
}();

exports.Common = Common;