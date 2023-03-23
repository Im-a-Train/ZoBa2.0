import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'TransfromFieldNames' })
export class TransfromFieldNames implements PipeTransform {
    transform(title: string): string {
        const titleNameList : Record<string, string> = {
            firstName: ''
        };
        return titleNameList[title];
    }
}