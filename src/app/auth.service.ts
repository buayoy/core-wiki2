import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn():boolean{
    let currentState = localStorage.getItem("isRouteActivate");
    if(currentState == "true"){
      return true;
    }else{
      return false
    }

  }
}
