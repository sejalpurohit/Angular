import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  count = 0;
  counter = 0;
  interval;


    stop() {
        clearInterval(this.interval);
        this.counter = this.count;
        this.count = 0;
    }

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
       this.count++;
  }, 1000);

  }

}
