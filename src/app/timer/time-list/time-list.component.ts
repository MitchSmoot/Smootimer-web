import { Component } from '@angular/core';
import { TimeService } from 'src/app/core/services/time.service';

@Component({
    selector: 'app-time-list',
    templateUrl: 'time-list.component.html'
})
export class TimeListComponent {

  constructor(
    public timeService: TimeService
  ) {  }

  log(event) {
    console.log(event);
  }
}
