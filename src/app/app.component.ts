import { Component, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // model: Array<any> = [];
  classList: any = {};
  model = ['sdss', 'eee'];

  ngOnInit() {
  	this.classList.itemClass = "_items";
  	this.classList.parentClass = "multi-input-array";
  	this.classList.outerDeleteClass = '_del';
    setTimeout(() => { this.model.push("aaa", "bbbb") }, 2000)
    setTimeout(() => { this.model = ["zzzz"] }, 9000)
  }

  aa(ref) {
  	console.log(ref)

  }
}
