import { Component, OnInit } from '@angular/core';
import { PremiumEventsDictionary } from "./premiumEvent.model"
import { premiumEvent } from "./premiumEvent.mockFile"
@Component({
  selector: 'app-premium-event',
  templateUrl: './premium-event.component.html',
  styleUrls: ['./premium-event.component.css']
})
export class PremiumEventComponent implements OnInit {

  premiumEvents: PremiumEventsDictionary[] = premiumEvent;

  constructor() { }

  ngOnInit(): void {
  }

}
