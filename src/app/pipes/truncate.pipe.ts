import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
    transform(value: string, endIndex: number): string {
        let truncated = value.substring(0, endIndex) + "..."

        return truncated;
    }
}