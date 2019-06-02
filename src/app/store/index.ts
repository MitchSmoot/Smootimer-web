import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TimerState, timerReducer } from './timer/timer.reducer';

export interface RootState {
  timer?: TimerState;
}

export const reducers: ActionReducerMap<RootState> = {
  timer: timerReducer
};


export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
