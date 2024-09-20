import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {

  // Array :-
  //       - Index start from 0
  //       - Dynamically growable/shrinkable means not fixed.
  //       - Synatax :-
  //                  array_name:datatype[] = [data];

  // Define array
  course:string[] = ["Core Java", "Advance Java", "HTML", "CSS", "JS", "SpringBoot"]


  // Array of object 
  arrProduct:any[] = [
    {
      name : "Realme",
      price : 20000,
      qty : 1
    },

    {
      name : "OnePlus",
      price : 45000,
      qty : 1
    },

    {
      name : "Samsung",
      price : 25000,
      qty : 1
    },

    {
      name : "RedMi",
      price : 18000,
      qty : 1
    },
  ]
}
