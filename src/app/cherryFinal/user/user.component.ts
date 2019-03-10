import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Wiki } from '../../model/wiki';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import axios from 'axios'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  wiki:Wiki = {name:'',description:'',test:'',email:'',pass:''}
  DataBus = [];

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
  faculty =[
    {value:'คณะเทคโนโลยีสารนเทศ'},
    {value:'คณะบริหารธุรกิจ'},
    {value:'คณะศึกษาศาสตร์'},
    {value:'คณะศิลปศาสตร์'},
    {value:'คณะนิเทศศาสตร์'},
    {value:'คณะรัฐศาสตร์'},
    {value:'อื่นๆ'},
  ]
  position =[
    {value:'อาจารย์'},
    {value:'นักศึกษา'},
    {value:'บุคลากร'},
    {value:'ธุรการ'},
    {value:'ผู้อำนวยการสำนักบริหาร'},
  ]
  
  constructor(
    private http:HttpClient, 
    private router:Router,
    private db:AngularFireDatabase ,private authen:AngularFireAuth
  ) 
   { 
    this.feedNormal2()
   }

  feedNormal2(){
    this.http.get<any>('http://cherryproject.store/cherry_api/public/api/user/all').subscribe(result => {
      this.DataBus = result.data
      // alert(JSON.stringify(this.DataBus));
      // console.log(JSON.stringify(this.DataBus));
    });
  }

  ngOnInit() {
  }
  edituser(data){
    this.router.navigate([`user/edit/${data.id}`]);
  }
  async submitUser(user){
    if(user.fullname != '' && user.codeid != '' && user.faculty != '' && user.email != '' && user.password != ''){
      this.authen.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
        axios({
          method: 'post',
          url: 'http://cherryproject.store/cherry_api/public/api/user/post',
          params: {
        fullname: user.fullname,
        codeid: user.codeid,
        faculty:user.faculty,
        position:user.position,
        phone:user.phone,
        email: user.email,
        password: user.password,
        dob: user.dob,
        status: user.position == 'ธุรการ' ? 1 : user.position == 'ผู้อำนวยการสำนักบริหาร' ? 2 : 0 
           
          }
        })
        // console.log(res);
        this.router.navigate(['userbus'])
        
      }
        
      ).catch(res=>{
        window.alert(res)
      })
    }else{
      window.alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    }
    
  }
 
}
