import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Wiki } from '../../model/wiki';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { CanActivateViaAuthGuard } from '../../can-activate-via-auth.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  wikiList: AngularFireList<any>;
  wiki:Wiki = {name:'',description:'',test:'',email:'',pass:''}
  constructor(private db:AngularFireDatabase,
              private auth:AngularFireAuth,
              private router:Router,
              private activate:CanActivateViaAuthGuard){
   
  }

  login(wiki){
    this.auth.auth.signInWithEmailAndPassword(wiki.email,wiki.pass).then(res=>{
      this.router.navigate(['dashboard'])

      
    }).catch(err=>{
      return window.alert(err)
    })
    this.router.navigate([''])
  }
  resetPassword(){
    this.router.navigate(['resetpassword'])
  }
  GotoRegister(){
    this.router.navigate(['register'])
  }
 }
