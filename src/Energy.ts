export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_ : EnergyType,
  amount: number,
}

// export default interface People {
//   name: string,
//   height: number,
//   printName(): void;
// }