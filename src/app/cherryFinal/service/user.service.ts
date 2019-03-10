import { Injectable } from '@angular/core';
import { Wiki } from '../../model/wiki';
import { AngularFireAuth } from 'angularfire2/auth';
import axios from 'axios'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  wiki:Wiki = {name:'',description:'',test:'',email:'',pass:''}
  private email:string = 'email';
  constructor(private auth:AngularFireAuth,private router:Router) { }

  getDummy():string{
    return this.email;
  }

  setDummy(value){
    this.email = value;
  }
 async checkAdmin(email){
    const response = await axios({
      method: 'get',
      url: 'http://cherryproject.store/cherry_api/public/api/email/'+email,
      
    })
    if(response.data.status == 1){
      this.router.navigate(['dashboard'])
    }
  }
  
  login(wiki){
    this.auth.auth.signInWithEmailAndPassword(wiki.email,wiki.pass).then(res=>{
      this.checkAdmin(wiki.email)
      this.setDummy(wiki.email);
    }).catch(err=>{
      return window.alert(err)
    })
    this.router.navigate([''])
  }
}
