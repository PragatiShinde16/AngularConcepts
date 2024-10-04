import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    // Empty path used for render the default page
    path:"", component:HomeComponent
  },
  {
    path:"Page1", component:Page1Component
  },
  {
    // Send parameter : - If we want to send the parameter to any component the we use send parameter concept.
    //                  - Syntax :-
    //                            ComponentName/:ParameterName
    //                  - Ex :-
    //                            Page2/:id
    // then go to that file from where we select in this file we send parameter. i.e home file(home.ts)
    path:"Page2/:id", component:Page2Component
  },
  {
    path:"Follower", component:FollowerComponent
  },
  {
    path:"Myfollower", component:MyfollowerComponent
  },
  {
    // ** : - It is wild cart operator. 
    //      - If not found valid path in the url (or we mentioning the wrong url) then by default it will rendering the not found component. for that we use wild cart operator.
    //      - wild cart operator is present at the end of the array of the object.
    path:"**", component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
