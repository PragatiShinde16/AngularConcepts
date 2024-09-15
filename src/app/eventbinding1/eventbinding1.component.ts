import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {

  isClick:boolean = true;

  onClick(){
    if(this.isClick == true){
      console.log("Click event occur........");
      this.isClick = false;
    }
  }

  onImage(){
    console.log("on Image click............");
  }

  onSend(myInput:any){
    console.log(myInput);
    console.log("Data is: "+myInput.value);

    myInput.style.background='green';
    myInput.style.color='white';
  }

  onSend1(myInput1:string){
    console.log("Data is: "+myInput1);
  }
}
