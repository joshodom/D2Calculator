import { Character } from "../Models/Character";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'armor-slots',
  templateUrl: './armor-slots.component.html',
  styleUrls: ['./armor-slots.component.css']
})

export class ArmorSlotsComponent implements OnInit {
  myCharacter: Character;

  constructor() {
    this.myCharacter = new Character();
  }

  ngOnInit() {
  }

}
