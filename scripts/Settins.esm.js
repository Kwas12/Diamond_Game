import { mainMenu } from "./MainMenu.esm.js";
import { Common, HIDDEN_SCREEN, VISIBLE_SCREEN } from "./Common.esm.js";
import { media } from "./Media.esm.js";

const GAME_SETTINGS_ID = "js-settings-screen";

const GAME_LAYER_SETINGS_MUSIC_ON_OFF_ID = "js-music-on-off";
const GAME_LAYER_SETINGS_MUSIC_UP_ID = "js-music-volume-increase";
const GAME_LAYER_SETINGS_MUSIC_DOWN_ID = "js-music-volume-decrease";
const GAME_LAYER_SETINGS_SOUND_ON_OFF_ID = "js-sound-on-off";
const GAME_LAYER_SETINGS_SOUND_UP_ID = "js-sound-volume-increase";
const GAME_LAYER_SETINGS_SOUND_DOWN_ID = "js-sound-volume-decrease";
const GAME_SETINGS_EXIT_ID = "js-settings-screen-exit-button";

class Settings extends Common {
    constructor() {
        super(GAME_SETTINGS_ID);
        this.bindToElements();
    }

    bindToElements() {
        const exitSettingsElement = this.bindToElement(GAME_SETINGS_EXIT_ID);

        const musicOnOffElement = this.bindToElement(
            GAME_LAYER_SETINGS_MUSIC_ON_OFF_ID
        );

        const musicVolumeUpElement = this.bindToElement(
            GAME_LAYER_SETINGS_MUSIC_UP_ID
        );

        const musicVolumeDownElement = this.bindToElement(
            GAME_LAYER_SETINGS_MUSIC_DOWN_ID
        );

        const soundOnOffElement = this.bindToElement(
            GAME_LAYER_SETINGS_SOUND_ON_OFF_ID
        );

        const soundVolumeUpElement = this.bindToElement(
            GAME_LAYER_SETINGS_SOUND_UP_ID
        );

        const soundVolumeDownElement = this.bindToElement(
            GAME_LAYER_SETINGS_SOUND_DOWN_ID
        );

        exitSettingsElement.addEventListener("click", () =>
            this.exitVisibleScreen()
        );

        musicOnOffElement.addEventListener("click", () =>
            media.toggleMusicOnOff()
        );

        musicVolumeUpElement.addEventListener("click", () =>
            media.increaseMusicVolume()
        );

        musicVolumeDownElement.addEventListener("click", () =>
            media.decreaseMusicVolume()
        );

        soundOnOffElement.addEventListener("click", () =>
            media.toggleSoundOnOff()
        );

        soundVolumeUpElement.addEventListener("click", () =>
            media.increaseSoundVolume()
        );

        soundVolumeDownElement.addEventListener("click", () =>
            media.decreaseSoundVolume()
        );
    }

    exitVisibleScreen() {
        this.changeVisibilityScreen(this.element, HIDDEN_SCREEN);
        this.changeVisibilityScreen(mainMenu.element, VISIBLE_SCREEN);
    }
}

export const settings = new Settings();
