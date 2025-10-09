import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { TimerPage } from './features/smootimer/timer-page/timer-page';
import { DataImportPage } from './features/data-import/data-import-page/data-import-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'timer', component: TimerPage },
  { path: 'import', component: DataImportPage },
  
  { path: '**', redirectTo: '' },
];
