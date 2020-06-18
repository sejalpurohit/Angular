import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car=[
    {
      name:'Duster',
      specification:[{
        model:'New',
        fuelType:'petrol',
        seatingCapacity:5,
        fuelTankCapacity:37,
        mileage:321
      }]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
