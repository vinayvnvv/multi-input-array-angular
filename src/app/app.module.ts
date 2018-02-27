import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
// import { MultiInputComponent, MultiInputArrayComponent, MultiInputClassList } from './multi-input/multi-input.component';
// import { MultiInputModule } from './../../lib/multi-input-array/bundles/ng-libs-multi-input-array.umd.js';
import { MultiInputModule } from "@ng-libs/multi-input-array";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MultiInputModule
  ], 
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
