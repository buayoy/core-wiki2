import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateViaAuthGuard implements CanActivate {
  constructor(
              private service:AuthService,
              private router:Router,
              private firebase:AngularFireAuth){
                

              }
  canActivate(){
    let l1 

    if( !l1 ){
      return true
    }else{
      return false
    }
    
  }
   
      
   
  
}
