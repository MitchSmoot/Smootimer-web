import { Injectable } from '@angular/core';
import { TimeService } from './time.service';
import { EventService } from './event.service';
import { Solve } from 'src/app/shared/models/solve.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  solves: Solve[];

  constructor(private timeService: TimeService,
              private eventService: EventService) { }

  getTimes() {
    this.timeService.getSolvesFiltered(this.eventService.currentEvent.title).subscribe(data => {
      this.solves = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Solve;
      })
    });    
  }


}
