import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { IHacDropdownOption } from "../models";

@Injectable()
@Pipe({
    name: 'hacDropdownColumnizer'
})
export class HacDropdownColumnizerPipe implements PipeTransform {
    transform(value: IHacDropdownOption[], columns: number = 1) {
        if (typeof columns !== 'number' || columns === 1) return [value];

        let output = [];
        let currentCols = [];

        for (let i = 1; i <= value.length; i++) {
            currentCols.push(value[i - 1]);
            if (i % columns === 0) {
                output.push(currentCols);
                currentCols = [];
            }
        }

        if (currentCols.length > 0) {
            output.push(currentCols);
        }

        return output;
    }
}