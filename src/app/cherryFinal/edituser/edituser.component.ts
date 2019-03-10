import { Component, OnInit, TemplateRef } from '@angular/core';
import axios from 'axios'
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  id;
  modalRef: BsModalRef;
  passwordtype : any = 'password';
  user:any ={
    fullname: '',
    codeid: '',
    faculty:'',
    position:'',
    phone:'',
    email:'',
    password: '',
    dob: '',
    oldpassword:'',
    newpassword:'',
    status:0
  };
  faculty =[
    {value:'คณะเทคโนโลยีสารนเทศ'},
    {value:'คณะบริหารธุรกิจ'},
    {value:'คณะศึกษาศาสตร์'},
    {value:'คณะศิลปศาสตร์'},
    {value:'คณะนิเทศศาสตร์'},
    {value:'คณะรัฐศาสตร์'},
    {value:'อื่นๆ'},
  ];
  position =[
    {value:'อาจารย์'},
    {value:'นักศึกษา'},
    {value:'บุคลากร'},
    
  ];
  Detailuser:any = [];
  wongpassword:boolean = false
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private auth: AngularFireAuth,
    
  ) { 
    this.id = this.route.snapshot.paramMap.get("id");
    this.userDetail()
  }
  
  ngOnInit() {
  }
async submit(user){
  this.id = this.route.snapshot.paramMap.get("id");
  if(  user.newpassword != '' && user.oldpassword == this.Detailuser.password){
    await axios({
      method: 'post',
      url: 'http://cherryproject.store/cherry_api/public/api/user/edit/'+this.id,
      params: {
    fullname: user.fullname,
    codeid: user.codeid,
    faculty:user.faculty,
    position:user.position,
    phone:user.phone,
    email: user.email,
    password: user.newpassword,
    dob: user.dob,
    status: user.position == 'ธุรการ' ? 1 : user.position == 'ผู้อำนวยการสำนักบริหาร' ? 2 : 0 
       
      }
    });
    this.router.navigate(['userbus'])
  }else if (user.newpassword != '' && user.oldpassword != this.Detailuser.password){
    this.wongpassword = true
  }else if(user.newpassword ==''){
    await axios({
      method: 'post',
      url: 'http://cherryproject.store/cherry_api/public/api/user/edit/'+this.id,
      params: {
    fullname: user.fullname,
    codeid: user.codeid,
    faculty:user.faculty,
    position:user.position,
    phone:user.phone,
    email: user.email,
    password: this.Detailuser.password,
    dob: user.dob,
    status: user.position == 'ธุรการ' ? 1 : user.position == 'ผู้อำนวยการสำนักบริหาร' ? 2 : 0 
       
      }
    });
    this.router.navigate(['userbus'])
  }

}

 async userDetail(){
  this.id = this.route.snapshot.paramMap.get("id");
  const response = await axios({
    method: 'get',
    url: 'http://cherryproject.store/cherry_api/public/api/user/detail/' + this.id,

  });
  console.log(response.data)

  this.Detailuser = response.data
  this.user.fullname = response.data.fullname
  this.user.codeid = response.data.codeid
  this.user.faculty = response.data.faculty
  this.user.position = response.data.position
  this.user.phone = response.data.phone
  this.user.password = response.data.password
  this.user.email = response.data.email
  this.user.dob = response.data.dob
  this.user.status = response.data.status
  
  }

  deleteUser(){
    axios({
      method:'post',
      url:'http://cherryproject.store/cherry_api/public/api/user/delete',
      params:{
        id:this.id
      }
    }).then(res=>{
      if(res.data =="OK"){
        this.modalRef.hide()
        this.router.navigate(['userbus'])
      }
    })
   
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
}
