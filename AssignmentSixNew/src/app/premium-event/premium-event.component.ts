import { Component, OnInit } from '@angular/core';
import { PremiumEventsDictionary } from "./premiumEvent.model"
import { premiumEvents } from "./premiumEvent.mockFile"

@Component({
  selector: 'app-premium-event',
  templateUrl: './premium-event.component.html',
  styleUrls: ['./premium-event.component.css']
})
export class PremiumEventComponent implements OnInit {

  premiumEvents: PremiumEventsDictionary[] = premiumEvents;

  setColor(color) {
    switch(color) {
        case "Online":
            return "green";

        case "InPerson":
            return 'red';

        default :
            return "grey";

    }
}

  constructor() { }

  ngOnInit(): void {
  }

}
