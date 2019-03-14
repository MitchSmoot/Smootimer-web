import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationNavComponent } from './app-nav/app-nav.component';
import { ApplicationHomeComponent } from './home/app-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationNavComponent,
    ApplicationHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
