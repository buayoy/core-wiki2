import { Component } from '@angular/core';
import { Wiki } from '../../model/wiki';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import axios from 'axios'
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  wiki:Wiki = {name:'',description:'',test:'',email:'',pass:''}
  id;
  user:any ={
    fullname: '',
    codeid: '',
    faculty:'',
    position:'',
    phone:'',
    email:'',
    password: '',
    dob: '',
    
  }

  constructor(private db:AngularFireDatabase ,private authen:AngularFireAuth,private router:Router) { }


 async submitUser(user){
    this.authen.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
      axios({
        method: 'post',
        url: 'http://cherryproject.store/cherry_api/public/api/user/post',
        params: {
          
         
        }
      })
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
