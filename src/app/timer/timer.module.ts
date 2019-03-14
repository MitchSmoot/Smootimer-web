import { NgModule, ApplicationModule } from '@angular/core';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { TimeDisplayPipe } from '../pipes/time-display.pipe';

@NgModule({
  imports: [TimerRoutingModule, ApplicationModule],
  declarations: [
    TimerComponent,
    TimeDisplayComponent,
    TimeDisplayPipe
  ]
})
export class TimerModule {}