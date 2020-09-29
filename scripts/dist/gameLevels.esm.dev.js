"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameLevels = exports.GAME_BOARD_Y_OFFSET = exports.GAME_BOARD_X_OFFSET = exports.EMPTY_BLOCK = void 0;

var _DaimondEsm = require("./Daimond.esm.js");

var _CanvasEsm = require("./Canvas.esm.js");

var EMPTY_BLOCK = 99;
exports.EMPTY_BLOCK = EMPTY_BLOCK;
var GAME_BOARD_X_OFFSET = 40 * _CanvasEsm.CANVAS_RESOLUTION_MULTIPLAY;
exports.GAME_BOARD_X_OFFSET = GAME_BOARD_X_OFFSET;
var GAME_BOARD_Y_OFFSET = 10 * _CanvasEsm.CANVAS_RESOLUTION_MULTIPLAY;
exports.GAME_BOARD_Y_OFFSET = GAME_BOARD_Y_OFFSET;
var gameLevels = [{
  level: 1,
  numberOfMovements: 30,
  //30
  pointsToWin: 70,
  //70
  board: [{
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 1,
    kind: 1
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 1,
    kind: 1
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 1,
    kind: 0
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 1,
    kind: 3
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 1,
    kind: 4
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 1,
    kind: 5
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 1,
    kind: 5
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 1,
    kind: 3
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 2,
    kind: 0
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 2,
    kind: 0
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 2,
    kind: 1
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 2,
    kind: 0
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 2,
    kind: 0
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 2,
    kind: 1
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 2,
    kind: 1
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 2,
    kind: 2
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 3,
    kind: 0
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 3,
    kind: 4
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 3,
    kind: 4
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 3,
    kind: 5
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 3,
    kind: 5
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 3,
    kind: 2
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 3,
    kind: 2
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 3,
    kind: 5
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 4,
    kind: 4
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 4,
    kind: 3
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 4,
    kind: 3
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 4,
    kind: 2
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 4,
    kind: 2
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 4,
    kind: 1
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 4,
    kind: 1
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 4,
    kind: 0
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 5,
    kind: 1
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 5,
    kind: 3
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 5,
    kind: 5
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 5,
    kind: 2
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 5,
    kind: 4
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 5,
    kind: 5
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 5,
    kind: 0
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 5,
    kind: 1
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 6,
    kind: 4
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 6,
    kind: 5
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 6,
    kind: 3
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 6,
    kind: 0
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 6,
    kind: 5
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 6,
    kind: 4
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 6,
    kind: 3
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 6,
    kind: 2
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 7,
    kind: 0
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 7,
    kind: 1
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 7,
    kind: 2
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 7,
    kind: 3
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 7,
    kind: 4
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 7,
    kind: 5
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 7,
    kind: 3
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 7,
    kind: 1
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 8,
    kind: 5
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 8,
    kind: 1
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 8,
    kind: 5
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 8,
    kind: 2
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 8,
    kind: 3
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 8,
    kind: 4
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 8,
    kind: 5
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 8,
    kind: 1
  }]
}, {
  level: 2,
  numberOfMovements: 2,
  //30
  pointsToWin: 1000,
  //7000
  board: [{
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 1,
    kind: 1
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 1,
    kind: 1
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 1,
    kind: 0
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 1,
    kind: 3
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 1,
    kind: 4
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 1,
    kind: 5
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 1,
    kind: 5
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 1,
    kind: 3
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 2,
    kind: 0
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 2,
    kind: 0
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 2,
    kind: 1
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 2,
    kind: 0
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 2,
    kind: 0
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 2,
    kind: 1
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 2,
    kind: 1
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 2,
    kind: 2
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 3,
    kind: 0
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 3,
    kind: 4
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 3,
    kind: 4
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 3,
    kind: 5
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 3,
    kind: 5
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 3,
    kind: 2
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 3,
    kind: 2
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 3,
    kind: 5
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 4,
    kind: 4
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 4,
    kind: 3
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 4,
    kind: 3
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 4,
    kind: 2
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 4,
    kind: 2
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 4,
    kind: 1
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 4,
    kind: 1
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 4,
    kind: 0
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 5,
    kind: 1
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 5,
    kind: 3
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 5,
    kind: 5
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 5,
    kind: 2
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 5,
    kind: 4
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 5,
    kind: 5
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 5,
    kind: 0
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 5,
    kind: 1
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 6,
    kind: 4
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 6,
    kind: 5
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 6,
    kind: 3
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 6,
    kind: 0
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 6,
    kind: 5
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 6,
    kind: 4
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 6,
    kind: 3
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 6,
    kind: 2
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 7,
    kind: 0
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 7,
    kind: 1
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 7,
    kind: 2
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 7,
    kind: 3
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 7,
    kind: 4
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 7,
    kind: 5
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 7,
    kind: 3
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 7,
    kind: 1
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 8,
    kind: 5
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 8,
    kind: 1
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 8,
    kind: 5
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 8,
    kind: 2
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 8,
    kind: 3
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 8,
    kind: 4
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 8,
    kind: 5
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 8,
    kind: 1
  }]
}, {
  level: 3,
  numberOfMovements: 2,
  //30
  pointsToWin: 1000,
  //7000
  board: [{
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: -1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 0,
    kind: EMPTY_BLOCK
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 1,
    kind: 1
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 1,
    kind: 1
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 1,
    kind: 0
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 1,
    kind: 3
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 1,
    kind: 4
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 1,
    kind: 5
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 1,
    kind: 5
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 0 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 1,
    kind: 3
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 2,
    kind: 0
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 2,
    kind: 0
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 2,
    kind: 1
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 2,
    kind: 0
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 2,
    kind: 0
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 2,
    kind: 1
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 2,
    kind: 1
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 1 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 2,
    kind: 2
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 3,
    kind: 0
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 3,
    kind: 4
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 3,
    kind: 4
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 3,
    kind: 5
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 3,
    kind: 5
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 3,
    kind: 2
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 3,
    kind: 2
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 2 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 3,
    kind: 5
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 4,
    kind: 4
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 4,
    kind: 3
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 4,
    kind: 3
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 4,
    kind: 2
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 4,
    kind: 2
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 4,
    kind: 1
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 4,
    kind: 1
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 3 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 4,
    kind: 0
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 5,
    kind: 1
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 5,
    kind: 3
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 5,
    kind: 5
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 5,
    kind: 2
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 5,
    kind: 4
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 5,
    kind: 5
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 5,
    kind: 0
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 4 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 5,
    kind: 1
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 6,
    kind: 4
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 6,
    kind: 5
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 6,
    kind: 3
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 6,
    kind: 0
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 6,
    kind: 5
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 6,
    kind: 4
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 6,
    kind: 3
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 5 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 6,
    kind: 2
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 7,
    kind: 0
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 7,
    kind: 1
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 7,
    kind: 2
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 7,
    kind: 3
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 7,
    kind: 4
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 7,
    kind: 5
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 7,
    kind: 3
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 6 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 7,
    kind: 1
  }, {
    x: 0 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 0,
    column: 8,
    kind: 5
  }, {
    x: 1 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 1,
    column: 8,
    kind: 1
  }, {
    x: 2 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 2,
    column: 8,
    kind: 5
  }, {
    x: 3 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 3,
    column: 8,
    kind: 2
  }, {
    x: 4 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 4,
    column: 8,
    kind: 3
  }, {
    x: 5 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 5,
    column: 8,
    kind: 4
  }, {
    x: 6 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 6,
    column: 8,
    kind: 5
  }, {
    x: 7 * _DaimondEsm.DIAMOND_SIZE,
    y: 7 * _DaimondEsm.DIAMOND_SIZE + GAME_BOARD_Y_OFFSET,
    row: 7,
    column: 8,
    kind: 1
  }]
}];
exports.gameLevels = gameLevels;