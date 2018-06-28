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
  changes: any[];
  Items: Array<Item>;
  totalRequiredStr: number;
  totalRequiredDex: number;
  totalAddedStr: number;
  totalAddedDex: number;
  constructor() {
    let classGetter = new Classes();
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
    console.log('totals called!');
    let totalStr = 0,totalDex = 0,addedStr = 0,addedDex = 0;
    this.Items.forEach(function(item) {
      if (!!item) {
        console.log(`${item.Slot} has reached the inner if statement and isn't null, proof: ${JSON.stringify(item)}`);
        totalStr += item.RequiredStr;
        totalDex += item.RequiredDex;
        addedStr += item.AddedStr;
        addedDex += item.AddedDex;
      }
    });
    this.totalRequiredStr = totalStr;
    this.totalRequiredDex = totalDex;
    this.totalAddedStr = addedStr;
    this.totalAddedDex = addedDex;
    console.log(`totals now: ${this.totalRequiredStr}, ${this.totalRequiredDex}, ${this.totalAddedStr}, ${this.totalAddedDex}`)
  }

  ngOnInit() {}
}
