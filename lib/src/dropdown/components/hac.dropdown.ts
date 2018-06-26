import { Component, Input, Output, EventEmitter, ElementRef, HostListener, OnDestroy, forwardRef } from '@angular/core';
import { HacDropdownOption, HacDropdownOptionGroup } from '../models';
import { HacDropdownFilterPipe } from '../pipes/hac.dropdown.filter';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hac-dropdown',
  templateUrl: './hac.dropdown.html',
  providers: [
    HacDropdownFilterPipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HacDropdownComponent),
      multi: true
    }
  ]
})
export class HacDropdownComponent implements OnDestroy, ControlValueAccessor {
  @Input() optionGroups: HacDropdownOptionGroup[] = [];
  @Input() placeholder = 'Select';
  @Input() allowEmpty = false;
  @Input() filtrable = false;
  @Output() selectedChange = new EventEmitter();
  @Input() id: string;
  @Input() disabled: boolean = false;

  private _selected: string | number;
  public get selected(): string | number {
    return this._selected;
  }
  @Input()
  public set selected(v: string | number) {
    this._selected = v;
    this.onChangeCallback(this._selected);
    // ensure valid values, if not, reset
    if (v && !this.findOptionByKey(v)) {
      setTimeout(() => {
        this._selected = null;
        this.selectedChange.emit(this._selected);
        this.onChangeCallback(this._selected);
      }, 0);
    }
    this.updateFilter();
  }

  collapsed = true;
  filter: string;
  private subscriptions: Array<Subscription> = [];

  constructor(private elementRef: ElementRef, private dropdownFilter: HacDropdownFilterPipe) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickOutsideComponent = !this.elementRef.nativeElement.contains(event.target);
    const srcHtmlFor = (event.srcElement as HTMLLabelElement).htmlFor;
    const clickFromLabelFor = (this.id && srcHtmlFor && srcHtmlFor === this.id);

    if (clickOutsideComponent && !clickFromLabelFor && !this.collapsed) {
      this.closeDropdown();
    }
  }

  getSelected(): HacDropdownOption {
    if (this.hasGroups()) {
      return this.findOptionByKey(this._selected);
    }

    return null;
  }

  select(key: number | string) {
    this.selected = key;
    this.closeDropdown();
    this.selectedChange.emit(this.selected);
  }

  hasGroups() {
    return this.optionGroups && this.optionGroups.length > 0;
  }

  openDropdown(e?: any) {
    if (this.disabled) return;

    this.collapsed = false;
    if (e) {
      e.target.focus();
    }
  }

  closeDropdown(e?: any) {
    this.collapsed = true;
    this.onTouchedCallback();
  }

  toggleDropdown(e?: any) {
    if (this.collapsed) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }

    if (e) {
      e.stopPropagation();
    }
  }

  shouldApplyFilter(): boolean {
    const selected = this.getSelected();
    return selected && this.filter !== selected.label;
  }

  handleKey(e: KeyboardEvent) {
    switch (e.keyCode) {
      case 13: // Enter key
        this.selectFirstMatchingOption();
        break;
      case 27: //ESC key
        this.blurFilter();
        this.closeDropdown();
        break;
    }
  }

  /* Control Value Accessor */
  writeValue(obj: any): void {
    this.selected = obj;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };
  /* Control Value Accessor */

  private findOptionByKey(key: string | number): HacDropdownOption {
    return this.optionGroups.map(f => f.options.find(o => o.key === key)).find(o => o != null);
  }

  private updateFilter() {
    const selection = this.getSelected();
    this.filter = selection ? selection.label : null;
  }

  private blurFilter() {
    this.elementRef.nativeElement.querySelector('input').blur();
  }

  private selectFirstMatchingOption() {
    for (let group of this.optionGroups) {
      const candidates = this.dropdownFilter.transform(group.options, this.filter);
      if (candidates.length > 0) {
        this.select(candidates[0].key);
        this.blurFilter();
        break;
      }
    }
  }

}