import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationHomeComponent } from './home/app-home.component';

const routes: Routes = [
  {
    path: 'timer',
    loadChildren: './timer/timer.module#TimerModule'
  },
  {
    path: '',
    component: ApplicationHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
