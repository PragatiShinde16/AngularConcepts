import { Pipe, PipeTransform } from '@angular/core';

// Pipe is a class level decorator
@Pipe({
  name: 'summary'
})

// For create custom pipe we use PipeTransform interface and use their method i.e transform method.
export class SummaryPipe implements PipeTransform {

  // If you will not give the start and end value in html file the it will give default value. that here you can set as start and end value. it is called default parameter function.

  transform(value: any, start:number = 0, end:number = 40): any {

    // Type Assertion Function :- It is used for convert the data into another data type.
    let temp = (<string> value);
    // return (temp.substring(0, 15));
    return (temp.substring(start, end));
  }
}
