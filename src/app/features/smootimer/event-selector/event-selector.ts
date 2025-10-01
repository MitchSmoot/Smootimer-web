import { Component, inject } from '@angular/core';
import { EventService } from '../timer/event.service';
import { TimerService } from '../timer/timer.service';

@Component({
  selector: 'app-event-selector',
  imports: [],
  templateUrl: './event-selector.html',
  styleUrl: './event-selector.scss'
})
export class EventSelector {
  eventService = inject(EventService);
  timerService = inject(TimerService);

  eventClicked(event: any) {
    this.eventService.changeEvent(event);
    this.timerService.getTimes();
  }
}
