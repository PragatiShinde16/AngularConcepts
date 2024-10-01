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

  // For update data, store the data in property 
  myid:number = 0;
  mytitle:string = "";
  mybody!:string;

  // It is used for update
  ishidden:boolean=true;

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
    }, (myerror)=>{
      alert("Something went wrong.........");
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
      alert("Data is inserted........")
    }, (myerror)=>{
      alert("Something went wrong.........");
    })
  }

  // Create method for update the data. Here we use event binding. In html file first we created this method and then use here.
  onEdit(item:any){
    console.log(item);

    // store the data in property for update
    this.myid = item.id;
    this.mytitle = item.title;
    this.mybody = item.body;

    // here we set false because display the update UI after clicking edit button. if it is true then it will not display
    this.ishidden = false;
  }

  // For update the record
  onUpdate(){
    let jsonObj = {
      id:this.myid,
      title:this.mytitle,
      body:this.mybody
    }

    this.service.updateData(jsonObj).subscribe((response)=>{
      console.log(response);
      alert("Data is updated.......");
      this.ishidden = true;
    }, (myerror)=>{
      alert("Something went wrong.........");
    })
  }

  // For delete the record
  onDelete(id:any){
    this.service.deleteData(id).subscribe((response)=>{
      console.log(response);
      alert("Data is deleted........");
    }, (myerror)=>{
      alert("Something went wrong.........");
    })
  }
}
