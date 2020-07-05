import { Component, OnInit } from '@angular/core';
import { PremiumEventsDictionary } from "./premiumEvent.model"
import { premiumEvents } from "./premiumEvent.mockFile"

@Component({
  selector: 'app-premium-events',
  templateUrl: './premium-events.component.html',
  styleUrls: ['./premium-events.component.css']
})
export class PremiumEventsComponent implements OnInit {

  premiumEvents: PremiumEventsDictionary[] = premiumEvents;


  constructor() {
   }

  ngOnInit(): void {
  }

}
