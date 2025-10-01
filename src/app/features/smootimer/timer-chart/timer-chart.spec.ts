import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerChart } from './timer-chart';

describe('TimerChart', () => {
  let component: TimerChart;
  let fixture: ComponentFixture<TimerChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
