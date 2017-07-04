
export class HacDatepickerOptions {
    currentDisplayMonth?: Date;
    locale?: IHacDatepickerLocalization;
    showMonths?: number;
}

export type IHacDatepickerLocalization = {
    days: {
        MON: string,
        TUE: string,
        WED: string,
        THU: string,
        FRI: string,
        SAT: string,
        SUN: string
    },
    months: {
        JAN: string,
        FEB: string,
        MAR: string,
        APR: string,
        MAY: string,
        JUN: string,
        JUL: string,
        AUG: string,
        SEP: string,
        OCT: string,
        NOV: string,
        DEC: string
    }
}

export const DefaultDatePickerLabels: IHacDatepickerLocalization = {
    days: {
        MON: 'Mon',
        TUE: 'Tue',
        WED: 'Wed',
        THU: 'Thu',
        FRI: 'Fri',
        SAT: 'Sat',
        SUN: 'Sun'
    },
    months: {
        JAN: 'January',
        FEB: 'February',
        MAR: 'March',
        APR: 'April',
        MAY: 'May',
        JUN: 'June',
        JUL: 'July',
        AUG: 'August',
        SEP: 'September',
        OCT: 'October',
        NOV: 'November',
        DEC: 'December'
    }
};

export const WeekDayList = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];