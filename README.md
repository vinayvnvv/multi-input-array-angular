# Angular Multi-Input-Array Component (Angular 2+)

Component will take a single model and component will return array of data by displaying array of inputs.

[![](https://ucarecdn.com/2f7fc408-01b0-45d0-bbb9-3fa9e3c3e49e/aa.gif)](https://ucarecdn.com/2f7fc408-01b0-45d0-bbb9-3fa9e3c3e49e/aa.gif)


## Features
- Automatically increments the array of inputs once the last input is typed.
- Gives the output by slicing the empty items in the array.
- It takes the input as custom template so that developers has a full controll of styling the input.

## Getting Started

### Installing
```
npm i @ng-libs/multi-input-array --save
```

## Configuration
Ensure you import the module and the dependencies:

```coffeescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MultiInputModule } from "@ng-libs/multi-input-array";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MultiInputModule
  ], 
  exports: [],
  providers: [],
})
export class AppModule { }

```

### Basic Usage
```coffeescript
@Component({
    selector: 'app',
    template: `
	<multi-input-array>
      <ng-template #templateRef>
        <input type="text" placeholder="Add Items"/>  
      </ng-template>
      <ng-template #delTemplateRef>
        <button>x</button><br/>
      </ng-template>
      <multi-input [template]="templateRef" [deleteTemplate]="delTemplateRef" [(model)]="items" ></multi-input>
</multi-input-array>`
});
export class App {
    items = ['Pizza', 'Pasta', 'Parmesan'];
}
```
```html
<multi-input-array>
      <ng-template #templateRef>
        <input type="text" placeholder="Add Items"/>  
      </ng-template>
      <ng-template #delTemplateRef>
        <button>x</button><br/>
      </ng-template>
      <multi-input [template]="templateRef" [deleteTemplate]="delTemplateRef" [(model)]="items"></multi-input>
</multi-input-array>
```


### Api for MultiInputArray Component

-  **`MultiInputArrayComponent`** - Outlet for taking templates for multi-input. It Contains `MultiInputComponent` along with templates for `<input>` field and `delete`.
-  **`MultiInputComponent`** - Actual Component which will take `Model` along with templates and converts it into array of inputs must be include within `MultiInputArrayComponent`.


### Api for MultiInput Component

#### Inputs []
- **`template`** -  **`[TemplateRef]`** - `<Input>` field template.
- **`deleteTemplate`** -  **`[TemplateRef]`** - `delete` button template removing the items from the array of inputs.
- **`model`** -  **`[any]`** - Model of the component (two-way binding).
- **`classList`** -  **`[Object]`**  - Custom CSS classes which will added to different levels of the componets.
>  #### ClassList Options
> - **`parentClass`** -  **`[string]`** - This Class name will added to `<multi-input-array>` element.
> - **`itemClass`** -  **`[string]`** - This Class name will added to every `<multi-input>` element that is iterated.
> - **`outerDeleteClass`** -  **`[string]`** - This Class name will added to outer element of the `delete` template.


## Example with classList

```coffeescript
@Component({
    selector: 'app',
    template: `
	<multi-input-array>
      <ng-template #templateRef>
        <input type="text" placeholder="Add Items"/>  
      </ng-template>
      <ng-template #delTemplateRef>
        <button>x</button><br/>
      </ng-template>
      <multi-input [template]="templateRef" [deleteTemplate]="delTemplateRef" [(model)]="items" [classList]="classList"></multi-input>
</multi-input-array>`
});
export class App {
    items = ['Pizza', 'Pasta', 'Parmesan'];
	classList = {
		parentClass: '_multi-input-array'
		itemClass: '_item'
		outerDeleteClass: '_del'
	}
}
```
```html
<multi-input-array>
      <ng-template #templateRef>
        <input type="text" placeholder="Add Items"/>  
      </ng-template>
      <ng-template #delTemplateRef>
        <button>x</button><br/>
      </ng-template>
      <multi-input [template]="templateRef" [deleteTemplate]="delTemplateRef" [(model)]="items" [classList]="classList"></multi-input>
</multi-input-array>
```


