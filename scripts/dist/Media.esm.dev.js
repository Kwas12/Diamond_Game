"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Media =
/*#__PURE__*/
function () {
  function Media() {
    _classCallCheck(this, Media);

    this._backgroundImage = null;
    this._diamondsSprites = null;
    this.musicVolume = 0.1;
    this.soundVolume = 0.2;
    this.allowedMusic = true;
    this.allowedSound = true;
    this._swapSound = null;
    this._backgroundMusic = null;
    this.isInLevel = false;
  }

  _createClass(Media, [{
    key: "increaseMusicVolume",
    value: function increaseMusicVolume() {
      this.musicVolume += 0.1;

      if (this.musicVolume > 1) {
        this.musicVolume = 1;
      }

      if (this._backgroundMusic) {
        this._backgroundMusic.volume = this.musicVolume;
      }
    }
  }, {
    key: "decreaseMusicVolume",
    value: function decreaseMusicVolume() {
      this.musicVolume -= 0.1;

      if (this.musicVolume < 0) {
        this.musicVolume = 0;
      }

      if (this._backgroundMusic) {
        this._backgroundMusic.volume = this.musicVolume;
      }
    }
  }, {
    key: "increaseSoundVolume",
    value: function increaseSoundVolume() {
      this.soundVolume += 0.1;

      if (this.soundVolume > 1) {
        this.soundVolume = 1;
      }

      if (this._swapSound) {
        this._swapSound.volume = this.soundVolume;
      }
    }
  }, {
    key: "decreaseSoundVolume",
    value: function decreaseSoundVolume() {
      this.soundVolume -= 0.1;

      if (this.soundVolume < 0) {
        this.soundVolume = 0;
      }

      if (this._swapSound) {
        this._swapSound.volume = this.soundVolume;
      }
    }
  }, {
    key: "playBackgroundMusic",
    value: function playBackgroundMusic() {
      if (!this.allowedMusic) {
        return;
      }

      if (this._backgroundMusic) {
        this._backgroundMusic.loop = true;

        this._backgroundMusic.play();
      }
    }
  }, {
    key: "stopBackgroundMusic",
    value: function stopBackgroundMusic() {
      if (this._backgroundMusic) {
        this._backgroundMusic.pause();
      }
    }
  }, {
    key: "playSwapSound",
    value: function playSwapSound() {
      if (!this.allowedSound) {
        return;
      }

      this._swapSound.play();
    }
  }, {
    key: "toggleMusicOnOff",
    value: function toggleMusicOnOff() {
      if (this.allowedMusic) {
        this.allowedMusic = false;
        this.stopBackgroundMusic();
      } else {
        this.allowedMusic = true;
        this.playBackgroundMusic();
      }
    }
  }, {
    key: "toggleSoundOnOff",
    value: function toggleSoundOnOff() {
      if (this.allowedSound) {
        this.allowedSound = false;
      } else {
        this.allowedSound = true;
      }
    }
  }, {
    key: "swapSound",
    set: function set(sound) {
      this._swapSound = sound;
      this._swapSound.volume = this.soundVolume;
    },
    get: function get() {
      return !!this._swapSound;
    }
  }, {
    key: "backgroundMusic",
    set: function set(music) {
      this._backgroundMusic = music;
      this._backgroundMusic.volume = this.musicVolume;
    },
    get: function get() {
      return !!this._backgroundMusic;
    }
  }, {
    key: "backgroundImage",
    set: function set(imageObject) {
      if (!imageObject instanceof Image) {
        return;
      }

      this._backgroundImage = imageObject;
    },
    get: function get() {
      return this._backgroundImage;
    }
  }, {
    key: "diamondsSprites",
    set: function set(imageObject) {
      if (!imageObject instanceof Image) {
        return;
      }

      this._diamondsSprites = imageObject;
    },
    get: function get() {
      return this._diamondsSprites;
    }
  }]);

  return Media;
}();

var media = new Media();
exports.media = media;