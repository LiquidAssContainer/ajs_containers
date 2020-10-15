export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Такой персонаж уже есть');
    }
    this.members.add(char);
  }

  addAll(...members) {
    for (let char of members) {
      this.members.add(char);
    }
  }

  toArray() {
    let arr = [];
    for (let item of this.members) {
      arr.push(item);
    }
    return arr;
  }
}
