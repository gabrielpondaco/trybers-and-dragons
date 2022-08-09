import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instancedWarrior = 0;
  constructor(
    name: string,
  ) {
    super(name);
    Warrior._instancedWarrior += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instancedWarrior;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}