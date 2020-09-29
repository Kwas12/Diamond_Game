"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = exports.DIAMONDS_ARRAY_WIDTH = void 0;

var _CommonEsm = require("./Common.esm.js");

var _LoaderEsm = require("./Loader.esm.js");

var _gameLevelsEsm = require("./gameLevels.esm.js");

var _CanvasEsm = require("./Canvas.esm.js");

var _MediaEsm = require("./Media.esm.js");

var _GameStateEsm = require("./GameState.esm.js");

var _MouseControllerEsm = require("./MouseController.esm.js");

var _DaimondEsm = require("./Daimond.esm.js");

var _ResultScreenEsm = require("./ResultScreen.esm.js");

var _UserDataEsm = require("./UserData.esm.js");

var _MainMenuEsm = require("./MainMenu.esm.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DIAMONDS_ARRAY_WIDTH = 8;
exports.DIAMONDS_ARRAY_WIDTH = DIAMONDS_ARRAY_WIDTH;
var DIAMONDS_ARRAY_HEIGHT = DIAMONDS_ARRAY_WIDTH + 1;
var SWAPING_SPEED = 8 * _CanvasEsm.CANVAS_RESOLUTION_MULTIPLAY;
var LAST_ELEMENT_DIAMONDS_ARRAY = DIAMONDS_ARRAY_WIDTH * DIAMONDS_ARRAY_HEIGHT - 1;
var TRANSPARENCY_SPEED = 15;

var Game =
/*#__PURE__*/
function (_Common) {
  _inherits(Game, _Common);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this));
  }

  _createClass(Game, [{
    key: "playLevel",
    value: function playLevel(level) {
      this.randomDiamondKind(level);
      var _gameLevels = _gameLevelsEsm.gameLevels[level - 1],
          numberOfMovements = _gameLevels.numberOfMovements,
          pointsToWin = _gameLevels.pointsToWin,
          board = _gameLevels.board;
      window.removeEventListener(_LoaderEsm.DATA_LOADED_EVENT_NAME, this.playLevel);
      this.gameState = new _GameStateEsm.GameState(level, numberOfMovements, pointsToWin, board, _MediaEsm.media.diamondsSprites);
      this.changeVisibilityScreen(_CanvasEsm.canvas.element, _CommonEsm.VISIBLE_SCREEN);
      this.changeVisibilityScreen(_MainMenuEsm.mainMenu.miniSettingsLayerElement, _CommonEsm.VISIBLE_SCREEN);
      _MediaEsm.media.isInLevel = true;

      _MediaEsm.media.playBackgroundMusic();

      this.animate();
    }
  }, {
    key: "animate",
    value: function animate() {
      this.handleMouseState();
      this.handleMouseClick();
      this.findMatches();
      this.moveDiamonds();
      this.hideAmination();
      this.countScores();
      this.revertSwap();
      this.clearMatched();

      _CanvasEsm.canvas.drawGameOnCanvas(this.gameState);

      this.gameState.getGameBoard().forEach(function (diamond) {
        return diamond.draw();
      });
      this.checkPosibilityMovement();
      this.checkEndOfGame();
    }
  }, {
    key: "handleMouseState",
    value: function handleMouseState() {
      var isSwaping = !this.gameState.getIsSwaping();
      var isMoving = !this.gameState.getIsMoving();

      if (_MouseControllerEsm.mouseController.clicked && isSwaping && isMoving) {
        _MouseControllerEsm.mouseController.state++;
      }
    }
  }, {
    key: "handleMouseClick",
    value: function handleMouseClick() {
      if (!_MouseControllerEsm.mouseController.clicked) {
        return;
      }

      var xClicked = Math.floor((_MouseControllerEsm.mouseController.x * _CanvasEsm.CANVAS_RESOLUTION_MULTIPLAY - _gameLevelsEsm.GAME_BOARD_X_OFFSET) / _DaimondEsm.DIAMOND_SIZE);
      var yClicked = Math.floor((_MouseControllerEsm.mouseController.y * _CanvasEsm.CANVAS_RESOLUTION_MULTIPLAY - _gameLevelsEsm.GAME_BOARD_Y_OFFSET) / _DaimondEsm.DIAMOND_SIZE);

      if (!yClicked || xClicked >= DIAMONDS_ARRAY_WIDTH || yClicked >= DIAMONDS_ARRAY_HEIGHT) {
        _MouseControllerEsm.mouseController.state = 0;
        return;
      }

      if (_MouseControllerEsm.mouseController.state === 1) {
        _MouseControllerEsm.mouseController.firstClick = {
          x: xClicked,
          y: yClicked
        };
      } else if (_MouseControllerEsm.mouseController.state === 2) {
        _MouseControllerEsm.mouseController.secendClick = {
          x: xClicked,
          y: yClicked
        };
        _MouseControllerEsm.mouseController.state = 0;

        if (Math.abs(_MouseControllerEsm.mouseController.firstClick.x - _MouseControllerEsm.mouseController.secendClick.x) + Math.abs(_MouseControllerEsm.mouseController.firstClick.y - _MouseControllerEsm.mouseController.secendClick.y) !== 1) {
          return;
        }

        this.swapDiamonds();

        _MediaEsm.media.playSwapSound();

        this.gameState.setIsSwaping(true);
        this.gameState.decreasePointsMovement();
      }

      _MouseControllerEsm.mouseController.clicked = false;
    }
  }, {
    key: "swapDiamonds",
    value: function swapDiamonds() {
      var firstDiamond = _MouseControllerEsm.mouseController.firstClick.y * DIAMONDS_ARRAY_WIDTH + _MouseControllerEsm.mouseController.firstClick.x;
      var secendDiamond = _MouseControllerEsm.mouseController.secendClick.y * DIAMONDS_ARRAY_WIDTH + _MouseControllerEsm.mouseController.secendClick.x;
      this.swap(this.gameState.getGameBoard()[firstDiamond], this.gameState.getGameBoard()[secendDiamond]);
    }
  }, {
    key: "findMatches",
    value: function findMatches() {
      this.gameState.getGameBoard().forEach(function (diamond, index, diamonds) {
        if (diamond.kind === _gameLevelsEsm.EMPTY_BLOCK || index < DIAMONDS_ARRAY_WIDTH || index === LAST_ELEMENT_DIAMONDS_ARRAY) {
          return;
        }

        if (diamonds[index - 1].kind === diamond.kind && diamonds[index + 1].kind === diamond.kind) {
          if (Math.floor((index - 1) / DIAMONDS_ARRAY_WIDTH) === Math.floor((index + 1) / DIAMONDS_ARRAY_WIDTH)) {
            for (var diamondIndex = -1; diamondIndex <= 1; diamondIndex++) {
              diamonds[index + diamondIndex].match++;
            }
          }
        }

        if (index >= DIAMONDS_ARRAY_WIDTH && index < LAST_ELEMENT_DIAMONDS_ARRAY - DIAMONDS_ARRAY_WIDTH + 1 && diamonds[index - DIAMONDS_ARRAY_WIDTH].kind === diamond.kind && diamonds[index + DIAMONDS_ARRAY_WIDTH].kind === diamond.kind) {
          if ((index - DIAMONDS_ARRAY_WIDTH) % DIAMONDS_ARRAY_WIDTH === (index + DIAMONDS_ARRAY_WIDTH) % DIAMONDS_ARRAY_WIDTH) {
            for (var _diamondIndex = -DIAMONDS_ARRAY_WIDTH; _diamondIndex <= DIAMONDS_ARRAY_WIDTH; _diamondIndex += DIAMONDS_ARRAY_WIDTH) {
              diamonds[index + _diamondIndex].match++;
            }
          }
        }
      });
    }
  }, {
    key: "moveDiamonds",
    value: function moveDiamonds() {
      var _this = this;

      this.gameState.setIsMoving(false);
      this.gameState.getGameBoard().forEach(function (diamond) {
        var dx;
        var dy;

        for (var speedSwap = 0; speedSwap < SWAPING_SPEED; speedSwap++) {
          dx = diamond.x - diamond.row * _DaimondEsm.DIAMOND_SIZE;
          dy = diamond.y - diamond.column * _DaimondEsm.DIAMOND_SIZE;

          if (dx) {
            diamond.x -= dx / Math.abs(dx);
          }

          if (dy) {
            diamond.y -= dy / Math.abs(dy);
          }
        }

        if (dx || dy) {
          _this.gameState.setIsMoving(true);
        }
      });
    }
  }, {
    key: "hideAmination",
    value: function hideAmination() {
      var _this2 = this;

      if (this.gameState.getIsMoving()) {
        return;
      }

      this.gameState.getGameBoard().forEach(function (diamond) {
        if (diamond.match && diamond.alpha > TRANSPARENCY_SPEED) {
          diamond.alpha -= TRANSPARENCY_SPEED;

          _this2.gameState.setIsMoving(true);
        }
      });
    }
  }, {
    key: "countScores",
    value: function countScores() {
      var _this3 = this;

      this.scores = 0;
      this.gameState.getGameBoard().forEach(function (diamond) {
        return _this3.scores += diamond.match > 0 ? 1 : 0;
      });

      if (!this.gameState.getIsMoving() && this.scores) {
        this.gameState.increasePlayerPionts(this.scores);
      }
    }
  }, {
    key: "revertSwap",
    value: function revertSwap() {
      if (this.gameState.getIsSwaping() && !this.gameState.getIsMoving()) {
        if (!this.scores) {
          this.swapDiamonds();
          this.gameState.increasePointsMovement();
        }

        this.gameState.setIsSwaping(false);
      }
    }
  }, {
    key: "clearMatched",
    value: function clearMatched() {
      var _this4 = this;

      if (this.gameState.getIsMoving()) {
        return;
      }

      this.gameState.getGameBoard().forEach(function (_, idx, diamonds) {
        var index = diamonds.length - 1 - idx;
        var column = Math.floor(index / DIAMONDS_ARRAY_WIDTH);
        var row = Math.floor(index % DIAMONDS_ARRAY_WIDTH);

        if (diamonds[index].match) {
          for (var counter = column; counter >= 0; counter--) {
            if (!diamonds[counter * DIAMONDS_ARRAY_WIDTH + row].match) {
              _this4.swap(diamonds[counter * DIAMONDS_ARRAY_WIDTH + row], diamonds[index]);

              break;
            }
          }
        }
      });
      this.gameState.getGameBoard().forEach(function (diamond, index) {
        var row = Math.floor(index % DIAMONDS_ARRAY_WIDTH) * _DaimondEsm.DIAMOND_SIZE;

        if (index < DIAMONDS_ARRAY_WIDTH) {
          diamond.kind = _gameLevelsEsm.EMPTY_BLOCK;
          diamond.match = 0;
        } else if (diamond.match || diamond.kind === _gameLevelsEsm.EMPTY_BLOCK) {
          diamond.kind = Math.floor(Math.random() * _DaimondEsm.NUMBER_OF_DAIMONDS_TYPES);
          diamond.y = 0;
          diamond.x = row;
          diamond.match = 0;
          diamond.alpha = 255;
        }
      });
    }
  }, {
    key: "checkPosibilityMovement",
    value: function checkPosibilityMovement() {
      if (this.gameState.getIsMoving()) {
        return;
      }

      this.isPossibleToMove = this.gameState.getGameBoard().some(function (diamond, index, diamonds) {
        if (diamond.kind === _gameLevelsEsm.EMPTY_BLOCK) {
          return false;
        } //move right =>
        //check in row


        if (index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 3 && diamond.kind === diamonds[index + 2].kind && diamond.kind === diamonds[index + 3].kind) {
          return true;
        } //check if is on the moidle of the column


        if (index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 1 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 1 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) < DIAMONDS_ARRAY_WIDTH - 1 && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH + 1].kind && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH + 1].kind) {
          return true;
        } //check if is on the top of the column


        if (index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 1 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) < DIAMONDS_ARRAY_HEIGHT - 2 && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH + 1].kind && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH * 2 + 1].kind) {
          return true;
        } //check if is on the bottom of the column


        if (index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 1 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 2 && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH + 1].kind && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH * 2 + 1].kind) {
          return true;
        } //move left =>
        //check on row


        if (index % DIAMONDS_ARRAY_WIDTH > 2 && diamond.kind === diamonds[index - 2].kind && diamond.kind === diamonds[index - 3].kind) {
          return true;
        } //check if is in midle of the column


        if (index % DIAMONDS_ARRAY_WIDTH > 2 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 1 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) < DIAMONDS_ARRAY_HEIGHT - 1 && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH - 1].kind && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH - 1].kind) {
          return true;
        } //check if is on the top of the column


        if (index % DIAMONDS_ARRAY_WIDTH > 0 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) > DIAMONDS_ARRAY_HEIGHT - 2 && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH - 1].kind && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH * 2 - 1].kind) {
          return true;
        } //check if is on the bottom of the column


        if (index % DIAMONDS_ARRAY_WIDTH > 0 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 2 && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH - 1].kind && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH * 2 - 1].kind) {
          return true;
        } //move down=>
        //check if is in column


        if (Math.floor(index / DIAMONDS_ARRAY_HEIGHT) < DIAMONDS_ARRAY_HEIGHT - 3 && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH * 2].kind && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH * 3].kind) {
          return true;
        } //check if is in the midle of the row


        if (index % DIAMONDS_ARRAY_WIDTH && index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 1 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) < DIAMONDS_ARRAY_HEIGHT - 1 && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH + 1].kind && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH - 1].kind) {
          return true;
        } //check if is in the left edge of the row


        if (index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 2 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) < DIAMONDS_ARRAY_HEIGHT - 1 && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH + 1].kind && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH + 2].kind) {
          return true;
        } //check if is in the right edge of the row


        if (index % DIAMONDS_ARRAY_WIDTH > 1 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) < DIAMONDS_ARRAY_HEIGHT - 1 && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH - 1].kind && diamond.kind === diamonds[index + DIAMONDS_ARRAY_WIDTH - 2].kind) {
          return true;
        } //move up =>
        //check in column


        if (Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 3 && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH * 2].kind && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH * 3].kind) {
          return true;
        } //check if is in the midle of the row


        if (index % DIAMONDS_ARRAY_WIDTH && index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 1 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 1 && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH + 1].kind && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH - 1].kind) {
          return true;
        } //check if is in the left of the row


        if (index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 2 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 1 && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH + 1].kind && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH + 2].kind) {
          return true;
        } //check if is in the right of the row


        if (index % DIAMONDS_ARRAY_WIDTH > 1 && Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 1 && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH - 1].kind && diamond.kind === diamonds[index - DIAMONDS_ARRAY_WIDTH - 2].kind) {
          return true;
        }

        return false;
      });

      if (!this.isPossibleToMove) {
        this.gameState.mixDiamonds();
      }
    }
  }, {
    key: "checkEndOfGame",
    value: function checkEndOfGame() {
      var _this5 = this;

      if (!this.gameState.getLeftMovement() && !this.gameState.getIsMoving() && !this.gameState.isSwaping) {
        _MediaEsm.media.isInLevel = false;

        _MediaEsm.media.stopBackgroundMusic();

        var isPlayerWinner = this.gameState.isPlayerWinner();
        var currentLevel = Number(this.gameState.level);

        if (isPlayerWinner && _gameLevelsEsm.gameLevels[currentLevel]) {
          if (!_UserDataEsm.userData.checkAvabilityLevel(currentLevel + 1)) {
            _UserDataEsm.userData.addNewLevel(currentLevel + 1);
          }
        }

        if (_UserDataEsm.userData.getHightScores(currentLevel) < this.gameState.getPlayerPionts()) {
          _UserDataEsm.userData.setHighScores(currentLevel, this.gameState.getPlayerPionts());
        }

        _ResultScreenEsm.resultScreen.viewResultScreen(isPlayerWinner, this.gameState.getPlayerPionts, this.gameState.level);
      } else {
        this.animationFrame = window.requestAnimationFrame(function () {
          return _this5.animate();
        });
      }
    }
  }, {
    key: "swap",
    value: function swap(firstDiamond, secendDiamond) {
      var _ref = [secendDiamond.kind, secendDiamond.alpha, secendDiamond.match, secendDiamond.x, secendDiamond.y, firstDiamond.kind, firstDiamond.alpha, firstDiamond.match, firstDiamond.x, firstDiamond.y];
      firstDiamond.kind = _ref[0];
      firstDiamond.alpha = _ref[1];
      firstDiamond.match = _ref[2];
      firstDiamond.x = _ref[3];
      firstDiamond.y = _ref[4];
      secendDiamond.kind = _ref[5];
      secendDiamond.alpha = _ref[6];
      secendDiamond.match = _ref[7];
      secendDiamond.x = _ref[8];
      secendDiamond.y = _ref[9];
      this.gameState.setIsMoving(true);
    }
  }, {
    key: "randomDiamondKind",
    value: function randomDiamondKind(level) {
      for (var boardIterator = 8; boardIterator < _gameLevelsEsm.gameLevels[level - 1].board.length; boardIterator++) {
        _gameLevelsEsm.gameLevels[level - 1].board[boardIterator].kind = Math.floor(Math.random() * _DaimondEsm.NUMBER_OF_DAIMONDS_TYPES);
      }
    }
  }]);

  return Game;
}(_CommonEsm.Common);

var game = new Game();
exports.game = game;