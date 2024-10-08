import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // here create property for sending parameter.
  // then go to home.html file
  myid:number=8;

  // Routing using navigate method

  constructor(private router:Router){}

  onPage1(){
    this.router.navigate(['/Page1']);
  }

  onPage2(){
    this.myid = 9;
    this.router.navigate(['/Page2', this.myid]);
  }

  onFollower(){
    this.router.navigate(['/Follower']);
  }
}


