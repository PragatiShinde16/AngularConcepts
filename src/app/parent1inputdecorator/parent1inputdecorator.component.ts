import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1inputdecorator',
  templateUrl: './parent1inputdecorator.component.html',
  styleUrls: ['./parent1inputdecorator.component.css']
})
export class Parent1inputdecoratorComponent {

  msg:string="Welcome to angular........";
  
  jsonObj={
    id : 1,
    fname : "Pragati",
    lname : "Shinde"
  }

  arrObj:any[]=[
    {
      name:"Apple",
      price:120,
      qty:3
    },
    {
      name:"Grapes",
      price:100,
      qty:2
    },
    {
      name:"Anjir",
      price:150,
      qty:6
    },
    {
      name:"Mango",
      price:180,
      qty:4
    }
  ]
}
