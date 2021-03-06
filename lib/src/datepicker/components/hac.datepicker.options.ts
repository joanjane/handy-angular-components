/**
 * Options for HacDatepickerComponent 
 */
export interface HacDatepickerOptions {
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
     * @default false
     * Display a 'clear' button to remove selected dates.
     */
    enableClearAction?: boolean;

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
}

export type HacDatepickerDayList = {
    [year: number]: {
        [month: number]: number[]
    }
};