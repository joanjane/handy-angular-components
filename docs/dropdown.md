# Dropdown Component

The dropdown component accepts the following inputs and outputs:

## List of inputs:

| Input        | Type                     | Notes                                                |
|--------------|--------------------------|------------------------------------------------------|
| optionGroups | HacDropdownOptionGroup[] | List of options, optionally filled with option groups |
| placeholder  | string                   | default `"Select"` |
| allowEmpty   | boolean                  | default `false` |
| filtrable    | boolean                  | default `false`. Enable a filter of options |
| id           | string                   | optional. Id of the element, useful to work with `label for` attribute to focus input clicking on label. |
| disabled     | boolean                  | default `false`. Not needed when using reactive forms |
| selected     | string / number          | optional. Value of selected option. When using ngModel template forms or reactive forms, you should not use this input. Instead, use ngModel or formControlName directive. |


## List of outputs:

| Input          | Type                     | Notes                             |
|----------------|--------------------------|-----------------------------------|
| selectedChange | string / number          | Value of the newly selected option|

## Using component

To define the options of the dropdown, first define them in your component:

```typescript
import { HacDropdownOptionGroup } from 'handy-angular-components'

@Component({
    ...
})
export class DemoDropdownComponent {
    dropdownList: HacDropdownOptionGroup[] = [];

    constructor() {
        // When using a list of options (ungrouped)
        this.dropdownList = [
            {
                options: [
                    {
                        key: 1,      // <- Value of your option
                        label: 'one' // <- Label that will be shown to user
                    },
                    {
                        key: "2",    // Value can be a string or a number
                        label: 'two'
                    }
                ]
            }
        ];

        // When using a grouped list of options
        this.dropdownList = [
            // group 1
            {
                label: 'Demo 1',     // <- Label of group of options
                options: [
                    {
                        key: 1,      // <- Value of your option
                        label: 'one' // <- Label that will be shown to user
                    },
                    {
                        key: "2",    // Value can be a string or a number
                        label: 'two'
                    }
                ]
            },
            // group 2
            {
                label: 'Demo 2',
                options: [
                    {
                        key: 3,
                        label: 'three'
                    }
                ]
            }
        ];
    }

```

Then, on your template, pass the inputs to the dropdown component.

```html
<!-- Binding via selected input -->
<hac-dropdown
    [optionGroups]="dropdownList"
    [(selected)]="selectedNumber" 
    [allowEmpty]="true"
    [filtrable]="true"
    placeholder="Test placeholder"
    [id]="'test-dd'"></hac-dropdown>

<!-- Using reactive forms (you must define demoForm on your .ts) -->
<form [formGroup]="demoForm">
    <hac-dropdown
        [optionGroups]="dropdownList"
        formControlName="selectedNumber"
        [allowEmpty]="true"
        [filtrable]="true"
        placeholder="Test placeholder"
        [id]="'test-dd'"></hac-dropdown>
    ...
</form>
```

## Examples
To look a working sample using different options, see [this example](https://github.com/joanjane/handy-angular-components/tree/master/example).

If you'd like to see a reference project mixing some components, customizing styles, etc., see [hac-playground](https://github.com/joanjane/hac-playground) repo.