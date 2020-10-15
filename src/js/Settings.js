export default class Settings {
  constructor() {
    this._default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.user = new Map();
    this.themes = new Set(['light', 'gray', 'dark']);
    this.music = new Set(['trance', 'pop', 'rock', 'chillout', 'off']);
    this.difficulties = new Set(['easy', 'normal', 'hard', 'nightmare']);
  }

  changeSetting(setting, value) {
    let propName;
    switch (setting) {
      case 'theme':
        propName = 'themes';
        break;
      case 'music':
        propName = 'music';
        break;
      case 'difficulty':
        propName = 'difficulties';
        break;
      default:
        throw new Error("This setting doesn't exist");
    }
    if (this[propName].has(value)) {
      this.user.set(setting, value);
    } else {
      throw new Error("This value doesn't exist");
    }
  }

  get settings() {
    let currentSettings = new Map();

    for (let key of this.default.keys()) {
      let userSetting = this.user.get(key);

      if (userSetting) {
        currentSettings.set(key, userSetting);
      } else {
        currentSettings.set(key, this.default.get(key));
      }
    }

    return currentSettings;
  }

  get default() {
    return this._default;
  }

  set default(value) {
    throw new Error('Default is read only');
  }
}
