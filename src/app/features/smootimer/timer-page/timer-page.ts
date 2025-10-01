import { Component } from '@angular/core';
import { Timer } from "../timer/timer";
import { SolveList } from "../solve-list/solve-list";
import { EventSelector } from "../event-selector/event-selector";

@Component({
  selector: 'app-timer-page',
  imports: [Timer, SolveList, EventSelector],
  templateUrl: './timer-page.html',
  styleUrl: './timer-page.scss'
})
export class TimerPage {

}
