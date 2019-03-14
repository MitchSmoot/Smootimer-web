import { Component, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'time-display',
  templateUrl: 'time-display.component.html',
  styleUrls: ['time-display.component.scss']
})
export class TimeDisplayComponent implements OnDestroy {

  timeCounter: number = 0;
  timing: boolean;
  timerRef;
  buttonText: string = "start"
  keyBuffer: boolean = false;

  timerButtonClicked(): void {
    if (!this.timing) {
      this.startTimer()
      this.keyBuffer = true;
    } else if (this.timing) {
      this.stopTimer()
      this.keyBuffer = false;
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (!this.timing && this.keyBuffer === false) {
      this.startTimer()
      this.keyBuffer = true;
    } else {
      this.keyBuffer = false;
    }
    console.log(event);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.timing) {
      this.stopTimer()
    }
    console.log(event);
  }

  startTimer(): void {
    this.timeCounter = 0;
    this.timing = true;
    this.buttonText = "Stop"
    const startTime = Date.now() - (this.timeCounter || 0);
    this.timerRef = setInterval(() => {
      this.timeCounter = Date.now() - startTime;
    });
  }

  stopTimer(): void {
    this.timing = false;
    this.buttonText = "Start"
    clearInterval(this.timerRef);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerRef);
  }

}
