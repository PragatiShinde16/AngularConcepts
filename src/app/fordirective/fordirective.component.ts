import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {

  // Array :-
  //       - Dynamically growable/shrinkable means not fixed.
  //       - Synatax :-
  //                  array_name:datatype[] = [data];

  // Define array
  course:string[] = ["Core Java", "Advance Java", "HTML", "CSS", "JS", "SpringBoot"]
}
