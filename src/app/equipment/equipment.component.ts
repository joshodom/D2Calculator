import { Character } from "../Models/Character";
import { Component, OnInit, Input } from '@angular/core';
import { Class } from "../Models/Class";

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})

export class EquipmentComponent implements OnInit {
  _myClass: Class;
  constructor() {
  }

  @Input('clash')
  set myClass(myClass: Class) {
    this._myClass = myClass;
  }

  
  ngOnInit() {
  }

}
