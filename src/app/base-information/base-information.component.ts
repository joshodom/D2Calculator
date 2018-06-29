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
  equip: Array<Slot>;
  Items: Array<Item>;
  totalRequiredStr: number;
  totalRequiredDex: number;
  totalAddedStr: number;
  totalAddedDex: number;
  constructor() {
    let classGetter = new Classes();
    this.equip = new Array<Slot>();
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
    this.totalRequiredStr = 0;
    this.totalRequiredDex = 0;
    this.totalAddedStr = 0;
    this.totalAddedDex = 0;
    this.ClassList = classGetter.get();
  }

  updateTotals(): void {
    let totalStr = 0,
      totalDex = 0,
      addedStr = 0,
      addedDex = 0;
    this.Items.forEach(function(item) {
      if (!!item) {
        totalStr += item.RequiredStr;
        totalDex += item.RequiredDex;
        addedStr += item.AddedStr;
        addedDex += item.AddedDex;
      }
    }); //cannot use class variables inside the foreach, doing so outside
    this.totalRequiredStr = totalStr;
    this.totalRequiredDex = totalDex;
    this.totalAddedStr = addedStr;
    this.totalAddedDex = addedDex;
  }

  sortItems(): void {
    let tempArray = new Array<Item>();
    let endOfArray = new Array<Item>();
    let localEquip = new Array<Slot>();
    this.Items.forEach(function(item) {
      if (item.RequiredLevel) {
        tempArray.push(item);
      } else {
        endOfArray.push(item);
      }
    });
    tempArray.concat(endOfArray);
    tempArray.sort(this.compare);
    tempArray.forEach(function(temp) {
      localEquip.push(temp.Slot);
    });
    this.equip = localEquip;
  }

  compare(a: Item, b: Item): number {
    if (a.RequiredLevel < b.RequiredLevel) return -1;
    if (a.RequiredLevel > b.RequiredLevel) return 1;
    return 0;
  }

  ngOnInit() {}
}
