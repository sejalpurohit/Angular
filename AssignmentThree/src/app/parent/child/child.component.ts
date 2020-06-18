import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 
  count:number=0;
  interval;
  @Output()
  counter:EventEmitter<number>= new EventEmitter<number>();



stop() {
    clearInterval(this.interval);
    this.counter.emit(this.count);
    this.count = 0;
}
  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.count++;
  }, 1000);
  }

}
