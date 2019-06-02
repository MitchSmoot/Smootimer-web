import { Component } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { TimerService } from 'src/app/core/services/timer.service';
import { Store } from '@ngrx/store';
import { ChangeEvent } from 'src/app/store/timer/timer.actions';
import { RootState } from 'src/app/store';

@Component({
  selector: 'timer-nav',
  templateUrl: 'timer-nav.component.html',
  styleUrls: ['timer-nav.component.scss']
})
export class TimerNavComponent {

  constructor(public eventService: EventService,
              private timerService: TimerService,
              private store: Store<RootState>) {  }

  eventClicked(event) {
    this.store.dispatch(new ChangeEvent(event));
    this.eventService.changeEvent(event);
    this.timerService.getTimes();
  }
}