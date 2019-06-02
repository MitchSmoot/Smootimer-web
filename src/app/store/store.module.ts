import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerStateModule } from './timer/timer-state.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: 'SmooTimer'
        })
      : [],
    EffectsModule.forRoot([]),
    TimerStateModule
  ]
})
export class RootStoreModule { }
