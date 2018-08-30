import { Component } from '@angular/core';
import { Wiki } from '../../model/wiki';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  wiki:Wiki = {name:'',description:'',test:'',email:'',pass:''}
  id;


  constructor(private db:AngularFireDatabase ,private authen:AngularFireAuth,private router:Router) { }


  submitUser(wiki){
    this.authen.auth.createUserWithEmailAndPassword(wiki.email,wiki.pass).then(res=>{
      this.db.list('test').push(wiki)
      console.log(res);
      
    }
      
    ).catch(res=>{
      window.alert(res)
    })
  }
  GotoLogin(){
    this.router.navigate(['login'])
  }
}
