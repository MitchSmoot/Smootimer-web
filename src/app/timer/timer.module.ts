import { NgModule } from '@angular/core';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { TimeDisplayComponent } from './time-display/time-display.component';

@NgModule({
  imports: [TimerRoutingModule],
  declarations: [
    TimerComponent,
    TimeDisplayComponent
  ]
})
export class TimerModule {}