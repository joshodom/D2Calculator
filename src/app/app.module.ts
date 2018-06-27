import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { BaseInformationComponent } from './base-information/base-information.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    BaseInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
