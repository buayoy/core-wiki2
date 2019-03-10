import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import axios from 'axios';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.scss']
})
export class EditCarComponent implements OnInit {
  id;
  modalRef: BsModalRef;
  car:any = {
    cardetail:'',
    type:'',
    brand:'',
    carid:'',
    gen:'',
    distance:''

  }
  cartype =[
    {value:'ไมโครบัส'},
    {value:'รถเก๋ง'},
    {value:'รถกระบะ'},
    {value:'รถตู้'},
  ]
  constructor(private route: ActivatedRoute,private router:Router,private modalService: BsModalService) { 
    this.id = this.route.snapshot.paramMap.get("id");
    this.carDetail();
  }

  ngOnInit() {
  }
  carDetail(){
    axios({
      method:'get',
      url:'http://cherryproject.store/cherry_api/public/api/car/detail/'+this.id
    }).then(res=>{
      console.log(res.data.data);
      
      this.car.type = res.data.type
      this.car.brand = res.data.brand
      this.car.position = res.data.position
      this.car.carid = res.data.carid
      this.car.distance = res.data.distance
    })
  }
  submit(car){
    axios({
      method:'post',
      url:'http://cherryproject.store/cherry_api/public/api/car/edit',
      
      params:{
      id:this.id,
      type : car.type,
      brand : car.brand,
      position : car.position,
      carid : car.carid,
      distance : car.distance,
      }
    }).then(res=>{
      if(res.data == 'OK'){
        this.router.navigateByUrl('car');
        // this.router.navigate(['driver'])
      }
    })

  }
  deleteCar(){
    axios({
      method:'post',
      url:'http://cherryproject.store/cherry_api/public/api/car/delete',
      params:{
        id:this.id
      }
    }).then(res=>{
      if(res.data =="OK"){
        this.modalRef.hide()
        this.router.navigate(['car'])
      }
    })
    
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

}
