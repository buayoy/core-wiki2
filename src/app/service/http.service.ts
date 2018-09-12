import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 let root = "https://jsonplaceholder.typicode.com/todos"
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {

   }

   gethttp(){
     this.http.get("https://jsonplaceholder.typicode.com/todos")
   }
}
