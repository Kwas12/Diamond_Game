import { Common, HIDDEN_SCREEN, VISIBLE_SCREEN } from "./Common.esm.js";
import { levelSelect } from "./LevelSelect.esm.js";
import {
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    CANVAS_RESOLUTION_MULTIPLAY,
} from "./Canvas.esm.js";
import { settings } from "./Settins.esm.js";

export const SCALE_PROPERTY = "--scale-value";
const START_SCREEN_SETTINGS_BUTTON_ID = "js-setings-button";
const START_SCREEN_GAME_BUTTON_ID = "js-start-game";
const START_SCREEN_ID = "js-start-screen";

const MINI_SETINGS_LAYER_ID = "js-mini-settings-layer";
const MINI_SETINGS_BUTTON_ID = "js-mini-settings-button";

class MainMenu extends Common {
    constructor() {
        super(START_SCREEN_ID);
        this.bindToGameElements();
        this.resizeGameWindow();
        window.addEventListener("resize", this.resizeGameWindow);
    }

    bindToGameElements() {
        const gameStartButton = this.bindToElement(START_SCREEN_GAME_BUTTON_ID);
        const gameSettingsButton = this.bindToElement(
            START_SCREEN_SETTINGS_BUTTON_ID
        );
        const miniSettingsButtonId = this.bindToElement(MINI_SETINGS_BUTTON_ID);

        this.miniSettingsLayerElement = this.bindToElement(
            MINI_SETINGS_LAYER_ID
        );

        gameStartButton.addEventListener("click", () => this.showLevelScreen());
        gameSettingsButton.addEventListener("click", () =>
            this.showSettingsSceen()
        );

        miniSettingsButtonId.addEventListener("click", () =>
            this.showSettingsSceen()
        );
    }

    showLevelScreen() {
        levelSelect.createButtons();
        this.changeVisibilityScreen(this.element, HIDDEN_SCREEN);
        this.changeVisibilityScreen(levelSelect.element, VISIBLE_SCREEN);
        console.log("Wybór poziomu");
    }

    showSettingsSceen() {
        this.changeVisibilityScreen(this.element, HIDDEN_SCREEN);
        this.changeVisibilityScreen(settings.element, VISIBLE_SCREEN);
    }

    resizeGameWindow() {
        const { innerWidth: width, innerHeight: height } = window;
        const scale =
            Math.min(width / CANVAS_HEIGHT, height / CANVAS_WIDTH) *
            CANVAS_RESOLUTION_MULTIPLAY;

        document.documentElement.style.setProperty(SCALE_PROPERTY, scale);
    }
}

export const mainMenu = new MainMenu();
