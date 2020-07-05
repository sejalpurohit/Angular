import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PremiumEventsComponent } from './premium-events/premium-events.component';

@NgModule({
  declarations: [
    AppComponent,
    PremiumEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
