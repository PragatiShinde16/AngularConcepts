import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


// @Injectable Decorator :- 
                    // Advantage :-
                                // 1. No need to register the created service explicitly.
                                // 2. If we use the @Injectable decorator in the service then we use that service in throughout the application in any component and any pipe.
                                // 3. Also we can create dependency injection in the HttpService.
@Injectable({
  // @Injectable decorator also used for :- root define it is a main dependency injection
  providedIn: 'root'
})
export class HttpService {

  url:string = "https://jsonplaceholder.typicode.com/posts";
  // Create dependency injection i.e constructor level dependency injection
  // Syntax :- constructor(access specifier arg : type){ }
  constructor(private http:HttpClient) { }

  // for fetch the data
  getData(){
    return (this.http.get(this.url));
  }

  // for insert data
  postData(obj:any){
    return (this.http.post(this.url, obj));
  }
}
