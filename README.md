# Handy Angular Components

Work in progress angular 4+ components library to easily build nice forms

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

    HacModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application. This is a quick example:

```typescript
import { Component, OnInit } from '@angular/core';
import { IHacDropdownOptionGroup } from 'handy-angular-components'; // Import this type to type your code

@Component({
  selector: 'demo-dropdown',
  templateUrl: './demo.dropdown.component.html'
})
export class DemoDropdownComponent implements OnInit {
  dropdownList: IHacDropdownOptionGroup[] = [];
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

## Running example:

1)  Build lib

To build lib, open a console and run `cd lib` and then install npm packages: 

```bash
$ npm install
```
And then, build the library:

```bash
$ npm run build
```

2) Build example

After building the library, you need to place on example folder (`cd example`) and install npm packages: 

```bash
$ npm install
```

Finally, you can start a server and build the application with:

```bash
$ npm start
```

You should be able to open [localhost:8000](http://localhost:8000) in a browser and see the demo after some seconds.


## License

MIT © [Joan Jané](mailto:jjaneballester@gmail.com)
