import { NgModule } from '@angular/core';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';

@NgModule({
    imports: [TimerRoutingModule],
    declarations: [TimerComponent]
})
export class TimerModule {}