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
    @Input() selected: Date;
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

    constructor(private elementRef: ElementRef) {
        
    }

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
        this.selected = day;
        this.selectedChange.emit(this.selected);
    }

    isSelected(day: Date): boolean {
        return DateHelper.areDatesEqual(day, this.selected);
    }

    prevMonth(): void {
        this.options.currentDisplayMonth.setMonth(this.options.currentDisplayMonth.getMonth() - 1);
        this.buildCalendarModel();
    }

    nextMonth(): void {
        this.options.currentDisplayMonth.setMonth(this.options.currentDisplayMonth.getMonth() + 1);
        this.buildCalendarModel();
    }

    toggleCalendar(): void {
        this.collapsed = !this.collapsed;
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
    }
}

