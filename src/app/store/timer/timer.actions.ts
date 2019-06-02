import { Action } from '@ngrx/store';
import { Event } from 'src/app/shared/models/event.model';

export enum TimerActionTypes {
  LoadTimes = '[Timer] Load Times',
  LoadTimesSuccess = '[Timer] Load Times Success',
  LoadTimesFailure = '[Timer] Load Times Failure',
  ChangeEvent = '[Timer] Change Event'
}

export class LoadTimes implements Action {
  readonly type = TimerActionTypes.LoadTimes;
}

export class LoadTimesSuccess implements Action {
  readonly type = TimerActionTypes.LoadTimesSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadTimesFailure implements Action {
  readonly type = TimerActionTypes.LoadTimesFailure;
  constructor(public payload: { error: any }) { }
}

export class ChangeEvent implements Action {
  readonly type = TimerActionTypes.ChangeEvent;
  constructor(public payload: Event) { }
}

export type TimerActions = LoadTimes | LoadTimesSuccess | LoadTimesFailure | ChangeEvent;

