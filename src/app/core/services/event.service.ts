import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  currentEvent = '3x3';

  constructor() { }
}
