export class Charm {
  RequiredLevel: number;
  AddedStr: number;
  AddedDex: number;

  constructor(reqLvl?: number, addedStr?: number, addedDex?: number) {
    this.RequiredLevel = reqLvl || 0;
    this.AddedStr = addedStr || 0;
    this.AddedDex = addedDex || 0;
  }
}