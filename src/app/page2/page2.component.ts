import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

export class Page2Component implements OnInit{

  // If we want to do parsing of url means we want to take a parameter from url. then do following steps :-
  // 1. create a constructor level dependency injection

  // ActivatedRoute :- This service responsible for get a data from url.
  constructor(private route:ActivatedRoute){}

  // 2. then use or implement angular life cycle hook i.e OnInit
  ngOnInit(): void {
    // 3. here we only call the method because in this method we do not write the logic(as per industry criteria)
    this.getDataFromURL();
  }

  // 3. then create method for writing the logic
  getDataFromURL(){
    this.route.paramMap.subscribe((param) =>{
      console.log(param.get("id"));
    })
  }
}
