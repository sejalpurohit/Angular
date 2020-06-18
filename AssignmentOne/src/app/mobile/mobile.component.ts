import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  template: `<div>
  <h2 class="text-success">Mobile</h2>
  <div *ngFor="let each of mobile">
  <p style="color:red;">Model Name : {{each.modelName}}</p>
      <ul>
   <h4 class="text-info">Specification:-</h4>
      <div style="color:blue;" *ngFor="let specification of each.specification">      
          <li>Model - {{specification.company}}</li>
          <li>FuelType - {{specification.battery}}</li>
          <li>Seating Type - {{specification.RAM}}</li>
          <li>Fuel Tank Capacity -{{specification.camera}}</li>
          <li>Mileage - {{specification.operatingSystem}}</li>
      </div>
      </ul>
  </div>
</div>`
  
})
export class MobileComponent implements OnInit {
  mobile=[
    {
      modelName:'Note 8',
      specification:[{
        company:'Xiome',
        battery:'50000mah',
        RAM:'5GB',
        camera:'48MP',
        operatingSystem:'Android Q'
      }]
    }
  ];



  ngOnInit(): void {
  }

}
