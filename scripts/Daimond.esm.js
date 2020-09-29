import { GAME_BOARD_X_OFFSET, GAME_BOARD_Y_OFFSET } from "./gameLevels.esm.js";
import { Sprite } from "./Sprite.esm.js";
import { CANVAS_RESOLUTION_MULTIPLAY } from "./Canvas.esm.js";

const DIAMOND_ORGINAL_SIZE = 256;
export const DIAMOND_SIZE = 48 * CANVAS_RESOLUTION_MULTIPLAY;
export const NUMBER_OF_DAIMONDS_TYPES = 6;

const DIAMOND_ZOOM = DIAMOND_SIZE / DIAMOND_ORGINAL_SIZE;

export class Diamond extends Sprite {
    constructor(x, y, row, column, kind, diamondsSpriteImage) {
        const offset = {
            x: GAME_BOARD_X_OFFSET,
            y: GAME_BOARD_Y_OFFSET,
        };
        super(
            x,
            y,
            DIAMOND_ORGINAL_SIZE,
            DIAMOND_ORGINAL_SIZE,
            diamondsSpriteImage,
            NUMBER_OF_DAIMONDS_TYPES,
            offset
        );

        this.row = row;
        this.column = column;
        this.kind = kind;
        this.match = 0;
    }

    draw() {
        super.draw(this.kind, DIAMOND_ZOOM);
    }
}
