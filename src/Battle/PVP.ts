import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player2: Fighter,
    _player1: Fighter, 
  ) {
    super(_player1);
  }

  fight(): number {
    while (this._player2.lifePoints > -1 && this.player.lifePoints > -1) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
    return this._player2.lifePoints === -1 ? -1 : 1;
  }
}