import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { IHacDropdownOption } from "../hac.dropdown.model";

@Injectable()
@Pipe({
    name: 'hacDropdownFilter'
})
export class HacDropdownFilterPipe implements PipeTransform {
    transform(value: IHacDropdownOption[], filter: string, apply = true) {
        if (!filter || !apply) return value;
        return value.filter(o => o.label.indexOf(filter) > -1 || o.value === filter);
    }
}