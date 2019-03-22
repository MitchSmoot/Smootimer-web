import { Injectable } from '@angular/core';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private timeService: TimeService) { }

}
