import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { IHacDropdownOption } from "./";

@Injectable()
@Pipe({
    name: 'hacDropdownFilter'
})
export class HacDropdownFilterPipe implements PipeTransform {
    transform(value: IHacDropdownOption[], filter: string) {
        if (!filter) return value;
        return value.filter(o => o.label.indexOf(filter) > -1 || o.value === filter);
    }
}