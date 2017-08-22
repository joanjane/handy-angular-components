import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { HacDropdownOption } from '../models';

@Injectable()
@Pipe({
    name: 'hacDropdownFilter'
})
export class HacDropdownFilterPipe implements PipeTransform {
    transform(value: HacDropdownOption[], filter: string, apply = true) {
        if (!filter || !apply) return value;
        return value.filter(o => o.label.toLowerCase().indexOf(filter.toLowerCase()) > -1 || o.key.toString().toLowerCase() === filter.toLowerCase());
    }
}