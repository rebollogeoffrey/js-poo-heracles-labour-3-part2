
class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }

  getDistance(attacker, defender) {
    const brutRange = Math.sqrt(Math.pow((attacker.x - attacker.y), 2) + Math.pow((defender.x - defender.y), 2));
    const fixedRange = brutRange.toFixed(2);

    return fixedRange;
  }

  isTouchable(attacker, defender) {
    const distance = this.getDistance(attacker, defender);
    return (distance > attacker.getRange()) ? false : true;
  }
}
