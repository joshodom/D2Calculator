import { Component, OnInit } from '@angular/core';
import { Class } from '../Models/Class';
import { Classes } from '../Models/Classes';
import { Item } from '../Models/Item';
import { Slot } from '../Models/Slot';

@Component({
  selector: 'base-information',
  templateUrl: './base-information.component.html',
  styleUrls: ['./base-information.component.css']
})
export class BaseInformationComponent implements OnInit {
  ClassList: Array<Class>;
  Sorts: Array<string>;
  equip: Array<Item>;
  Items: Array<Item>;
  minimumRequiredStr: number;
  minimumRequiredDex: number;
  minimumRequiredLvl: number;
  totalAddedStr: number;
  totalAddedDex: number;
  constructor() {
    let classGetter = new Classes();
    this.equip = new Array<Item>();
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
    this.equip = this.Items.slice(0);
    this.ClassList = classGetter.get();
  }

  updateTotals(): void {
    this.equip.sort(this.sortByStrength);
  }

  sortByStrength(a, b): number {
    if (a.RequiredStr > b.RequiredStr) return 1;
    if (a.RequiredStr < b.RequiredStr) return -1;
    return 0;
  }

  sortByDexterity(a, b): number {
    if (a.RequiredDex > b.RequiredDex) return 1;
    if (a.RequiredDex < b.RequiredDex) return -1;
    return 0;
  }

  ngOnInit() {
  }
}
