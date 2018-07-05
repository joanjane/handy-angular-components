# Handy Angular Components

Angular 6+ components library with a featured datepicker and dropdown based on bootstrap 3 & 4.

## Features

* Well built
  - AOT Ready
  - Sass compatible and CSS rules easily overridable
  - Design based on bootstrap (3 & 4 compatible!) and fontawesome
  - Works well with reactive forms and template driven forms

* Dropdowns
  - Choose a single option from list
  - Optional filter to choose an option with basic keyboard support
  - html label[for] attribute support to trigger focus consistently from your component
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

## UI Dependencies

This library is requires using [bootstrap 3/4](http://getbootstrap.com) (yes, works with both!) and [fontawesome](http://fontawesome.io).

*Important: ensure you include hac.css (this library stylesheet after bootstrap and fontawesome to respect the cascade priorities).*

## Documentation

Read the [full documentation](https://github.com/joanjane/handy-angular-components/tree/master/docs) to know about the features.

## Example

See [this example](https://github.com/joanjane/handy-angular-components/tree/master/example) to discover all the features.

New! Look at [hac-playground](https://github.com/joanjane/hac-playground) repo for a clean sample, that supports localization and JIT/AOT.

## Contributions
Contributions are welcome, you can fork this repo and submit a pull request. Also if you find any issue, file it at [github](https://github.com/joanjane/handy-angular-components/issues) and it will be reviewed,

## License

MIT © [Joan Jané](mailto:jjaneballester@gmail.com)
