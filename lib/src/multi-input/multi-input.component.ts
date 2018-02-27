import { Component, OnInit, Output, Input, TemplateRef, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, EventEmitter } from '@angular/core';




@Component({
  selector: 'multi-input-array',
  template: `<ng-content select='multi-input'></ng-content>`
})
export class MultiInputArrayComponent {
  constructor(
  	) { }


}



@Component({
  selector: 'multi-input',
  templateUrl: './multi-input.component.html',
  styleUrls: ['./multi-input.component.css']
})
export class MultiInputComponent implements OnInit { 
  @Input('template') template: any;
  @Input('deleteTemplate') deleteTemplate: any;
  @Input('classList') classList: MultiInputClassList;
  @Input() model: boolean;
  @Output() modelChange :  EventEmitter<any> = new EventEmitter();
  array: Array<any>;
  arrayData: Array<string> = [];
  finalArrayData: Array<string> = [];
  constructor(
  		private elRef: ElementRef
  	) { }

  ngOnInit() {
  	console.log(this.template, this.elRef)
    this.array = [0];
    if(this.classList && this.classList.parentClass) {
      this.elRef.nativeElement.classList.add(this.classList.parentClass)
    }
  }


  buildModel() {
    let arr_ = this.arrayData.filter( (item) => { 
        return item != "";
     })
    this.modelChange.emit(arr_);
  }

  change(e, index) {
    if(e.keyCode == 9) return;
    console.log(e, index, this.arrayData.length-1)
    if(index == (this.arrayData.length)) {
      if(e.target.value != "") {
         this.arrayData.push(e.target.value);
         this.array.push(index+1); 
      }
      
    } else {
      this.arrayData[index] = e.target.value;
    }
    this.buildModel();
  }

  deleteAt(index) {
    if(index == (this.arrayData.length)) return;
    this.array.splice(index, 1);
    this.arrayData.splice(index, 1);
    this.buildModel();
  }



}


export class MultiInputClassList {
  outerDeleteClass: string;
  itemClass: string;
  parentClass: string;
}
