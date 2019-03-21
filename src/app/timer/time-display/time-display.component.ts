import { Component, OnDestroy, HostListener } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

export interface Solve { time: number; }

@Component({
  selector: 'app-time-display',
  templateUrl: 'time-display.component.html',
  styleUrls: ['time-display.component.scss']
})
export class TimeDisplayComponent implements OnDestroy {

  solves: Observable<any[]>;
  private solvesCollection: AngularFirestoreCollection<Solve>;

  constructor(
    db: AngularFirestore
  ) {
    this.solves = db.collection('solves').valueChanges();
  }

  timeCounter: number | any = 0;
  timing: boolean;
  timerRef;
  countdownRef;
  countdown: number = 15;
  countingDown: boolean;
  buttonText: string = 'Start';
  keyBuffer: boolean = false;
  countDownTimerEnabled: boolean;

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
    this.solvesCollection.add({time: this.timeCounter});
  }

}
