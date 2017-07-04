/*
    January 2017
_____________________
[M][T][W][T][F][S][S]
---------------------
 _  1  2  3  4  5  6
 7  8  9  10 11 12 13
 14 15 16 17 18 19 20
 21 22 23 24 25 26 27
 28 29 30 31 __ __ __

*/

export enum WeekDay {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

const startWeekDay = WeekDay.Monday;
const endWeekDay = WeekDay.Sunday;

export class HacCalendarModel {
    month: Date;
    weeks: HacCalendarWeekModel[] = [];

    constructor(month: Date) {
        this.month = new Date(month.getFullYear(), month.getMonth(), 1, 0, 0, 0, 0);
        this.buildCalendar();
    }

    buildCalendar() {
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

    contains(day: Date) {
        return day.getFullYear() === this.month.getFullYear() && day.getMonth() === this.month.getMonth();
    }

    private getLastDay(): Date {
        return new Date(
            this.month.getFullYear(),
            this.month.getMonth() + 1,
            0
        );
    }

}

export class HacCalendarWeekModel {
    days: HacCalendarDayModel[] = [];

    addDay(day: Date) {
        if (this.days.length === 0 && day.getDay() != startWeekDay) {
            var previousDay = new Date(day);
            previousDay.setDate(previousDay.getDate() -1);
            this.addDay(previousDay);
        }
        this.days.push(day);
    }

    private getPreviousWeekDay(weekDay: number) {
        if(weekDay === WeekDay.Sunday) {
            return WeekDay.Saturday;
        } else {
            return weekDay--;
        }
    }
}

export class HacCalendarDayModel {
    day?: Date;
}

export class DateHelper {
    static formatIsoDate(day: Date) {
        return `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`
    }

    static areDatesEqual(day1: Date, day2: Date){
        return day1 && day2 && this.formatIsoDate(day1) === this.formatIsoDate(day2);
    }
}