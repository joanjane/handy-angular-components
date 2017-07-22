import { Component, Input, Output, EventEmitter, OnInit, ElementRef, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HacDatepickerOptions } from './hac.datepicker.options';
import { HacCalendarModel, HacCalendarDayModel, weekDayList, WeekDay } from '../models/hac.calendar.model';
import { HacWeekDayFormatter } from '../pipes/hac.weekday.formatter';
import { DateHelper } from '../../common/helpers/date.helper';
import { HacImmutableHelper } from '../../common/helpers/immutable.operations';

@Component({
    selector: 'hac-datepicker',
    templateUrl: './hac.datepicker.html',
    providers: [
        DatePipe,
        HacWeekDayFormatter
    ]
})
export class HacDatepickerComponent implements OnInit {
    private _startDate: Date | string;
    public get startDate(): Date | string {
        return this._startDate;
    }
    @Input()
    public set startDate(v: Date | string) {
        this._startDate = v;
        if (!v) return;

        // reset invalid dates (disabled day or past time)
        if (this.isDisabled(new HacCalendarDayModel(v))
            || (this.options.range && this._endDate && DateHelper.isGreater(v, this._endDate))) {
            setTimeout(() => {
                this.setEndDate(null);
                this.forceSelectionKind('end');
            }, 0);
        }
    }

    private _endDate: Date | string;
    public get endDate(): Date | string {
        return this._endDate;
    }
    @Input()
    public set endDate(v: Date | string) {
        this._endDate = v;
        if (!v) return;

        // reset invalid dates (disabled day or past time)
        if (this.isDisabled(new HacCalendarDayModel(v))
            || (this.options.range && this._startDate && DateHelper.isGreater(this._startDate, v))) {
            setTimeout(() => {
                this.setEndDate(null);
                this.forceSelectionKind('end');
            }, 0);
        }
    }

    @Output() startDateChange = new EventEmitter<Date | string>();
    @Output() endDateChange = new EventEmitter<Date | string>();

    /* Single date startDate alias */
    public get selected(): Date | string {
        return this.startDate;
    }
    @Input()
    public set selected(v: Date | string) {
        this.setStartDate(v);
    }
    /* Single date startDate alias */
    @Output()
    public get selectedChange(): EventEmitter<Date | string> {
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
    weekDayList: WeekDay[] = weekDayList;

    private _collapsed = true;
    public get collapsed(): boolean {
        return this._collapsed;
    }
    public set collapsed(v: boolean) {
        this.animate();
        this._collapsed = v;
    }

    private forcedSelectionKind?: SelectionKind;
    private hoverDate?: Date;

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.setOptionsDefaults();
        this.buildCalendarModel();
    }

    @HostListener('document:click', ['$event'])
    onClick(event) {
        if (this.options.elementId && event.target.htmlFor === this.options.elementId) {
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
                if (day.day > this._endDate) {
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
        return DateHelper.areDatesEqual(day.day, this._startDate)
            || this.options.range && DateHelper.areDatesEqual(day.day, this._endDate);
    }

    isDisabled(day: HacCalendarDayModel): boolean {
        const exceedsMinDate = this.options.minDate && DateHelper.isGreater(this.options.minDate, day.day);
        if (exceedsMinDate) return true;

        const exceedsMaxDate = this.options.maxDate && DateHelper.isGreater(day.day, this.options.maxDate);
        if (exceedsMaxDate) return true;

        let isBlacklisted = this.options.dayList && this.options.dayListKind === 'blacklist' && this.isInDayList(day);
        isBlacklisted = isBlacklisted || this.options.dayList && this.options.dayListKind === 'whitelist' && !this.isInDayList(day);
        if (isBlacklisted) return true;

        const isPastOverflow = this.getSelectionKind() === 'end' && DateHelper.isGreater(this._startDate, day.day);
        return isPastOverflow;
    }

    isStart(day: HacCalendarDayModel): boolean {
        return this.options.range && DateHelper.areDatesEqual(day.day, this._startDate);
    }

    isEnd(day: HacCalendarDayModel): boolean {
        return this.options.range && DateHelper.areDatesEqual(day.day, this._endDate);
    }

    inRange(day: HacCalendarDayModel, useHover: boolean = false): boolean {
        if (!this.options.range) return false;

        const startDate = useHover ? this.getFirstRangeDay() : this._startDate;
        const endDate = useHover ? this.getLastRangeDay() : this._endDate;
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
        this.options = HacImmutableHelper.set<HacDatepickerOptions>(this.options, {
            currentDisplayMonth: this.options.currentDisplayMonth
        });
        this.buildCalendarModel();
        this.animate();
        $event.stopPropagation();
    }

    nextMonth($event?: Event): void {
        this.options.currentDisplayMonth.setMonth(this.options.currentDisplayMonth.getMonth() + 1);
        this.options = HacImmutableHelper.set<HacDatepickerOptions>(this.options, {
            currentDisplayMonth: this.options.currentDisplayMonth
        });
        this.buildCalendarModel();
        this.animate();
        $event.stopPropagation();
    }

    toggleCalendar(): void {
        this.collapsed = !this.collapsed;
    }

    getSelectionKind(): SelectionKind {
        if (this.forcedSelectionKind) {
            return this.forcedSelectionKind;
        }

        return !this._startDate || (this.options.range && this._startDate && this._endDate) ? 'start' : 'end';
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
        return this._options.enableTodayAction && !this.isDisabled(new HacCalendarDayModel(DateHelper.today()));
    }

    getSelectorElem(): HTMLElement {
        return this.elementRef.nativeElement.querySelector('.hac-cal-selectorwrapper');
    }

    getCalendarWidthMode(): string {
        return this.options.useSelectorWidth ? 'width' : 'minWidth';
    }

    isPrevArrowVisible(calendarIndex: number): boolean {
        const isInRange = !this.getMinDate() || (this.getMinDate() &&
            DateHelper.isGreaterOrEqual(this.calendars[calendarIndex].getPreviousMonthLastDay(), this.getMinDate()));
        return calendarIndex === 0 && isInRange;
    }

    isNextArrowVisible(calendarIndex: number): boolean {
        const isInRange = !this.getMaxDate() || (this.getMaxDate() &&
            DateHelper.isGreaterOrEqual(this.getMaxDate(), this.calendars[calendarIndex].getMonthLastDay()));
        return (calendarIndex === this.calendars.length - 1) && isInRange;
    }

    private setOptionsDefaults(): void {
        let startDate = this._options.currentDisplayMonth ?
            new Date(this.options.currentDisplayMonth) :
            this._startDate ? DateHelper.ensureDateObject(this._startDate) : new Date();

        if ((this._options.minDate && DateHelper.isGreater(this._options.minDate, startDate)) ||
            (this._options.maxDate && DateHelper.isGreater(startDate, this._options.maxDate))) {
            startDate = this._options.minDate ? this._options.minDate : this._options.maxDate;
        }
        const currentDisplayMonth = new Date(startDate);
        currentDisplayMonth.setDate(1);
        DateHelper.resetTime(currentDisplayMonth);
        this._options.currentDisplayMonth = currentDisplayMonth;

        this._options.startDatePlaceholder = this._options.startDatePlaceholder ? this._options.startDatePlaceholder : 'Select';
        this._options.endDatePlaceholder = this._options.endDatePlaceholder ? this._options.endDatePlaceholder : 'Select';
        this._options.startDateFormat = this._options.startDateFormat ? this._options.startDateFormat : 'mediumDate';
        this._options.endDateFormat = this._options.endDateFormat ? this._options.endDateFormat : 'mediumDate';
        this._options.range = this._options.range || false;
        this._options.showMonths = this._options.showMonths || 1;
        this._options.dayListKind = this._options.dayListKind || 'blacklist';
        this._options.enableTodayAction = this._options.enableTodayAction || false;
        this._options.todayActionLabel = this._options.todayActionLabel || 'Today';
        this._options.useSelectorWidth = this._options.useSelectorWidth || false;

        // Force triggering of new selections to ensure that are still valid dates
        this.setStartDate(this._startDate);
        this.setEndDate(this._endDate);
    }

    private setStartDate(day?: Date | string) {
        this.startDate = day;
        this.startDateChange.emit(this._startDate);
        this.hoverDate = DateHelper.ensureDateObject(this._startDate);
    }

    private setEndDate(day?: Date | string) {
        this.endDate = day;
        this.endDateChange.emit(this._endDate);
        this.hoverDate = DateHelper.ensureDateObject(this._endDate);
    }

    private getFirstRangeDay(): Date | string {
        if (this.getSelectionKind() === 'end') {
            return this._startDate;
        }
        return this.hoverDate || this._startDate;
    }

    private getLastRangeDay(): Date | string {
        if (this.getSelectionKind() === 'start') {
            return this._endDate;
        }
        return this.hoverDate || this._endDate;
    }

    private isInDayList(day: HacCalendarDayModel): boolean {
        if (!this.options.dayList) return false;

        const year = this.options.dayList[day.day.getFullYear()];
        if (!year) return false;

        const month = year[day.day.getMonth() + 1];
        if (!month) return false;

        return month.indexOf(day.day.getDate()) > -1;
    }

    private animate() {
        const animatingCssClass = 'hac-cal-wrapper--animating';
        this.elementRef.nativeElement.querySelector('.hac-cal-wrapper').classList.remove(animatingCssClass);
        setTimeout(() => this.elementRef.nativeElement.querySelector('.hac-cal-wrapper').classList.add(animatingCssClass), 100);
    }

    private getMinDate(): Date {
        return this._options.minDate;
    }

    private getMaxDate(): Date {
        return this._options.maxDate;
    }
}

export type SelectionKind = 'start' | 'end';

