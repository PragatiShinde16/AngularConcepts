import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1outputdecorator',
  templateUrl: './parent1outputdecorator.component.html',
  styleUrls: ['./parent1outputdecorator.component.css']
})
export class Parent1outputdecoratorComponent {

  childStrDataReceived:string='';
  childJsonObjReceived:any={};
  childArrObjReceived:any[] = [];
}
