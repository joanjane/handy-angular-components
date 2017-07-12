# Handy Angular Components

Angular 4+ components library to easily build nice forms, still in development.

## Features

* Well built
  - AOT Ready
  - Sass compatible and pure CSS options 
  - You can make it work with reactive forms and template driven forms

* Dropdowns
  - Choose a single option from list
  - Optional filter to choose an option with basic keyboard support
  - html label[for] attribute support to trigger focus consistently from your component
  - Optional multicolumn layout (by default 1 col classic layout)
  - Support option groups to categorize options

* Datepicker
  - Configurable visible months (by default 1)
	- Single date mode
  - Date range mode (start - end)
	- Localization via angular DatePipe
	- Customizable date format for selected dates
	- Whitelist/blacklist days mode
	- Min/Max date ranges
	- Toggeable today button to set current date
  - Configurable current month visible
  

## Installation

To install this library, run:

```bash
$ npm install handy-angular-components --save
```

## Quick documentation

You can import Handy Angular Components in any Angular application adding in your root or shared NgModule as below:

```typescript
// Sample code
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HacModule } from 'handy-angular-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    HacModule.forRoot() //Import module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application. This is a quick example:

```typescript
import { Component, OnInit } from '@angular/core';
import { HacDropdownOptionGroup } from 'handy-angular-components'; // Import this type to type your code

@Component({
  selector: 'demo-dropdown',
  templateUrl: './demo.dropdown.component.html'
})
export class DemoDropdownComponent implements OnInit {
  dropdownList: HacDropdownOptionGroup[] = [];
  selectedNumber: number = null;

  ngOnInit(): void {
    this.buildOptions();
  }

  buildOptions() {
    this.dropdownList = [
      // you can add many option groups or just one. Each option group can have a label
      {
        label: "The label on option groups is optional",
        // options of this group
        options: [
          {
            key: 1,
            label: 'one'
          },
          {
            key: 2,
            label: 'two'
          },
          {
            key: 3,
            label: 'three'
          }]
      }
    ];
}

```

Then use `hac-dropdown` component on the `demo.dropdown.component.html` template:

```xml
<!-- You can now use dropdown component in your application  -->
<hac-dropdown [optionGroups]="dropdownList" [(selected)]="selectedNumber" [allowEmpty]="true" [filtrable]="true" placeholder="Test placeholder"></hac-dropdown>
```

## Example

See [this example](https://github.com/joanjane/handy-angular-components/tree/master/example) to discover all the features.

New! Look at [hac-playground](https://github.com/joanjane/hac-playground) repo for a clean sample, that supports localization and JIT/AOT.


## License

MIT © [Joan Jané](mailto:jjaneballester@gmail.com)
