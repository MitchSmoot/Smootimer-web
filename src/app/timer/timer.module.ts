import { NgModule } from '@angular/core';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { TimeDisplayPipe } from '../core/pipes/time-display.pipe';
import { TimeListComponent } from './time-list/time-list.component';
import { CommonModule } from '@angular/common';
import { TimerNavComponent } from './timer-nav/timer-nav.component';
import { SolvePopupComponent } from './solve-popup/solve-popup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    TimerRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    TimerComponent,
    TimeDisplayComponent,
    TimeDisplayPipe,
    TimeListComponent,
    TimerNavComponent,
    SolvePopupComponent
  ],
  exports: []
})
export class TimerModule {}
