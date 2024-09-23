import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1inputdecorator',
  templateUrl: './child1inputdecorator.component.html',
  styleUrls: ['./child1inputdecorator.component.css']
})
export class Child1inputdecoratorComponent {

  // For sending string
  @Input() ParentStringMsg:string = "";

  // For sending json obj
  @Input() ParentJsonObj:any = {};

  // For sending array obj
  @Input() ParentArrObj:any[] = [];
}
