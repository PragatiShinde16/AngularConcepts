import { Component } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent {

  isChoice:string='';

  onSend(inputcolor:string){
    this.isChoice = inputcolor.toLowerCase().trim();
  }
}
