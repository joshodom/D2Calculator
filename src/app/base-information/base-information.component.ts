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
    this.minimumRequiredStr = 0;
    this.minimumRequiredDex = 0;
    this.totalAddedStr = 0;
    this.totalAddedDex = 0;
    this.ClassList = classGetter.get();
    this.Sorts = new Array<string>();
    this.Sorts.push("Strength");
    this.Sorts.push("Dexterity");
    this.Sorts.push("Level");
  }

  updateTotals(): void {
    let lowestStr = 0,
      lowestDex = 0,
      addedStr = 0,
      addedDex = 0;
    this.Items.forEach(function(item) {
      if (!!item) {
        addedStr += item.AddedStr;
        addedDex += item.AddedDex;

        if (item.RequiredDex > lowestDex) {
          lowestDex = item.RequiredDex;
        }
        if (item.RequiredStr > lowestStr) {
          lowestStr = item.RequiredStr;
        }
      }
    });
    this.totalAddedStr = addedStr;
    this.totalAddedDex = addedDex;
    this.minimumRequiredDex = lowestDex;
    this.minimumRequiredStr = lowestStr;
  }

  sortItemsByLevel(): void {
    let tempArray = new Array<Item>();
    this.Items.forEach(function(item) {
      tempArray.push(item);
    });
    tempArray.sort(this.compareLevel);
    this.equip = tempArray;
  }

  compareLevel(a: Item, b: Item): number {
    if (a.RequiredLevel < b.RequiredLevel) return -1;
    if (a.RequiredLevel > b.RequiredLevel) return 1;
    return 0;
  }

  ngOnInit() {}
}
