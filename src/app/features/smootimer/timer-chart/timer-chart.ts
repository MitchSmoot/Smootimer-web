import { Component, effect, inject } from '@angular/core';
import * as d3 from 'd3';
import { Solve, TimerService } from '../timer/timer.service';

@Component({
  selector: 'app-timer-chart',
  imports: [],
  templateUrl: './timer-chart.html',
  styleUrl: './timer-chart.scss'
})
export class TimerChart {
  private timerService = inject(TimerService);
  solves = this.timerService.solves();


  private svg: d3.Selection<SVGGElement, unknown, HTMLElement, any> | null = null;
  private width = 600;
  private height = 400;
  private margin = { top: 20, right: 20, bottom: 30, left: 50 };

  constructor() {
    // Effect to react to data changes
    effect(() => {
      const solves = this.timerService.solves();
      this.updateChart(solves);
    });
  }

  private updateChart(solves: Solve[]): void {
    // Clear existing chart
    d3.select('#chart').selectAll('*').remove();

    // Set up SVG container
    this.svg = d3.select('#chart')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    const innerWidth = this.width - this.margin.left - this.margin.right;
    const innerHeight = this.height - this.margin.top - this.margin.bottom;

    // Set up scales
    const x = d3.scaleTime()
      .domain(d3.extent(solves, d => d.solveDate) as [Date, Date])
      .range([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(solves, d => d.time) as number])
      .range([innerHeight, 0]);

    // Define the line
    const line = d3.line<{ solveDate: Date, time: number }>()
      .x(d => x(d.solveDate))
      .y(d => y(d.time));

    // Add the line path
    this.svg.append('path')
      .datum(solves)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Add x-axis
    this.svg.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x));

    // Add y-axis
    this.svg.append('g')
      .call(d3.axisLeft(y));
  }

}
