import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-httpmethod',
  templateUrl: './httpmethod.component.html',
  styleUrls: ['./httpmethod.component.css']
})

// Apply angular life cycle hook/ angular component hook 
// i.e OnInit hook : It is predefined interface.
export class HttpmethodComponent implements OnInit{

  // create array for storing response and displey on browser by using table(html file)
  posts:any[] = [];

  // Create dependency injection i.e constructor level dependency injection
  constructor(private service:HttpService){}

  // By default method of OnInit interface
  ngOnInit(): void {
    this.getDataFromBackend();
  }

  // Create method for fetch the data
  getDataFromBackend(){
    this.service.getData().subscribe((response:any)=>{
      // console.log(response);
      this.posts = response;
    })
  }

  // Create method for fetch the data. Here we use event binding. In html file first we created this method and then use here.
  onSend(myTitle:any, myBody:any){

    let jsonObj = {
      title:myTitle,
      body:myBody
    }

    this.service.postData(jsonObj).subscribe((response)=>{
      console.log(response);
    })
  }

  // Create method for update the data. Here we use event binding. In html file first we created this method and then use here.
  onEdit(item:any){
    console.log(item);
  }
}
