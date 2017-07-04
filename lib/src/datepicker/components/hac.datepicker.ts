import { Component, Input, Output, EventEmitter, OnInit, ElementRef, HostListener } from '@angular/core';
import { HacDatepickerOptions, IHacDatepickerLocalization, DefaultDatePickerLabels, WeekDayList } from "./hac.datepicker.options";
import { HacCalendarModel, DateHelper } from "./hac.calendar.model";

@Component({
    selector: 'hac-datepicker',
    templateUrl: './hac.datepicker.html'
})
export class HacDatepicker implements OnInit {
    @Input() selected: Date;
    @Output() selectedChange = new EventEmitter<Date>();

    private _options: HacDatepickerOptions = {};
    public get options(): HacDatepickerOptions {
        return this._options;
    }
    @Input()
    public set options(v: HacDatepickerOptions) {
        this._options = v;
        this.buildStartMonth();
        this.buildCalendarModel();
    }

    calendars: HacCalendarModel[] = [];
    weekDayList = WeekDayList;

    ngOnInit(): void {
        this.buildStartMonth();
        this.buildCalendarModel();
    }

    buildStartMonth(): void {
        if (!this.options) {
            this.options = {};
        }
        let startDate = this.options.currentDisplayMonth ? this.options.currentDisplayMonth : new Date();
        startDate.setDate(1);

        this.options.currentDisplayMonth = startDate;
    }

    buildCalendarModel() {
        this.calendars = [];
        let currentMonth = new Date(this.options.currentDisplayMonth);
        let calendarMonths = this.options.showMonths > 0 ? this.options.showMonths : 1;
        for (let i = 0; i < calendarMonths; i++) {
            this.calendars.push(new HacCalendarModel(currentMonth));
            currentMonth.setMonth(currentMonth.getMonth() +1);
        }
    }

    getLocale(): IHacDatepickerLocalization {
        return (this.options && this.options.locale) ? this.options.locale : DefaultDatePickerLabels;
    }

    select(day: Date) {
        this.selected = day;
        this.selectedChange.emit(this.selected);
    }

    isSelected(day: Date) {
        return DateHelper.areDatesEqual(day, this.selected);
    }

    private getLastDay(): Date {
        let months = this.options.showMonths > 0 ? this.options.showMonths : 1;
        return new Date(
            this.options.currentDisplayMonth.getFullYear(),
            this.options.currentDisplayMonth.getMonth() + months,
            0
        );
    }
}

