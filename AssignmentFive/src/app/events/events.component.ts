import { Component, OnInit } from '@angular/core';
import {events} from './events.mockFile'


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit { 
  eventList=events;
 
 
  constructor() {     


  }

  ngOnInit(): void { 
  
  }

}
