import { Common, VISIBLE_SCREEN } from "./Common.esm.js";
import { DATA_LOADED_EVENT_NAME, loader } from "./Loader.esm.js";
import {
    EMPTY_BLOCK,
    gameLevels,
    GAME_BOARD_X_OFFSET,
    GAME_BOARD_Y_OFFSET,
} from "./gameLevels.esm.js";
import { canvas, CANVAS_RESOLUTION_MULTIPLAY } from "./Canvas.esm.js";
import { media } from "./Media.esm.js";
import { GameState } from "./GameState.esm.js";
import { mouseController } from "./MouseController.esm.js";
import {
    NUMBER_OF_DAIMONDS_TYPES,
    DIAMOND_SIZE,
    Diamond,
} from "./Daimond.esm.js";
import { resultScreen } from "./ResultScreen.esm.js";
import { userData } from "./UserData.esm.js";
import { mainMenu } from "./MainMenu.esm.js";

export const DIAMONDS_ARRAY_WIDTH = 8;
const DIAMONDS_ARRAY_HEIGHT = DIAMONDS_ARRAY_WIDTH + 1;
const SWAPING_SPEED = 8 * CANVAS_RESOLUTION_MULTIPLAY;
const LAST_ELEMENT_DIAMONDS_ARRAY =
    DIAMONDS_ARRAY_WIDTH * DIAMONDS_ARRAY_HEIGHT - 1;
const TRANSPARENCY_SPEED = 15;

class Game extends Common {
    constructor() {
        super();
    }

    playLevel(level) {
        this.randomDiamondKind(level);
        const { numberOfMovements, pointsToWin, board } = gameLevels[level - 1];

        window.removeEventListener(DATA_LOADED_EVENT_NAME, this.playLevel);
        this.gameState = new GameState(
            level,
            numberOfMovements,
            pointsToWin,
            board,
            media.diamondsSprites
        );
        this.changeVisibilityScreen(canvas.element, VISIBLE_SCREEN);
        this.changeVisibilityScreen(
            mainMenu.miniSettingsLayerElement,
            VISIBLE_SCREEN
        );
        media.isInLevel = true;
        media.playBackgroundMusic();
        this.animate();
    }

    animate() {
        this.handleMouseState();
        this.handleMouseClick();
        this.findMatches();
        this.moveDiamonds();
        this.hideAmination();
        this.countScores();
        this.revertSwap();
        this.clearMatched();
        canvas.drawGameOnCanvas(this.gameState);
        this.gameState.getGameBoard().forEach((diamond) => diamond.draw());
        this.checkPosibilityMovement();
        this.checkEndOfGame();
    }

    handleMouseState() {
        const isSwaping = !this.gameState.getIsSwaping();
        const isMoving = !this.gameState.getIsMoving();

        if (mouseController.clicked && isSwaping && isMoving) {
            mouseController.state++;
        }
    }

    handleMouseClick() {
        if (!mouseController.clicked) {
            return;
        }

        const xClicked = Math.floor(
            (mouseController.x * CANVAS_RESOLUTION_MULTIPLAY -
                GAME_BOARD_X_OFFSET) /
                DIAMOND_SIZE
        );

        const yClicked = Math.floor(
            (mouseController.y * CANVAS_RESOLUTION_MULTIPLAY -
                GAME_BOARD_Y_OFFSET) /
                DIAMOND_SIZE
        );

        if (
            !yClicked ||
            xClicked >= DIAMONDS_ARRAY_WIDTH ||
            yClicked >= DIAMONDS_ARRAY_HEIGHT
        ) {
            mouseController.state = 0;
            return;
        }

        if (mouseController.state === 1) {
            mouseController.firstClick = {
                x: xClicked,
                y: yClicked,
            };
        } else if (mouseController.state === 2) {
            mouseController.secendClick = {
                x: xClicked,
                y: yClicked,
            };

            mouseController.state = 0;

            if (
                Math.abs(
                    mouseController.firstClick.x - mouseController.secendClick.x
                ) +
                    Math.abs(
                        mouseController.firstClick.y -
                            mouseController.secendClick.y
                    ) !==
                1
            ) {
                return;
            }
            this.swapDiamonds();

            media.playSwapSound();
            this.gameState.setIsSwaping(true);
            this.gameState.decreasePointsMovement();
        }

        mouseController.clicked = false;
    }

    swapDiamonds() {
        const firstDiamond =
            mouseController.firstClick.y * DIAMONDS_ARRAY_WIDTH +
            mouseController.firstClick.x;
        const secendDiamond =
            mouseController.secendClick.y * DIAMONDS_ARRAY_WIDTH +
            mouseController.secendClick.x;

        this.swap(
            this.gameState.getGameBoard()[firstDiamond],
            this.gameState.getGameBoard()[secendDiamond]
        );
    }

    findMatches() {
        this.gameState.getGameBoard().forEach((diamond, index, diamonds) => {
            if (
                diamond.kind === EMPTY_BLOCK ||
                index < DIAMONDS_ARRAY_WIDTH ||
                index === LAST_ELEMENT_DIAMONDS_ARRAY
            ) {
                return;
            }

            if (
                diamonds[index - 1].kind === diamond.kind &&
                diamonds[index + 1].kind === diamond.kind
            ) {
                if (
                    Math.floor((index - 1) / DIAMONDS_ARRAY_WIDTH) ===
                    Math.floor((index + 1) / DIAMONDS_ARRAY_WIDTH)
                ) {
                    for (
                        let diamondIndex = -1;
                        diamondIndex <= 1;
                        diamondIndex++
                    ) {
                        diamonds[index + diamondIndex].match++;
                    }
                }
            }
            if (
                index >= DIAMONDS_ARRAY_WIDTH &&
                index <
                    LAST_ELEMENT_DIAMONDS_ARRAY - DIAMONDS_ARRAY_WIDTH + 1 &&
                diamonds[index - DIAMONDS_ARRAY_WIDTH].kind === diamond.kind &&
                diamonds[index + DIAMONDS_ARRAY_WIDTH].kind === diamond.kind
            ) {
                if (
                    (index - DIAMONDS_ARRAY_WIDTH) % DIAMONDS_ARRAY_WIDTH ===
                    (index + DIAMONDS_ARRAY_WIDTH) % DIAMONDS_ARRAY_WIDTH
                ) {
                    for (
                        let diamondIndex = -DIAMONDS_ARRAY_WIDTH;
                        diamondIndex <= DIAMONDS_ARRAY_WIDTH;
                        diamondIndex += DIAMONDS_ARRAY_WIDTH
                    ) {
                        diamonds[index + diamondIndex].match++;
                    }
                }
            }
        });
    }

    moveDiamonds() {
        this.gameState.setIsMoving(false);
        this.gameState.getGameBoard().forEach((diamond) => {
            let dx;
            let dy;

            for (let speedSwap = 0; speedSwap < SWAPING_SPEED; speedSwap++) {
                dx = diamond.x - diamond.row * DIAMOND_SIZE;
                dy = diamond.y - diamond.column * DIAMOND_SIZE;
                if (dx) {
                    diamond.x -= dx / Math.abs(dx);
                }

                if (dy) {
                    diamond.y -= dy / Math.abs(dy);
                }
            }
            if (dx || dy) {
                this.gameState.setIsMoving(true);
            }
        });
    }

    hideAmination() {
        if (this.gameState.getIsMoving()) {
            return;
        }

        this.gameState.getGameBoard().forEach((diamond) => {
            if (diamond.match && diamond.alpha > TRANSPARENCY_SPEED) {
                diamond.alpha -= TRANSPARENCY_SPEED;
                this.gameState.setIsMoving(true);
            }
        });
    }

    countScores() {
        this.scores = 0;
        this.gameState
            .getGameBoard()
            .forEach((diamond) => (this.scores += diamond.match > 0 ? 1 : 0));
        if (!this.gameState.getIsMoving() && this.scores) {
            this.gameState.increasePlayerPionts(this.scores);
        }
    }

    revertSwap() {
        if (this.gameState.getIsSwaping() && !this.gameState.getIsMoving()) {
            if (!this.scores) {
                this.swapDiamonds();
                this.gameState.increasePointsMovement();
            }
            this.gameState.setIsSwaping(false);
        }
    }

    clearMatched() {
        if (this.gameState.getIsMoving()) {
            return;
        }

        this.gameState.getGameBoard().forEach((_, idx, diamonds) => {
            const index = diamonds.length - 1 - idx;
            const column = Math.floor(index / DIAMONDS_ARRAY_WIDTH);
            const row = Math.floor(index % DIAMONDS_ARRAY_WIDTH);

            if (diamonds[index].match) {
                for (let counter = column; counter >= 0; counter--) {
                    if (!diamonds[counter * DIAMONDS_ARRAY_WIDTH + row].match) {
                        this.swap(
                            diamonds[counter * DIAMONDS_ARRAY_WIDTH + row],
                            diamonds[index]
                        );
                        break;
                    }
                }
            }
        });

        this.gameState.getGameBoard().forEach((diamond, index) => {
            const row = Math.floor(index % DIAMONDS_ARRAY_WIDTH) * DIAMOND_SIZE;

            if (index < DIAMONDS_ARRAY_WIDTH) {
                diamond.kind = EMPTY_BLOCK;
                diamond.match = 0;
            } else if (diamond.match || diamond.kind === EMPTY_BLOCK) {
                diamond.kind = Math.floor(
                    Math.random() * NUMBER_OF_DAIMONDS_TYPES
                );
                diamond.y = 0;
                diamond.x = row;
                diamond.match = 0;
                diamond.alpha = 255;
            }
        });
    }

    checkPosibilityMovement() {
        if (this.gameState.getIsMoving()) {
            return;
        }

        this.isPossibleToMove = this.gameState
            .getGameBoard()
            .some((diamond, index, diamonds) => {
                if (diamond.kind === EMPTY_BLOCK) {
                    return false;
                }

                //move right =>
                //check in row
                if (
                    index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 3 &&
                    diamond.kind === diamonds[index + 2].kind &&
                    diamond.kind === diamonds[index + 3].kind
                ) {
                    return true;
                }
                //check if is on the moidle of the column
                if (
                    index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 1 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 1 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) <
                        DIAMONDS_ARRAY_WIDTH - 1 &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH + 1].kind &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH + 1].kind
                ) {
                    return true;
                }
                //check if is on the top of the column
                if (
                    index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 1 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) <
                        DIAMONDS_ARRAY_HEIGHT - 2 &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH + 1].kind &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH * 2 + 1].kind
                ) {
                    return true;
                }
                //check if is on the bottom of the column
                if (
                    index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 1 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 2 &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH + 1].kind &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH * 2 + 1].kind
                ) {
                    return true;
                }

                //move left =>
                //check on row
                if (
                    index % DIAMONDS_ARRAY_WIDTH > 2 &&
                    diamond.kind === diamonds[index - 2].kind &&
                    diamond.kind === diamonds[index - 3].kind
                ) {
                    return true;
                }
                //check if is in midle of the column
                if (
                    index % DIAMONDS_ARRAY_WIDTH > 2 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 1 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) <
                        DIAMONDS_ARRAY_HEIGHT - 1 &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH - 1].kind &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH - 1].kind
                ) {
                    return true;
                }

                //check if is on the top of the column
                if (
                    index % DIAMONDS_ARRAY_WIDTH > 0 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) >
                        DIAMONDS_ARRAY_HEIGHT - 2 &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH - 1].kind &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH * 2 - 1].kind
                ) {
                    return true;
                }

                //check if is on the bottom of the column
                if (
                    index % DIAMONDS_ARRAY_WIDTH > 0 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 2 &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH - 1].kind &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH * 2 - 1].kind
                ) {
                    return true;
                }

                //move down=>
                //check if is in column

                if (
                    Math.floor(index / DIAMONDS_ARRAY_HEIGHT) <
                        DIAMONDS_ARRAY_HEIGHT - 3 &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH * 2].kind &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH * 3].kind
                ) {
                    return true;
                }

                //check if is in the midle of the row
                if (
                    index % DIAMONDS_ARRAY_WIDTH &&
                    index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 1 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) <
                        DIAMONDS_ARRAY_HEIGHT - 1 &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH + 1].kind &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH - 1].kind
                ) {
                    return true;
                }
                //check if is in the left edge of the row
                if (
                    index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 2 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) <
                        DIAMONDS_ARRAY_HEIGHT - 1 &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH + 1].kind &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH + 2].kind
                ) {
                    return true;
                }
                //check if is in the right edge of the row
                if (
                    index % DIAMONDS_ARRAY_WIDTH > 1 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) <
                        DIAMONDS_ARRAY_HEIGHT - 1 &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH - 1].kind &&
                    diamond.kind ===
                        diamonds[index + DIAMONDS_ARRAY_WIDTH - 2].kind
                ) {
                    return true;
                }

                //move up =>
                //check in column

                if (
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 3 &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH * 2].kind &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH * 3].kind
                ) {
                    return true;
                }

                //check if is in the midle of the row

                if (
                    index % DIAMONDS_ARRAY_WIDTH &&
                    index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 1 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 1 &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH + 1].kind &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH - 1].kind
                ) {
                    return true;
                }
                //check if is in the left of the row
                if (
                    index % DIAMONDS_ARRAY_WIDTH < DIAMONDS_ARRAY_WIDTH - 2 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 1 &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH + 1].kind &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH + 2].kind
                ) {
                    return true;
                }
                //check if is in the right of the row
                if (
                    index % DIAMONDS_ARRAY_WIDTH > 1 &&
                    Math.floor(index / DIAMONDS_ARRAY_WIDTH) > 1 &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH - 1].kind &&
                    diamond.kind ===
                        diamonds[index - DIAMONDS_ARRAY_WIDTH - 2].kind
                ) {
                    return true;
                }
                return false;
            });

        if (!this.isPossibleToMove) {
            this.gameState.mixDiamonds();
        }
    }

    checkEndOfGame() {
        if (
            !this.gameState.getLeftMovement() &&
            !this.gameState.getIsMoving() &&
            !this.gameState.isSwaping
        ) {
            media.isInLevel = false;
            media.stopBackgroundMusic();
            const isPlayerWinner = this.gameState.isPlayerWinner();
            const currentLevel = Number(this.gameState.level);

            if (isPlayerWinner && gameLevels[currentLevel]) {
                if (!userData.checkAvabilityLevel(currentLevel + 1)) {
                    userData.addNewLevel(currentLevel + 1);
                }
            }

            if (
                userData.getHightScores(currentLevel) <
                this.gameState.getPlayerPionts()
            ) {
                userData.setHighScores(
                    currentLevel,
                    this.gameState.getPlayerPionts()
                );
            }

            resultScreen.viewResultScreen(
                isPlayerWinner,
                this.gameState.getPlayerPionts,
                this.gameState.level
            );
        } else {
            this.animationFrame = window.requestAnimationFrame(() =>
                this.animate()
            );
        }
    }

    swap(firstDiamond, secendDiamond) {
        [
            firstDiamond.kind,
            firstDiamond.alpha,
            firstDiamond.match,
            firstDiamond.x,
            firstDiamond.y,
            secendDiamond.kind,
            secendDiamond.alpha,
            secendDiamond.match,
            secendDiamond.x,
            secendDiamond.y,
        ] = [
            secendDiamond.kind,
            secendDiamond.alpha,
            secendDiamond.match,
            secendDiamond.x,
            secendDiamond.y,
            firstDiamond.kind,
            firstDiamond.alpha,
            firstDiamond.match,
            firstDiamond.x,
            firstDiamond.y,
        ];

        this.gameState.setIsMoving(true);
    }

    randomDiamondKind(level) {
        for (
            let boardIterator = 8;
            boardIterator < gameLevels[level - 1].board.length;
            boardIterator++
        ) {
            gameLevels[level - 1].board[boardIterator].kind = Math.floor(
                Math.random() * NUMBER_OF_DAIMONDS_TYPES
            );
        }
    }
}

export const game = new Game();
