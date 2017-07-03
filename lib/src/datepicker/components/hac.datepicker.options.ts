
export interface HacDatepickerOptions {
    currentDisplayMonth?: Date;
    locale?: IHacDatepickerLocalization;
    showMonths?: number;
}

export type IHacDatepickerLocalization = {
    Days: {
        MON: string,
        TUE: string,
        WED: string,
        THU: string,
        FRI: string,
        SAT: string,
        SUN: string
    },
    Months: {
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
    Days: {
        MON: 'Mon',
        TUE: 'Tue',
        WED: 'Wed',
        THU: 'Thu',
        FRI: 'Fri',
        SAT: 'Sat',
        SUN: 'Sun'
    },
    Months: {
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