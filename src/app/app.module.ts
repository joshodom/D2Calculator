import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArmorSlotsComponent } from './armor-slots/armor-slots.component';
import { StatBoxComponent } from './armor-slots/stat-box/stat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ArmorSlotsComponent,
    StatBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
