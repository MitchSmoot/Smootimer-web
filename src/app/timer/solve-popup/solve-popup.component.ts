import { Component, Input, OnInit } from '@angular/core';
import { Solve } from 'src/app/shared/models/solve.model';

@Component({
  selector: 'solve-popup',
  templateUrl: 'solve-popup.component.html'
})
export class SolvePopupComponent implements OnInit {

  @Input() solve: Solve = {
      event: '3x3',
      time: 20000,
      solveDate: new Date()
  };

  constructor() {}

  ngOnInit() {

  }
}
