import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Character } from '../../Models/Character';

@Component({
  selector: 'stat-box',
  templateUrl: './stat-box.component.html',
  styleUrls: ['./stat-box.component.css']
})

export class StatBoxComponent implements OnInit, OnChanges {
  @Input() character: any;
  bonustStr: number;
  bonusDex: number;
  totalRequiredStr: number;
  totalRequiredDex: number;
  totalAddedStr: number;
  totalAddedDex: number;
  constructor() {
  }

  ngOnInit() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['character']) {
      console.log('changes!!: ', changes)
    }
    this.character = changes['character'];
  }



}
