import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demotdf',
  templateUrl: './demotdf.component.html',
  styleUrls: ['./demotdf.component.css']
})
export class DemotdfComponent {

  // for ngSubmit directive
  onSubmit(f:NgForm){
    console.log("===> "+ f.value.myUsername);
    console.log("===> "+ f.value.mycomment);
  }
}
