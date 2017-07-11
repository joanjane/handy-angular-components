/*
 <  January 2017   >
_____________________
[M][T][W][T][F][S][S]
---------------------
 _  1  2  3  4  5  6
 7  8  9  10 11 12 13
 14 15 16 17 18 19 20
 21 22 23 24 25 26 27
 28 29 30 31 __ __ __

*/

import { DateHelper } from '.';

export enum WeekDay {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

export const weekDayList = [
    WeekDay.Monday,
    WeekDay.Tuesday,
    WeekDay.Wednesday,
    WeekDay.Thursday,
    WeekDay.Friday,
    WeekDay.Saturday,
    WeekDay.Sunday
];

const startWeekDay = WeekDay.Monday;

export class HacCalendarDayModel {
    day: Date;

    constructor(day: Date) {
        this.day = day;
    }

    isToday() {
        return DateHelper.areDatesEqual(this.day, new Date());
    }
}

export class HacCalendarWeekModel {
    days: HacCalendarDayModel[] = [];

    addDay(day: Date): void {
        if (this.days.length === 0 && day.getDay() !== startWeekDay) {
            const previousDay = new Date(day);
            previousDay.setDate(previousDay.getDate() - 1);
            this.addDay(previousDay);
        }
        this.days.push(new HacCalendarDayModel(day));
    }
}

export class HacCalendarModel {
    month: Date;
    weeks: HacCalendarWeekModel[] = [];

    constructor(month: Date) {
        this.month = new Date(month.getFullYear(), month.getMonth(), 1, 0, 0, 0, 0);
        this.buildCalendar();
    }

    buildCalendar(): void {
        let day = new Date(this.month);
        const lastDay = this.getLastDay();
        while (day <= lastDay) {
            // add new week when on first week day or first week
            if (day.getDay() === startWeekDay || this.weeks.length === 0) {
                let week = new HacCalendarWeekModel();
                week.addDay(new Date(day));
                this.weeks.push(week);
            } else { // add day to current week
                this.weeks[this.weeks.length - 1].addDay(new Date(day));
            }

            day.setDate(day.getDate() + 1); // next day
        }

        // add remaining days of last week from next month
        const lastWeek = this.weeks[this.weeks.length - 1];
        while (lastWeek.days.length < 7) {
            lastWeek.addDay(new Date(day));
            day.setDate(day.getDate() + 1);
        }
    }

    contains(day: HacCalendarDayModel): boolean {
        return day.day.getFullYear() === this.month.getFullYear() && day.day.getMonth() === this.month.getMonth();
    }

    private getLastDay(): Date {
        return new Date(
            this.month.getFullYear(),
            this.month.getMonth() + 1,
            0
        );
    }
}
