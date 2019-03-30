import { Component } from '@angular/core';
import { TimeService } from './../core/services/time.service';

@Component({
  templateUrl: './timer.component.html'
})
export class TimerComponent {
  constructor(public timeService: TimeService) {}
}
