import { Character } from "../Models/Character";
import { Component, OnInit } from '@angular/core';
import { Class } from "../Models/Class";

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})

export class EquipmentComponent implements OnInit {
  myCharacter: Character;
  ClassList: Array<Class>;
  selectedClass: Class;
  constructor() {
    console.log('class ctor armorslots')
    this.ClassList = new Array<Class>();
    this.initClasses();
    this.myCharacter = new Character();
  }

  private initClasses(): void {
    this.ClassList.push(new Class('amazon'));
    this.ClassList.push(new Class('assassin'));
    this.ClassList.push(new Class('barbarian'));
    this.ClassList.push(new Class('druid'));
    this.ClassList.push(new Class('paladin'));
    this.ClassList.push(new Class('necromancer'));
    this.ClassList.push(new Class('sorceress'));
  }

  ngOnInit() {
  }

}
