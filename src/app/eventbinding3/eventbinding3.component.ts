import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component {
  isSuggestion:String = "";
  onChange(input1:string){
    
    if(input1.length > 6){
      // alert("Character limit exceeded.....")
      this.isSuggestion = "Character limit exceeded.....";
    }else{
      console.log("onChange event occur........");
    }
  }
}
