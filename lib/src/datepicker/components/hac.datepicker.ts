import { Component, Input, Output, EventEmitter, OnInit, ElementRef, HostListener } from '@angular/core';
import { HacDatepickerOptions } from "./hac.datepicker.options";
import { HacCalendarModel, DateHelper, WeekDay, HacCalendarDayModel } from "../models";
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

    private _startDate: Date;
    public get startDate(): Date {
        return this._startDate;
    }
    @Input()
    public set startDate(v: Date) {
        if (v && (this.isDisabled(new HacCalendarDayModel(v)) 
        || this.options.range && this.endDate && DateHelper.isGreater(v, this.endDate)) ) {
            this.startDateChange.emit(null); // reset invalid dates
            return;
        }

        this._startDate = v;
    }

    private _endDate: Date;
    public get endDate(): Date {
        return this._endDate;
    }
    @Input()
    public set endDate(v: Date) {
        if (v && (this.isDisabled(new HacCalendarDayModel(v)) 
        || this.options.range && this.startDate && DateHelper.isGreater(this.startDate, v)) ) {
            this.endDateChange.emit(null); // reset invalid dates
            return;
        }
        this._endDate = v;
    }

    @Output() startDateChange = new EventEmitter<Date>();
    @Output() endDateChange = new EventEmitter<Date>();

    /* Single date startDate alias */
    public get selected(): Date {
        return this.startDate;
    }
    @Input()
    public set selected(v: Date) {
        this.setStartDate(v);
    }
    /* Single date startDate alias */
    @Output()
    public get selectedChange(): EventEmitter<Date> {
        return this.startDateChange;
    }

    private _options: HacDatepickerOptions = {};
    public get options(): HacDatepickerOptions {
        return this._options;
    }
    @Input()
    public set options(v: HacDatepickerOptions) {
        this._options = v;
        this.setOptionsDefaults();
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

    private collapsed : boolean = true;;
    private forcedSelectionKind?: SelectionKind;
    private hoverDate?: Date;

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.setOptionsDefaults();
        this.buildCalendarModel();
    }

    @HostListener('document:click', ['$event'])
    onClick(event) {
        if((this.options.elementId && event.target.htmlFor === this.options.elementId)) {
            this.collapsed = false;
        } else if (!this.elementRef.nativeElement.contains(event.target)) {
            this.collapsed = true;
        }
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

    select(day: HacCalendarDayModel): void {
        if (this.isDisabled(day)) {
            return;
        }

        if (!this.options.range || this.getSelectionKind() === 'start') {
            this.setStartDate(day.day);

            if (!this.forcedSelectionKind) {
                this.setEndDate(null);
            } else if (this.options.range) {
                this.forceSelectionKind('end');
                if (day.day > this.endDate) {
                    this.setEndDate(null);
                }
            }

            this.collapsed = !this.options.range;
        } else {
            this.setEndDate(day.day);
            this.collapsed = true;
            this.forceSelectionKind(null);
        }
    }

    isSelected(day: HacCalendarDayModel): boolean {
        return DateHelper.areDatesEqual(day.day, this.startDate)
            || this.options.range && DateHelper.areDatesEqual(day.day, this.endDate);
    }

    isDisabled(day: HacCalendarDayModel): boolean {
        const exceedsMinDate = this.options.minDate && DateHelper.isGreater(this.options.minDate, day.day);
        if (exceedsMinDate) return true;

        const exceedsMaxDate = this.options.maxDate && DateHelper.isGreater(day.day, this.options.maxDate);
        if (exceedsMaxDate) return true;

        let isBlacklisted = this.options.dayList && this.options.dayListKind === 'blacklist' && this.isInDayList(day);
        isBlacklisted = isBlacklisted || this.options.dayList && this.options.dayListKind === 'whitelist' && !this.isInDayList(day);
        if (isBlacklisted) return true;

        const isPastOverflow = this.getSelectionKind() === 'end' && DateHelper.isGreater(this.startDate, day.day);
        return isPastOverflow;
    }

    isStart(day: HacCalendarDayModel): boolean {
        return this.options.range && DateHelper.areDatesEqual(day.day, this.startDate);
    }

    isEnd(day: HacCalendarDayModel): boolean {
        return this.options.range && DateHelper.areDatesEqual(day.day, this.endDate);
    }

    inRange(day: HacCalendarDayModel, useHover: boolean = false): boolean {
        if (!this.options.range) return false;

        const startDate = useHover ? this.getFirstRangeDay() : this.startDate;
        const endDate = useHover ? this.getLastRangeDay() : this.endDate;
        if (!startDate || !endDate) return false;

        return this.options.range && DateHelper.isInRange(day.day, startDate, endDate);
    }

    setHoverDate(day: HacCalendarDayModel) {
        this.hoverDate = day.day;
    }

    clearDates() {
        this.setStartDate(null);
        this.setEndDate(null);
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

    getSelectionKind(): SelectionKind {
        if (this.forcedSelectionKind) {
            return this.forcedSelectionKind;
        }

        return !this.startDate || (this.options.range && this.startDate && this.endDate) ? 'start' : 'end';
    }

    forceSelectionKind(kind?: SelectionKind): void {
        this.forcedSelectionKind = kind;

        if (kind) {
            this.collapsed = false;
        }
    }

    selectToday() {
        const today = new HacCalendarDayModel(DateHelper.today());
        this.select(today);
    }

    isTodayActionEnabled() {
        return !this.isDisabled(new HacCalendarDayModel(DateHelper.today()));
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
        let startDate = this._options.currentDisplayMonth ? this.options.currentDisplayMonth : new Date();
        startDate.setDate(1);
        this._options.currentDisplayMonth = startDate;

        this._options.startDatePlaceholder = this._options.startDatePlaceholder ? this._options.startDatePlaceholder : 'Select';
        this._options.endDatePlaceholder = this._options.endDatePlaceholder ? this._options.endDatePlaceholder : 'Select';
        this._options.startDateFormat = this._options.startDateFormat ? this._options.startDateFormat : 'mediumDate';
        this._options.endDateFormat = this._options.endDateFormat ? this._options.endDateFormat : 'mediumDate';
        this._options.range = this._options.range || false;
        this._options.showMonths = this._options.showMonths || 1;
        this._options.dayListKind = this._options.dayListKind || 'blacklist';
        this._options.enableTodayAction = this._options.enableTodayAction || false;
        this._options.todayActionLabel = this._options.todayActionLabel || 'Today';
    }

    private setStartDate(day?: Date) {
        this.startDate = day;
        this.startDateChange.emit(this.startDate);
        this.hoverDate = day;
    }

    private setEndDate(day?: Date) {
        this.endDate = day;
        this.endDateChange.emit(this.endDate);
        this.hoverDate = day;
    }

    private getFirstRangeDay(): Date {
        if (this.getSelectionKind() === 'end') {
            return this.startDate;
        }
        return this.hoverDate || this.startDate;
    }

    private getLastRangeDay(): Date {
        if (this.getSelectionKind() === 'start') {
            return this.endDate;
        }
        return this.hoverDate || this.endDate;
    }

    private isInDayList(day: HacCalendarDayModel): boolean {
        if (!this.options.dayList) return false;

        const year = this.options.dayList[day.day.getFullYear()];
        if (!year) return false;

        const month = year[day.day.getMonth() + 1];
        if (!month) return false;

        return month.indexOf(day.day.getDate()) > -1;
    }
}

type SelectionKind = 'start' | 'end';

