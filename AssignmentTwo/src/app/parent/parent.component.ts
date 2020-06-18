import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  studentDetails = [
    {
      name: "Jhon",
      age: 24,
      gender: "Male",
      dob: "12/12/2020 2000",
      location: [{
        address: "Royal Apartment",
        city: "jaipur",
        state: "Rajasthan",
        pin: 332001,
        country: "India"
      }]
    }];


  constructor() { }

  ngOnInit(): void {
  }

}
