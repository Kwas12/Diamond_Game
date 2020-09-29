"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userData = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserData =
/*#__PURE__*/
function () {
  function UserData() {
    _classCallCheck(this, UserData);

    if (!localStorage.length) {
      localStorage.setItem("1", JSON.stringify({
        active: true,
        bestScore: 0
      }));
    }
  }

  _createClass(UserData, [{
    key: "checkAvabilityLevel",
    value: function checkAvabilityLevel(levelNumber) {
      var item = localStorage.getItem(String(levelNumber));

      if (!item) {
        return false;
      }

      var _JSON$parse = JSON.parse(item),
          active = _JSON$parse.active;

      return active;
    }
  }, {
    key: "addNewLevel",
    value: function addNewLevel(levelNumber) {
      localStorage.setItem(String(levelNumber), JSON.stringify({
        active: true,
        bestScore: 0
      }));
    }
  }, {
    key: "getHightScores",
    value: function getHightScores(levelNumber) {
      var item = localStorage.getItem(String(levelNumber));

      var _JSON$parse2 = JSON.parse(item),
          bestScore = _JSON$parse2.bestScore;

      return bestScore;
    }
  }, {
    key: "setHighScores",
    value: function setHighScores(levelNumber, newHighScore) {
      localStorage.setItem(String(levelNumber), JSON.stringify({
        active: true,
        bestScore: newHighScore
      }));
    }
  }]);

  return UserData;
}();

var userData = new UserData();
exports.userData = userData;