import { Component, OnDestroy } from '@angular/core';

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

  timerButtonClicked(): void {
    if (!this.timing) {
      this.startTimer()
    } else if (this.timing) {
      this.stopTimer()
    }
  }

  onKeyUp(event): void {
    if (!this.timing) {
      this.startTimer()
    }
    console.log(event);
  }

  onKeyDown(event): void {
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
