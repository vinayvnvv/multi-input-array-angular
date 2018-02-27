import { Component, TemplateRef, OnInit } from '@angular/core';
import { MultiInputClassList } from './multi-input/multi-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  model: Array<any> = [];
  classList: MultiInputClassList = new MultiInputClassList();

  ngOnInit() {
  	this.classList.itemClass = "_items";
  	this.classList.parentClass = "multi-input-array";
  	this.classList.outerDeleteClass = '_del';
  }

  aa(ref) {
  	console.log(ref)

  }
}
