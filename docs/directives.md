# Directives

## Label focus directive

If you need to set a css class to a label when its input is focused in, you can use [hacLabelFocus] directive, which binds focus and focusout events, and adds/removes the input class.

```html
<label for="demo-dropdown" hacLabelFocus="focused">Select an option:</label>
<hac-dropdown [optionGroups]="dropdownList" [id]="'demo-dropdown'" formControlName="number"></hac-dropdown>

<label for="demo-datepicker" hacLabelFocus="focused">Select a date:</label>
// on datepickerOptions, pass 'elementId' as 'demo-datepicker'
<hac-datepicker formControlName="date" [options]="datepickerOptions"></hac-datepicker>

<!-- when each input is focused, the label will have "focused" class like <label class="focused" for=...>
```

## List of inputs:

| Input         | Type                     | Notes                                                |
|---------------|--------------------------|------------------------------------------------------|
| hacLabelFocus | string | css class to set when the referenced input in label[for] is focused    |