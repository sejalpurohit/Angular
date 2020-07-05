import { Component, OnInit } from '@angular/core';
import { premiumEvents } from './premiumEvents.mockFile'

@Component({
  selector: 'app-premium-event',
  templateUrl: './premium-event.component.html',
  styleUrls: ['./premium-event.component.css']
})
export class PremiumEventComponent implements OnInit {
  premiumEvents= premiumEvents;


  constructor() { }

  ngOnInit(): void {
  }

}
