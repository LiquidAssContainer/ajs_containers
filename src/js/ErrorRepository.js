export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [401, 'Четыре сотни плюс один'],
      [404, 'Not found'],
      [500, 'Что-то не так, короче'],
      [501, 'Описание какой-то ошибки'],
      [502, 'Пятьсот два'],
      [999, 'Почти тысяча'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
