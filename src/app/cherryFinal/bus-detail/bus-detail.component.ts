import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['../../../../node_modules/spinkit/css/spinkit.css']
})

export class BusDetailComponent implements OnInit {
  id;
  cause = ''
  notshowbutton:any = false
  Detailbook: any = [];
  Detailuser: any = [];
  images: any = [];
  disabled: boolean = true;
  disabled2: boolean = true;
  loading: boolean = true
  textStatus: string = ''
  textButton: string = 'อนุมัติ'
  classHeader: string = 'badge badge-danger ml-2';
  classButton: string = 'btn btn-success';
  modalRef: BsModalRef;
  userstatus:any = ''
  Detailbiguser: any = [];
  headerStyles = {
    'background-color': '#FFFFFF',
    'color':'#FFFFFF'
    }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private auth: AngularFireAuth
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.auth.authState.subscribe(user => {
      // alert(user.email)
      this.getUser(user.email)
    })
  }
  
  async getUser(email) {
    const response = await axios({
      method: 'get',
      url: 'http://cherryproject.store/cherry_api/public/api/email/' + email,

    })
    this.userstatus = response.data.status
    this.Detailbiguser = response.data
    this.feedNormal2(response.data.status)
  }
  ngOnInit() { }
  openModal(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2);
  }
  async  feedNormal2(statususer) {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
    const response = await axios({
      method: 'get',
      url: 'http://cherryproject.store/cherry_api/public/api/book/detail/' + this.id,

    })
    this.Detailbook = response.data

    const response2 = await axios({
      method: 'get',
      url: 'http://cherryproject.store/cherry_api/public/api/user/detail/'+ response.data.create_by,

    })
    this.Detailuser = response2.data
    console.log(response2.data)
    const responseimage = await axios({
      method: 'get',
      url: 'http://cherryproject.store/cherry_api/public/api/book/detail/images/' + this.id,

    })
    console.log(responseimage.data)
    // const response = await axios.get('http://cherryproject.store/cherry_api/public/api/book/detail/'+this.id);
    this.images = responseimage.data
    console.log(this.Detailbook)
    if (statususer == 1) {
      if (response.data.status == 2) {
        this.disabled = false;
        this.disabled2 = false;
        this.textStatus = 'New Status';
        this.headerStyles = {
          'background-color': '#d9edf6',
          'color':'#00588a'
          }
      } else if (response.data.status == 3) {
        this.disabled = true;
        this.textStatus = 'Approved Status';
        this.headerStyles = {
          'background-color': '#418bca',
          'color':'#FFFFFF'
          }
      } else if (response.data.status == 1) {
        this.disabled = true;
        this.disabled2 = true;
        this.textStatus = 'Rejected Status';
        this.headerStyles = {
          'background-color': '#d9544f',
          'color':'#FFFFFF'
          }
      } else if (response.data.status == 0) {
        this.disabled = true;
        this.disabled2 = true;
        this.textStatus = 'Cancel Status';
        this.headerStyles = {
          'background-color': '#777777',
          'color':'#FFFFFF'
          }
      } else if (response.data.status == 4) {
        this.disabled = true;
        this.disabled2 = true;
        this.textStatus = 'Complated Status';
        this.headerStyles = {
          'background-color': '#71d398',
          'color':'#FFFFFF'
          }
      } else if (response.data.status == 5) {
        this.disabled = true;
        this.disabled2 = true;
        this.textStatus = 'Close Status';
        this.headerStyles = {
          'background-color': '#3cb371',
          'color':'#FFFFFF'
          }
      }

    } else if (statususer == 2) {
      if (response.data.status == 0) {
        this.disabled = true;
        this.disabled2 = true;        
        this.textStatus = 'Cancel Status';
        this.headerStyles = {
          'background-color': '#777777',
          'color':'#FFFFFF'
          }
      } else if (response.data.status == 1) {
        this.disabled = true;
        this.disabled2 = true;
        this.textStatus = 'Rejected Status';
        this.headerStyles = {
          'background-color': '#d9544f',
          'color':'#FFFFFF'
          }
      } else if (response.data.status == 2) {
        this.disabled = true;
        this.disabled2 = true;
        this.textStatus = 'New Status';
        this.headerStyles = {
          'background-color': '#d9edf6',
          'color':'#00588a'
          }
      } else if (response.data.status == 3) {
        this.disabled = false;
        this.disabled2 = false;
        this.textStatus = 'Approved Status';
        this.headerStyles = {
          'background-color': '#418bca',
          'color':'#FFFFFF'
          }
      } else if (response.data.status == 4) {
        this.disabled = true;
        this.disabled2 = true;
        this.textStatus = 'Complated Status';
        this.headerStyles = {
          'background-color': '#71d398',
          'color':'#FFFFFF'
          }
      } else if (response.data.status == 5) {
        this.disabled = true;
        this.disabled2 = true;
        this.textStatus = 'Close Status';
        this.headerStyles = {
          'background-color': '#3cb371',
          'color':'#FFFFFF'
          }
      }
    }




  }
 async reject(cause) {
    console.log(cause);
    
    if(cause != ''){
     await axios({
        method: 'post',
        url: 'http://cherryproject.store/cherry_api/public/api/book/updatestatus',
        params: {
          id: this.id,
          status: 1,
          cause:cause
        }
      }).then(res=>{
        console.log(res.data)
        if(res.data == 'OK'){
          this.modalRef.hide();
          this.router.navigate(['dashboard'])
        }
      })
    }
    
    // console.log(response.data)
    // this.router.navigate(['dashboard'])

  }
  

  async changeStatus(Detailbook) {
    
    if(this.userstatus == 1){
      await axios({
        method: 'post',
        url: 'http://cherryproject.store/cherry_api/public/api/book/updatestatus3',
        params: {
          id: this.id,
          status: 3,
          approve_by:this.Detailbiguser.fullname
        }
      })
      // console.log(response.data)
      this.router.navigate(['dashboard'])
    }else if(this.userstatus == 2){
      await axios({
        method: 'post',
        url: 'http://cherryproject.store/cherry_api/public/api/book/updatestatus4',
        params: {
          id: this.id,
          status: 4,
          complate_by:this.Detailbiguser.fullname
        }
      });
      // console.log(response.data)
      this.router.navigate(['dashboard'])
    }
    
  }
async Print(){
  window.print();
  
}


}
