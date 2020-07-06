import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PremiumEventComponent } from './premium-event/premium-event.component';

@NgModule({
  declarations: [
    AppComponent,
    PremiumEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
