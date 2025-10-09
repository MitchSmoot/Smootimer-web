import { Component, inject } from '@angular/core';
import { Solve, TimerService } from '../timer/timer.service';
import { TimeDisplayPipe } from "../../../core/time-display-pipe";
import { EventService } from '../timer/event.service';
import { computed } from '@angular/core';

@Component({
  selector: 'app-solve-list',
  imports: [TimeDisplayPipe],
  templateUrl: './solve-list.html',
  styleUrl: './solve-list.scss'
})
export class SolveList {
  timerService = inject(TimerService);
  eventService = inject(EventService);
  solves = this.timerService.solves;

  filteredSolves = computed(() => {
    const eventTitle = this.eventService.currentEvent().title;
    return this.solves().filter(solve => solve.event === eventTitle);
  });

  log(event: any) {
    console.log(event);
  }

  delete(id: any) {
    this.timerService.deleteSolve(id);
    console.log('deleted', id);
  }
}
