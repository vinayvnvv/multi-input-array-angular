import { Component, AfterContentInit, OnInit, IterableDiffers, DoCheck, SimpleChanges, SimpleChange, Output, OnChanges, Input, ElementRef, EventEmitter } from '@angular/core';


import { Observable } from "rxjs/Rx"


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
export class MultiInputComponent implements OnInit, AfterContentInit, DoCheck { 
  array: Array<any>;
  arrayData: Array<string> = [];
  @Input('template') template: any;
  @Input('deleteTemplate') deleteTemplate: any;
  @Input('classList') classList: MultiInputClassList;
  @Input('model') model: any;
  @Output() modelChange :  EventEmitter<any> = new EventEmitter();
  iterableDiffer: any;
  localChanges: boolean = false;
  
  constructor(
  		private elRef: ElementRef,
      private _iterableDiffers: IterableDiffers
  	) { 
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    this.array = [0];
    if(this.classList && this.classList.parentClass) {
      this.elRef.nativeElement.classList.add(this.classList.parentClass)
    }
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.model);
    if (changes) {
        this.initModel(this.model)
    }
}


  buildModel() {
    this.localChanges = true;
    let arr_ = this.arrayData.filter( (item) => { 
        return item != "";
     })
    this.modelChange.emit(arr_);
  }

  ngAfterContentInit() {
    this.initModel(this.model);
  }

  initModel(model) {
    if(!this.array || !this.arrayData || this.localChanges) {
      this.localChanges = false;
      return;
    }
    if(model && model.length > 0) {
      this.array = [0];
      this.arrayData = [];
      for(let i=0;i<model.length;i++) {
        this.array.push(i);
        this.arrayData.push(model[i]);
      }
      setTimeout(()=>{
         for(let i=0;i<model.length;i++) {
          this.elRef.nativeElement.children[i].children["0"].value = model[i];
        } 
        this.elRef.nativeElement.children[model.length].children["0"].value = "";
      }, 10)
      
    }
    this.localChanges = false;
  }

  change(e, index) {
    if(e.keyCode == 9) return;
    //console.log(e, index, this.arrayData.length-1)
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
  constructor() {}
}
