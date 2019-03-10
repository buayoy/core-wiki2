import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class Home2Component implements OnInit {
  DataBus = [];
  id;
  textButton:string = 'อนุมัติ';
  classButton: string = 'badge badge-success';
  constructor(
    
    private router:Router,
    private http:HttpClient, 
  ) 
   { 
    this.feedNormal2()
   }

  feedNormal2(){
    this.http.get<any>('http://cherryproject.store/cherry_api/public/api/book/all').subscribe(result => {
      this.DataBus = result.data
      // alert(JSON.stringify(this.DataBus));
      // console.log(JSON.stringify(this.DataBus));
    });
  }
  ngOnInit() {
  }
  async changeStatus(data){
    //  this.id = this.route.snapshot.paramMap.get("id");
    //  alert(Detailbook)
      
      // console.log(this.id)
      // const response1 = await axios.get('http://cherryproject.store/cherry_api/public/api/book/detail/'+this.id);
      // const response = await axios.post('http://cherryproject.store/cherry_api/public/api/book/edit',{
      //   id:this.id,
      //   status:0
      // });
      
    //  const response = await axios.post('http://cherryproject.store/cherry_api/public/api/book/edit', {
    //     id: this.id,
    //     status: 2,
    //   })
    if(data.status == 2){
      await axios({
        method: 'post',
        url: 'http://cherryproject.store/cherry_api/public/api/book/edit',
        params: {
          id: data.id,
          status: 1
        }
      })
      // console.log(response.data)
      this.router.navigate(['databus'])
    }else if(data.status == 1){
      await axios({
        method: 'post',
        url: 'http://cherryproject.store/cherry_api/public/api/book/edit',
        params: {
          id: data.id,
          status: 2
        }
      })
      // console.log(response.data)
      this.router.navigate(['databus'])
    }
    
  }
     
  viewedit(data){
    this.router.navigate([`databus/detail/${data.id}`]);
  }

}
