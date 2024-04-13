import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Compontent1Component } from './compontent-1/compontent-1.component';
import { Compontent2Component } from './compontent-2/compontent-2.component';
import { Compontent3Component } from './compontent-3/compontent-3.component';

@NgModule({
  declarations: [
    AppComponent,
    Compontent1Component,
    Compontent2Component,
    Compontent3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
