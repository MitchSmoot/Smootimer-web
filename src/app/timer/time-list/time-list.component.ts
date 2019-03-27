import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/core/services/time.service';
import { Solve } from 'src/app/shared/models/solve.model';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-time-list',
  templateUrl: 'time-list.component.html',
  styleUrls: ['time-list.component.scss']
})
export class TimeListComponent implements OnInit {

  solves: Solve[];

  constructor(
    public timeService: TimeService,
    public eventService: EventService
  ) {  }

  ngOnInit() {
    this.timeService.getSolves().subscribe(data => {
      this.solves = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Solve;
      })
    });
  }

  log(event) {
    console.log(event);
  }

  delete(id) {
      this.timeService.deleteSolve(id);
  }
}
