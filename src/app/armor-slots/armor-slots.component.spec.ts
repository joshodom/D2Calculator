import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorSlotsComponent } from './armor-slots.component';

describe('ArmorSlotsComponent', () => {
  let component: ArmorSlotsComponent;
  let fixture: ComponentFixture<ArmorSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
