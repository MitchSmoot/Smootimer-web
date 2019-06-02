import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadTimesFailure, LoadTimesSuccess, TimerActionTypes, TimerActions } from './timer.actions';
import { TimerService } from 'src/app/core/services/timer.service';
import { TimeService } from 'src/app/core/services/time.service';



@Injectable()
export class TimerEffects {

  @Effect()
  loadTimers$ = this.actions$.pipe(
    ofType(TimerActionTypes.LoadTimes),
    concatMap(() =>
      this.timeService.getSolves().pipe(
        map(data => new LoadTimesSuccess({ data })),
        catchError(error => of(new LoadTimesFailure({ error }))))
    )
  );


  constructor(
    private timeService: TimeService,
    private timerService: TimerService,
    private actions$: Actions<TimerActions>) {}

}
