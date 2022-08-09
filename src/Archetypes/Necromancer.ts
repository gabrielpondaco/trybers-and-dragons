import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _instancedNecromancer = 0;
  constructor(
    name: string,
  ) {
    super(name);
    Necromancer._instancedNecromancer += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instancedNecromancer;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}