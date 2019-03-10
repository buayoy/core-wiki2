import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.scss']
})
export class EditDriverComponent implements OnInit {
  id;
  modalRef: BsModalRef;
  user:any ={
    drivername: '',
    responsible: '',
    position:'',
    phonenumber:''
  }


  constructor(private route: ActivatedRoute,private router:Router,private modalService: BsModalService) { 
    this.id = this.route.snapshot.paramMap.get("id");
    this.driverDetail();
  }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

 async driverDetail(){
    axios({
      method:'get',
      url:'http://cherryproject.store/cherry_api/public/api/driver/detail/'+this.id
    }).then(res=>{
      console.log(res.data.data);
      
      this.user.drivername = res.data.drivername
      this.user.responsible = res.data.responsible
      this.user.position = res.data.position
      this.user.phonenumber = res.data.phonenumber
    })
  }

  submit(user){
    axios({
      method:'post',
      url:'http://cherryproject.store/cherry_api/public/api/driver/edit',
      params:{
        id:this.id,
        drivername:user.drivername,
        responsible:user.responsible,
        position:user.position,
        phonenumber:user.phonenumber,
      }
    }).then(res=>{
      if(res.data == 'OK'){
        this.router.navigateByUrl('driver');
        // this.router.navigate(['driver'])
      }
    })
  }

  deleteDriver(){
    axios({
      method:'post',
      url:'http://cherryproject.store/cherry_api/public/api/driver/delete',
      params:{
        id:this.id
      }
    }).then(res=>{
      if(res.data =="OK"){
        this.modalRef.hide()
        this.router.navigate(['driver'])
      }
    })
    
  }

}
