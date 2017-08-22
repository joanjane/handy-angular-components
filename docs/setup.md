## Installation

To install this library, run:

```bash
$ npm install handy-angular-components --save
```

Keep updated! You can upgrade your package easily with:
```bash
$ npm install handy-angular-components@latest --save
```

## Setup

You can import Handy Angular Components in any Angular 4+ application adding in your root or shared NgModule as below:

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

Once your library is imported, you can use its components, directives and pipes in your Angular application. [Go back](https://github.com/joanjane/handy-angular-components/tree/master/docs/index.md) to docs index to continue with the components.

