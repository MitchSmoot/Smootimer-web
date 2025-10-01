import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { TimerPage } from './features/smootimer/timer-page/timer-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'timer', component: TimerPage },
  
  { path: '**', redirectTo: '' },
];
