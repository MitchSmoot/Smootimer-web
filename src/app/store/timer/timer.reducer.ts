
import { TimerActions, TimerActionTypes } from './timer.actions';
import { Solve } from 'src/app/shared/models/solve.model';
import { Event } from 'src/app/shared/models/event.model';

export interface TimerState {
  pending: boolean;
  times: Solve[];
  error: string;
  event: Event;
}

export const initialState: TimerState = {
  pending: false,
  times: [],
  error: '',
  event: undefined
};

export function timerReducer(state = initialState, action: TimerActions): TimerState {
  switch (action.type) {

    // case TimerActionTypes.LoadTimes:
    //   return {
    //     ...state,
    //     pending: true
    //   };

    // case TimerActionTypes.LoadTimesSuccess:
    //   return {
    //     ...state,
    //     pending: false,
    //     times: action.payload
    //   };

    // case TimerActionTypes.LoadTimesFailure:
    //   return {
    //     ...state,
    //     pending: false,
    //     error: action.payload
    //   };

    case TimerActionTypes.ChangeEvent:
      return {
        ...state,
        event: action.payload
      };

    default:
      return state;
  }
}
