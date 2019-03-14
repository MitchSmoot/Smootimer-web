import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timeDisplay'})

export class TimeDisplayPipe implements PipeTransform {
    transform(time: number): string {
        const milliseconds = time % 1000;
        const seconds = ((time % 60000) - milliseconds) / 1000;
        const minutes = (time - (seconds * 1000) - milliseconds) / 60000 ;
        return (minutes + ':' + seconds + ':' + milliseconds);
    }
}
