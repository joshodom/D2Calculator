import { Slot } from "./Slot";
export class Item {
  Slot: Slot;
  RequiredLevel: number;
  RequiredStr: number;
  RequiredDex: number;
  AddedStr: number;
  AddedDex: number;

  constructor(itemSlot: Slot, reqLvl?: number, reqStr?: number, reqDex?: number, addedStr?: number, addedDex?: number) {
    this.Slot = itemSlot;
    this.RequiredLevel = reqLvl || 0;
    this.RequiredStr = reqStr || 0;
    this.RequiredDex = reqDex || 0;
    this.AddedStr = addedStr || 0;
    this.AddedDex = addedDex || 0;
  }
}