export default class Team {
  constructor(...characters) {
    this.members = characters;
  }

  _checkCharacter(character) {
    const charTypes = this.members.map((elem) => elem.type);
    return charTypes.includes(character.type);
  }

  add(character) {
    if (this._checkCharacter(character)) {
      throw new Error('Такой персонаж уже в команде');
    }
    this.members.push(character);
  }

  addAll(...newCharacters) {
    newCharacters.forEach((elem) => {
      if (!this._checkCharacter(elem)) {
        this.members.push(elem);
      }
    });
  }

  * [Symbol.iterator]() {
    yield* this.members;
  }
}
