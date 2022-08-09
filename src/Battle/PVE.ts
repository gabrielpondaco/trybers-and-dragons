import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    _player1: Fighter, 
    private enemy: (Fighter | SimpleFighter)[],
  ) {
    super(_player1);
  }

  fight(): number {
    for (let index = this.enemy.length - 1; index > 0; index -= 1) {
      while (this.enemy[index].lifePoints > -1 && this.player.lifePoints > -1) {
        this.player.attack(this.enemy[index]);
        this.enemy[index].attack(this.player);
      }
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}