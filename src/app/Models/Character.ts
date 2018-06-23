import { Slot } from "../Models/Slot";
import { Charm } from "../Models/Charm";
import { Class } from "../Models/Class";
import { Item } from "../Models/Item";
export class Character {
  Level: number;
  Class: Class;
  Dexterity: number;
  Strength: number;
  Items: Array<Item>;
  Charms: Array<Charm>;
  constructor(lvl?: number, dex?: number, str?: number, myClass?: Class) {
    this.Level = lvl || 0;
    this.Dexterity = dex || 0;
    this.Strength = str || 0;
    this.Class = myClass || new Class('amazon');//default to first in the list
    this.Items = new Array<Item>();
    this.Items.push(new Item(Slot.Neck));
    this.Items.push(new Item(Slot.Ring1));
    this.Items.push(new Item(Slot.Ring2));
    this.Items.push(new Item(Slot.Helm));
    this.Items.push(new Item(Slot.MainHand));
    this.Items.push(new Item(Slot.OffHand));
    this.Items.push(new Item(Slot.Gloves));
    this.Items.push(new Item(Slot.Belt));
    this.Items.push(new Item(Slot.Boots));
    this.Charms = new Array<Charm>();
  }
}