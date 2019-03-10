import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Wiki } from '../../model/wiki';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { CanActivateViaAuthGuard } from '../../can-activate-via-auth.guard';
import axios from 'axios'
import { UserService } from '../../cherryFinal/service/user.service';
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
              private activate:CanActivateViaAuthGuard,
              private userservice:UserService ){
   
  }
async checkstatus(wiki){
  const response = await axios({
    method: 'get',
    url: 'http://cherryproject.store/cherry_api/public/api/email/'+wiki.email,
    
  })
  if(response.data.status == 1 || response.data.status == 2){
    this.router.navigate(['dashboard'])
  }else{
    window.alert('คุณไม่ใช่ผู้ดูแลระบบไม่มีสิทธิ์ใช้งานส่วนนี้ได้')
    this.auth.auth.signOut().then(res=>{
      this.router.navigate([''])
    });
  }
  
}
  login2(){
    this.userservice.login(this.wiki)
  }
  login(wiki){
    this.auth.auth.signInWithEmailAndPassword(wiki.email,wiki.pass).then(res=>{
      this.router.navigate(['dashboard'])
      this.checkstatus(wiki)
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
