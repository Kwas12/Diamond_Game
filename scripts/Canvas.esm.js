import { Common } from "./Common.esm.js";
import { media } from "./Media.esm.js";

const GAME_SCREEN_ID = "js-game-screen";

export const CANVAS_RESOLUTION_MULTIPLAY = window.innerWidth / 640;

export const CANVAS_WIDTH = 640 * CANVAS_RESOLUTION_MULTIPLAY;
export const CANVAS_HEIGHT = 480 * CANVAS_RESOLUTION_MULTIPLAY;

class Canvas extends Common {
    constructor() {
        super(GAME_SCREEN_ID);
        this.configureCanvas();
    }

    configureCanvas() {
        this.context = this.element.getContext("2d");
        this.context.canvas.width = CANVAS_WIDTH;
        this.context.canvas.height = CANVAS_HEIGHT;
        this.context.font = `${20 * CANVAS_RESOLUTION_MULTIPLAY}px Arial`;
        this.context.fillStyle = "rgb(255,255,255)";
    }

    drawGameOnCanvas(gameState) {
        this.drawBackground();
        this.drawTextOnCanvas(
            gameState.pointsToWin,
            520 * CANVAS_RESOLUTION_MULTIPLAY,
            92 * CANVAS_RESOLUTION_MULTIPLAY
        );
        this.drawTextOnCanvas(
            gameState.getPlayerPionts(),
            520 * CANVAS_RESOLUTION_MULTIPLAY,
            163 * CANVAS_RESOLUTION_MULTIPLAY
        );
        this.drawTextOnCanvas(
            gameState.getLeftMovement(),
            520 * CANVAS_RESOLUTION_MULTIPLAY,
            234 * CANVAS_RESOLUTION_MULTIPLAY
        );
    }

    drawBackground() {
        this.context.drawImage(
            media.backgroundImage,
            0,
            0,
            CANVAS_WIDTH,
            CANVAS_HEIGHT
        );
    }

    drawTextOnCanvas(text, cordinateX, cordinateY) {
        this.context.fillText(`${text}`, cordinateX, cordinateY);
    }
}

export const canvas = new Canvas();
