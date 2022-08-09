import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instancedRanger = 0;
  constructor(
    name: string,
  ) {
    super(name);
    Ranger._instancedRanger += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instancedRanger;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}