import { Component, inject } from '@angular/core';
import * as d3 from 'd3';
import { TimerService } from '../timer/timer.service';

@Component({
  selector: 'app-timer-chart',
  imports: [],
  templateUrl: './timer-chart.html',
  styleUrl: './timer-chart.scss'
})
export class TimerChart {
  timerService = inject(TimerService);
  solves = this.timerService.solves;


  ngOnChanges(): void {
    this.createChart();
  }

  createChart(): void {
   const data = this.solves().map(solve => solve.time);
   const svg = d3.select("app-timer-chart").append("svg")
                 .attr("width", 700)
                 .attr("height", 300);
   
   svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", (d, i) => i * 70)
     .attr("y", d => 300 - d)
     .attr("width", 65)
     .attr("height", d => d)
     .attr("fill", "blue");
 }

}