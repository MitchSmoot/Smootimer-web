import { Component } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { TimerService } from 'src/app/core/services/timer.service';

@Component({
  selector: 'timer-nav',
  templateUrl: 'timer-nav.component.html',
  styleUrls: ['timer-nav.component.scss']
})
export class TimerNavComponent {
  
  constructor(public eventService: EventService,
              private timerService: TimerService) {  }

  eventClicked(event) {
    this.eventService.changeEvent(event);
    this.timerService.getTimes();
  }
}