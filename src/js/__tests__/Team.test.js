import Team from '../Team';

test('Add', () => {
  const team = new Team();
  team.add({ name: 'Петька' });
  team.add({ name: 'Васька' });
  expect(team.toArray()).toEqual([{ name: 'Петька' }, { name: 'Васька' }]);
});

test('Add twice', () => {
  function addTwiceFn() {
    const team = new Team();
    let vasek = { name: 'Василий' };
    team.add(vasek);
    team.add(vasek);
  }
  expect(addTwiceFn).toThrow(Error('Такой персонаж уже есть'));
});

test('Add all', () => {
  const team = new Team();
  team.addAll({ name: 'Петька' }, { name: 'Васька' }, { name: 'Кузя' });
  expect(team.toArray()).toEqual([
    { name: 'Петька' },
    { name: 'Васька' },
    { name: 'Кузя' },
  ]);
});

test('Add all with repeat', () => {
  const team = new Team();
  let vasek = { name: 'Василий' },
    petya = { name: 'Петька' },
    kuzya = { name: 'Кузя' };
  team.addAll(vasek, petya, kuzya, vasek); // vasek добавляется дважды, ошибки и дублирования не происходит
  expect(team.toArray()).toEqual([
    { name: 'Василий' },
    { name: 'Петька' },
    { name: 'Кузя' },
  ]);
});

test('To array', () => {
  const team = new Team();
  team.addAll({ name: 'Петька' }, { name: 'Васька' }, { name: 'Кузя' });
  let teamArr = team.toArray();

  expect(teamArr.length).toBe(3);
  expect(teamArr).toEqual([
    { name: 'Петька' },
    { name: 'Васька' },
    { name: 'Кузя' },
  ]);
});
