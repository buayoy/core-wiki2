import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  CarAll=[]
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
  
  constructor(private router:Router) {
    this.getCar();
   }

  ngOnInit() {
  }

  async getCar(){
    const response = await axios({
      method: 'get',
      url: 'http://cherryproject.store/cherry_api/public/api/car/all',
  
    });
    this.CarAll = response.data.data
  }
  addcar(car){
    // this.router.navigate(['driver'])
    axios({
      method:'post',
      url:'http://cherryproject.store/cherry_api/public/api/car/post',
      params:{
        type:car.type,
        brand:car.brand,
        carid:car.carid,
        gen:car.gen,
        distance:car.distance
      }
    }).then(res =>{
      // window.alert(JSON.stringify(res.data.data));
      if(res.data.data == 'ok'){
        window.location.reload();
        // this.router.navigateByUrl('driver');
      }
      
    })
    
  }
  editcar(data){
    this.router.navigate([`car/edit/${data.id}`]);
  }

}
