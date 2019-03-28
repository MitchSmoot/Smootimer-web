import { NgModule } from '@angular/core';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { TimeDisplayPipe } from '../core/pipes/time-display.pipe';
import { TimeListComponent } from './time-list/time-list.component';
import { CommonModule } from '@angular/common';
import { TimerNavComponent } from './timer-nav/timer-nav.component';

@NgModule({
  imports: [TimerRoutingModule, CommonModule],
  declarations: [
    TimerComponent,
    TimeDisplayComponent,
    TimeDisplayPipe,
    TimeListComponent,
    TimerNavComponent
  ],
  exports: []
})
export class TimerModule {}
