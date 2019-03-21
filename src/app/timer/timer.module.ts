import { NgModule } from '@angular/core';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { TimeDisplayPipe } from '../pipes/time-display.pipe';
import { TimeListComponent } from './time-list/time-list.component';

@NgModule({
  imports: [TimerRoutingModule],
  declarations: [
    TimerComponent,
    TimeDisplayComponent,
    TimeDisplayPipe,
    TimeListComponent
  ]
})
export class TimerModule {}
