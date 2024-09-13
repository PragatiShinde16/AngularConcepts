import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {
  mycolor : string = "pink";
  rating : number = 2;
  jsonObj={
    color : "yellow",
    fontFamily : "cursive",
    "font-size":"53px"
  }
}
