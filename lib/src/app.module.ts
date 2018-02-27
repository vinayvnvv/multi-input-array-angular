import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MultiInputComponent, MultiInputArrayComponent, MultiInputClassList } from './multi-input/multi-input.component';


@NgModule({
  declarations: [
    MultiInputComponent,
    MultiInputArrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ], 
  exports: [
    MultiInputComponent, MultiInputArrayComponent
  ],
  providers: []
})
export class AppModule { }
