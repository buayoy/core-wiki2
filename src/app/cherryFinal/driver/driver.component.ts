import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  DriverAll = [];
  user:any ={
    drivername: '',
    responsible: '',
    position:'',
    phonenumber:''
  }
  constructor(private router : Router) { 
    this.getDriver();
    
  }

  ngOnInit() {
  }

 async getDriver(){
    const response = await axios({
      method: 'get',
      url: 'http://cherryproject.store/cherry_api/public/api/driver/all',
  
    });
    this.DriverAll = response.data.data
  }

  adddriver(user){
    // this.router.navigate(['driver'])
    axios({
      method:'post',
      url:'http://cherryproject.store/cherry_api/public/api/driver/post',
      params:{
        drivername:user.drivername,
        responsible:user.responsible,
        position:user.position,
        phonenumber:user.phonenumber
      }
    }).then(res =>{
      // window.alert(JSON.stringify(res.data.data));
      if(res.data.data == 'ok'){
        window.location.reload();
        // this.router.navigateByUrl('driver');
      }
      
    })
    
  }
  editdriver(data){
    this.router.navigate([`driver/edit/${data.id}`]);
  }

}
