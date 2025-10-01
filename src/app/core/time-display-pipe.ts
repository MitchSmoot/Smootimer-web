import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDisplay'
})
export class TimeDisplayPipe implements PipeTransform {
    transform(time: number): string {
        const milliseconds = time % 1000;
        const seconds = ((time % 60000) - milliseconds) / 1000;
        const minutes = (time - (seconds * 1000) - milliseconds) / 60000 ;
        let displayedMilliseconds: string;
        let displayedSeconds: string;
        if (milliseconds <= 9) {
            displayedMilliseconds = '00' + milliseconds.toString();
        } else if (milliseconds <= 90) {
            displayedMilliseconds = '0' + milliseconds.toString();
        } else {
            displayedMilliseconds = milliseconds.toString();
        }
        if (seconds <= 9) {
            displayedSeconds = '0' + seconds.toString();
        } else {
            displayedSeconds = seconds.toString();
        }
        return (minutes + ':' + displayedSeconds + '.' + displayedMilliseconds);
    }
}
