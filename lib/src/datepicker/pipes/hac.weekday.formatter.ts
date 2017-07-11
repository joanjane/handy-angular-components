import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { WeekDay } from '../models';
import { DatePipe } from '@angular/common';

@Injectable()
@Pipe({
    name: 'hacWeekDayFormatter'
})
export class HacWeekDayFormatter implements PipeTransform {
    private Monday      = new Date(2016, 1, 1, 0, 0, 0, 0);
    private Tuesday     = new Date(2016, 1, 2, 0, 0, 0, 0);
    private Wednesday   = new Date(2016, 1, 3, 0, 0, 0, 0);
    private Thursday    = new Date(2016, 1, 4, 0, 0, 0, 0);
    private Friday      = new Date(2016, 1, 5, 0, 0, 0, 0);
    private Saturday    = new Date(2016, 1, 6, 0, 0, 0, 0);
    private Sunday      = new Date(2016, 1, 7, 0, 0, 0, 0);

    constructor(private datePipe: DatePipe) { }

    transform(value: WeekDay, customFormat = 'EEE'): string {
        if (value != null) {
            switch (value) {
                case WeekDay.Monday:
                    return this.datePipe.transform(this.Monday, customFormat);
                case WeekDay.Tuesday:
                    return this.datePipe.transform(this.Tuesday, customFormat);
                case WeekDay.Wednesday:
                    return this.datePipe.transform(this.Wednesday, customFormat);
                case WeekDay.Thursday:
                    return this.datePipe.transform(this.Thursday, customFormat);
                case WeekDay.Friday:
                    return this.datePipe.transform(this.Friday, customFormat);
                case WeekDay.Saturday:
                    return this.datePipe.transform(this.Saturday, customFormat);
                case WeekDay.Sunday:
                    return this.datePipe.transform(this.Sunday, customFormat);
            }
        }
        return '';
    }
}