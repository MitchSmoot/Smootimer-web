import { Component, OnDestroy, HostListener } from '@angular/core';
import { TimeService } from 'src/app/core/services/time.service';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-time-display',
  templateUrl: 'time-display.component.html',
  styleUrls: ['time-display.component.scss']
})
export class TimeDisplayComponent implements OnDestroy {

  timeCounter: number | any = 0;
  timing: boolean;
  timerRef;
  countdownRef;
  countdown = 15;
  countingDown: boolean;
  buttonText = 'Start';
  keyBuffer = false;
  countDownTimerEnabled: boolean;

  constructor(private timeService: TimeService,
              private eventService: EventService) { }

  timerButtonClicked(): void {
    if (this.countDownTimerEnabled) {
      this.startCountdown();
    } else if (this.countingDown === true) {
      this.stopCountdown();
    } else if (!this.timing) {
      this.startTimer();
      this.keyBuffer = true;
    } else if (this.timing) {
      this.stopTimer();
      this.submitTime();
      this.keyBuffer = false;
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (!this.timing && this.keyBuffer === false) {
      this.startTimer();
      this.keyBuffer = true;
    } else {
      this.keyBuffer = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (this.timing) {
      this.stopTimer();
      this.submitTime();
    }
  }

  startTimer(): void {
    this.timeCounter = 0;
    this.timing = true;
    this.buttonText = 'Stop';
    const startTime = Date.now() - (this.timeCounter || 0);
    this.timerRef = setInterval(() => {
      this.timeCounter = Date.now() - startTime;
    });
  }

  stopTimer(): void {
    this.timing = false;
    this.buttonText = 'Start';
    clearInterval(this.timerRef);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerRef);
  }

  startCountdown(): void {
    this.countingDown = true;
    this.countdownRef = setInterval(() =>
    this.countdown = this.countdown - 1);
  }

  stopCountdown(): void {
    this.countingDown = false;
    clearInterval(this.countdownRef);
  }

  submitTime(): void {
    console.log('submitTime');
    this.timeService.addSolve({
      time: this.timeCounter,
      event: this.eventService.currentEvent.title,
      solveDate: new Date()
    });
  }

  deleteTime(id): void {
    this.timeService.deleteSolve(id);
  }

}
