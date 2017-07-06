import { Component, Input, Output, EventEmitter, OnInit, ElementRef, HostListener } from '@angular/core';
import { HacDatepickerOptions } from "./hac.datepicker.options";
import { HacCalendarModel, DateHelper, WeekDay } from "../models";
import { HacWeekDayFormatter } from "../pipes";
import { DatePipe } from "@angular/common";


@Component({
    selector: 'hac-datepicker',
    templateUrl: './hac.datepicker.html',
    providers: [
        DatePipe,
        HacWeekDayFormatter
    ]
})
export class HacDatepicker implements OnInit {
    @Input()
    public startDate: Date;
    @Input()
    public endDate: Date;
    @Output() startDateChange = new EventEmitter<Date>();
    @Output() endDateChange = new EventEmitter<Date>();

    /* Single date startDate alias */
    public get selected(): Date {
        return this.startDate;
    }
    @Input()
    public set selected(v: Date) {
        this.startDate = v;
    }
    @Output() selectedChange = new EventEmitter<Date>();


    private _options: HacDatepickerOptions = {};
    public get options(): HacDatepickerOptions {
        return this._options;
    }
    @Input()
    public set options(v: HacDatepickerOptions) {
        this._options = v;
        this.setOptionsDefaults();
        this.buildStartMonth();
        this.buildCalendarModel();
    }

    calendars: HacCalendarModel[] = [];
    weekDayList = [
        WeekDay.Monday,
        WeekDay.Tuesday,
        WeekDay.Wednesday,
        WeekDay.Thursday,
        WeekDay.Friday,
        WeekDay.Saturday,
        WeekDay.Sunday
    ];

    private collapsed: boolean = true;

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.buildStartMonth();
        this.buildCalendarModel();
    }

    @HostListener('document:click', ['$event'])
    onClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.collapsed = true;
        }
    }

    buildStartMonth(): void {
        if (!this.options) {
            this.options = {};
        }
        let startDate = this.options.currentDisplayMonth ? this.options.currentDisplayMonth : new Date();
        startDate.setDate(1);

        this.options.currentDisplayMonth = startDate;
    }

    buildCalendarModel(): void {
        this.calendars = [];
        let currentMonth = new Date(this.options.currentDisplayMonth);
        let calendarMonths = this.options.showMonths > 0 ? this.options.showMonths : 1;
        for (let i = 0; i < calendarMonths; i++) {
            this.calendars.push(new HacCalendarModel(currentMonth));
            currentMonth.setMonth(currentMonth.getMonth() + 1);
        }
    }

    select(day: Date): void {
        if (!this.options.range || this.getSelectionKind() === 'start') {
            this.startDate = day;
            this.startDateChange.emit(day);
            this.selectedChange.emit(day);
            this.endDate = null;
            this.endDateChange.emit(null);
            
            if (!this.options.range) {
                this.collapsed = true;
            }
        } else {
            this.endDate = day;
            this.endDateChange.emit(day);
            this.collapsed = true;
        }
    }

    isSelected(day: Date): boolean {
        return DateHelper.areDatesEqual(day, this.startDate)
            || this.options.range && DateHelper.areDatesEqual(day, this.endDate);
    }

    prevMonth($event?: Event): void {
        this.options.currentDisplayMonth.setMonth(this.options.currentDisplayMonth.getMonth() - 1);
        this.buildCalendarModel();
        $event.stopPropagation();
    }

    nextMonth($event?: Event): void {
        this.options.currentDisplayMonth.setMonth(this.options.currentDisplayMonth.getMonth() + 1);
        this.buildCalendarModel();
        $event.stopPropagation();
    }

    toggleCalendar(): void {
        this.collapsed = !this.collapsed;
    }

    getSelectionKind(): 'start' | 'end' {
        return !this.startDate || (this.options.range && this.startDate && this.endDate) ? 'start' : 'end';
    }

    private getLastDay(): Date {
        let months = this.options.showMonths > 0 ? this.options.showMonths : 1;
        return new Date(
            this.options.currentDisplayMonth.getFullYear(),
            this.options.currentDisplayMonth.getMonth() + months,
            0
        );
    }

    private setOptionsDefaults(): void {
        this._options.startDatePlaceholder = this._options.startDatePlaceholder ? this._options.startDatePlaceholder : 'Select';
        this._options.endDatePlaceholder = this._options.endDatePlaceholder ? this._options.endDatePlaceholder : 'Select';
        this._options.startDateFormat = this._options.startDateFormat ? this._options.startDateFormat : 'mediumDate';
        this._options.endDateFormat = this._options.endDateFormat ? this._options.endDateFormat : 'mediumDate';
        this._options.range = this._options.range || false;
    }
}

