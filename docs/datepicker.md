# Datepicker Component

The datepicker component accepts the following inputs and outputs:

## List of inputs:

| Input        | Type                     | Notes                                                |
|--------------|--------------------------|------------------------------------------------------|
| options | HacDatepickerOptions | Options of datepicker, see options section below for more details |
| disabled     | boolean                  | default `false`. Not needed when using reactive forms |
| selected     | date / string formatted (ISO 8601) | optional. Value of selected date for single dates (`range=false`). |
| startDate    | date / string formatted (ISO 8601) | optional. Value of start date for date ranges (`range=true`). |
| endDate    | date / string formatted (ISO 8601) | optional. Value of end date for date ranges (`range=true`). |

**note**: When using ngModel template forms or reactive forms, you may not want to use _selected_, _startDate_ and _endDate_ inputs. Instead, you can use ngModel or formControlName directive. When doing so, the model will be like below:
* In case of selecting single dates, model will be a Date object.
* In case of selecting date ranges, model will be an object with date range.
```json
{
    "startDate": Date,
    "endDate": Date
}
```
You can still use ouputs if you want to be notified of changes.


## List of outputs:

| Input           | Type                     | Notes                             |
|-----------------|--------------------------|-----------------------------------|
| selectedChange  | Date                     | Value of the newly selected date when selecting single dates       |
| startDateChange | Date                     | Value of the newly selected start date when selecting dates ranges |
| endDateChange   | Date                     | Value of the newly selected end date when selecting dates ranges   |

## Datepicker options HacDatepickerOptions

This are the properties of datepicker options. All of them are optional with a default value (see @default comments).

```typescript
/**
* Control which month is displaying currently on datepicker
*/
currentDisplayMonth?: Date;

/**
* @default 1
* Choose how many months will be displayed at the same time (multi calendar layout)
*/
showMonths?: number;

/**
* Define a placeholer on selected start/single date box when value is not set
*/
startDatePlaceholder?: string;

/**
* Define a placeholer on selected end date box when value is not set
*/
endDatePlaceholder?: string;

/**
* @default 'mediumDate'
* Choose a custom formatting of selected start/single date. 
* Use angular DatePipe allowed formats.
*/
startDateFormat?: string;

/**
* @default 'mediumDate'
* Choose a custom formatting of selected end date. 
* Use angular DatePipe allowed formats.
*/
endDateFormat?: string;

/**
* @default false
* Choose date ranges instead of single dates
*/
range?: boolean;

/**
* (Optional) define a min date allowed
*/
minDate?: Date;

/**
* (Optional) define a max date allowed
*/
maxDate?: Date;

/**
* @default 'blacklist'
* When using dayList, use it as a white list or black list.
*/
dayListKind?: 'whitelist' | 'blacklist';

/**
* Define a list of days when selecting start date to be enabled/disabled depending on dayListKind value.
* Example:
* { 
*   2017: {
*      5: [8, 9],
*      12: [1, 2, 15, 31]
*   }
* }
*/
dayListStartDate?: HacDatepickerDayList;

/**
* Define a list of days when selecting end date to be enabled/disabled depending on dayListKind value.
*/
dayListEndDate?: HacDatepickerDayList;

/**
* @default false
* Display a 'today' button to select current date. If date cannot be selected
* for some rule, the button won't be visible.
*/
enableTodayAction?: boolean;

/**
* @default 'Today'
* When today action is enabled, you can specify the text that will be shown
*/
todayActionLabel?: string;

/**
* @default null
* Useful when having a label with for attribute which value is this, to 
* trigger focus of the datepicker and open it.
*/
elementId?: string;

/**
* @default false
* Use selector box width on calendar. When calendars width are not sufficient,
* horizontal scroll will appear.
*/
useSelectorWidth?: boolean;
```

## Using component

To define the options of the datepicker, first define them in your component:

```typescript
import { HacDropdownOptionGroup } from 'handy-angular-components'

@Component({
    ...
})
export class DemoDatepickerComponent {
    datepickerSingleOptions: HacDatepickerOptions;
    datepickerOptions: HacDatepickerOptions;

    constructor() {
        // Date picker options for single dates with 1 visible month calendar, custom date formatting
        this.datepickerSingleOptions = {
            showMonths: 1,
            startDateFormat: 'yyyy-MM-dd',
            enableTodayAction: true,
            todayActionLabel: 'Today'
        };

        // Date picker options for date ranges, min/max ranges
        this.datepickerOptions = {
            // set placeholder for selected dates box
            startDatePlaceholder: 'from',
            endDatePlaceholder: 'to',

            // Enable date ranges selection with 2 month visible
            range: true,
            showMonths: 2,

            // Allow min and max dates from day 3 of previous month to day 8 in 2 months.
            minDate: new Date(this.today.getFullYear(), this.today.getMonth() - 1, 3),
            maxDate: new Date(this.today.getFullYear(), this.today.getMonth() + 2, 8),

            // Enable today action, but won't be shown because today is blacklisted
            enableTodayAction: true,

            // Specify a blacklist of days that cannot be selected on start and end dates.
            // This disables 1, 2, 3 of January 2017 when selecting start date, and 
            // 26, 27, 28 of February 2017 when selecting end date.
            // You can use only one, even you can use without date ranges defining start date only.
            // If you want to define the enabled days instead of disabled, set dayListKind to 'whitelist'
            dayListKind: 'blacklist',
            dayListStartDate: {
                "2017": {
                    "1": [1, 2, 3]
                }
            },
            dayListEndDate: {
                "2017": {
                    "2": [26, 27, 28]
                }
            }
        };
    }

```

Then, on your template, pass the inputs to the dropdown component.

```html
<!-- Binding dates via inputs -->
<!-- Datepicker for single dates -->
<hac-datepicker 
    [(selected)]="selectedSingleDate" 
    [options]="datepickerSingleOptions"></hac-datepicker>

<!-- Datepicker for date ranges (start-end) -->
<hac-datepicker 
    [(startDate)]="selectedStartDate" 
    [(endDate)]="selectedEndDate"
    [options]="datepickerOptions"></hac-datepicker>

<!-- Binding dates using reactive forms -->
<hac-datepicker 
    formControlName="yourControlName"
    [options]="datepickerSingleOptions"></hac-datepicker>

```

## Examples
To look a working sample using different options, see [this example](https://github.com/joanjane/handy-angular-components/tree/master/example).

If you'd like to see a reference project mixing some components, customizing styles, etc., see [hac-playground](https://github.com/joanjane/hac-playground) repo.

