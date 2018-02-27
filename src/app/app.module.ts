import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MultiInputComponent, MultiInputArrayComponent } from './multi-input/multi-input.component';


@NgModule({
  declarations: [
    AppComponent,
    MultiInputComponent,
    MultiInputArrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
