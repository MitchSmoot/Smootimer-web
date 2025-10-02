import { Component } from '@angular/core';
import { Timer } from "../timer/timer";
import { SolveList } from "../solve-list/solve-list";
import { EventSelector } from "../event-selector/event-selector";
import { TimerChart } from "../timer-chart/timer-chart";

@Component({
  selector: 'app-timer-page',
  imports: [Timer, SolveList, EventSelector, TimerChart],
  templateUrl: './timer-page.html',
  styleUrl: './timer-page.scss'
})
export class TimerPage {

}
