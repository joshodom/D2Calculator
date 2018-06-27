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
    this.ClassList = classGetter.get();
  }

  ngOnInit() {
  }

}
