import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentCounter=0;

  counter(event: number) {
    this.currentCounter = event;
}

  constructor() { }

  ngOnInit(): void {
  }

}
