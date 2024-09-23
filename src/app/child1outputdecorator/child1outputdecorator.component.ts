import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1outputdecorator',
  templateUrl: './child1outputdecorator.component.html',
  styleUrls: ['./child1outputdecorator.component.css']
})
export class Child1outputdecoratorComponent {

  @Output() childStrEvent = new EventEmitter();
  @Output() childJsonObjEvent = new EventEmitter();
  @Output() childArrObjEvent = new EventEmitter();

  // For Sending String
  msg:string="Welcome to angular.........";

  // For sending json obj
  jsonObj={
    id:1,
    fname:"Pragati",
    lname:"Shinde"
  }

  // For sending array of obj
  arrObj:any[] = [
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

  onSend(){
    this.childStrEvent.emit(this.msg);
    this.childJsonObjEvent.emit(this.jsonObj);
    this.childArrObjEvent.emit(this.arrObj);
  }
}
