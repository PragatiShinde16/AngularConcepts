import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component {

  isResult:number = 0;
  isFind : String = "";

  onAdd(num1:any, num2:any){

    let n1=+num1;
    let n2=+num2;

    this.isResult = n1 + n2;
  }

  onFind(num:any){
    let n=+num;

    if(n%2 == 0){
      this.isFind = "Even Number";
    }else{
      this.isFind = "Odd Number";
    }
  }
}
