import Settings from '../Settings';

test('Trying to rewrite default', () => {
  const settings = new Settings();
  function errorFn() {
    settings.default = 3;
  }
  expect(errorFn).toThrow(Error('Default is read only'));
});

test('Get default settings', () => {
  const settings = new Settings();
  let result = settings.settings;
  let expected = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(result).toEqual(expected);
});

test('Test changeSetting function 1', () => {
  const settings = new Settings();
  settings.changeSetting('music', 'rock');
  settings.changeSetting('difficulty', 'nightmare');
  settings.changeSetting('theme', 'light');

  let expected = new Map([
    ['theme', 'light'],
    ['music', 'rock'],
    ['difficulty', 'nightmare'],
  ]);

  expect(settings.settings).toEqual(expected);
});

test('Test changeSetting function 2', () => {
  const settings = new Settings();
  settings.changeSetting('music', 'rock');
  settings.changeSetting('difficulty', 'normal');

  let expected = new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'normal'],
  ]);

  expect(settings.settings).toEqual(expected);
});

test('Get errors', () => {
  const settings = new Settings();

  expect(() => settings.changeSetting('misic', 'rock')).toThrow(Error("This setting doesn't exist"));
  expect(() => settings.changeSetting('theme', 'superdark')).toThrow(Error("This value doesn't exist"));
});
