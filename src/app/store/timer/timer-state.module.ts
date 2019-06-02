import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTimer from './timer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TimerEffects } from './timer.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('timer', fromTimer.timerReducer),
    EffectsModule.forFeature([TimerEffects])
  ]
})
export class TimerStateModule { }
