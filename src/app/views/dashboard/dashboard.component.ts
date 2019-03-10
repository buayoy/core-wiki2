import { Component, OnInit, TemplateRef } from '@angular/core';

import { getStyle, hexToRgba } from '@coreui/coreui-pro/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from '../../cherryFinal/service/user.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A'
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // social box charts

  public brandBoxChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public brandBoxChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(65);
    }
  }
  
  DataBus = [];
  email =''
  new:any = ''
  reject:any = ''
  complate:any = ''
  close:any = ''
  approve:any = ''
  cancel:any = ''
  id;
  getResult:any = 'all'
  textButton:string = 'อนุมัติ';
  classButton: string = 'badge badge-success';
  modalRef: BsModalRef;
  Detailbook:any=[];
  textStatus:string = 'ยังไม่ได้ตรวจสอบยืนยัน'
  classHeader: string = 'badge badge-danger ml-2';
  name = {}
  images:any=[];
  constructor(
    private modalService: BsModalService,
    private router:Router,
    private route: ActivatedRoute,
    private http:HttpClient, 
    private userservice :UserService,
    private auth:AngularFireAuth
    ) 
    {
      this.feedNormal4()
      this.auth.authState.subscribe(user=>{
        // alert(user.email)
        this.getUser(user.email)
           })
    // this.feedNormal2()
   
   }
   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 async getUser(email){
  const response = await axios({
    method: 'get',
    url: 'http://cherryproject.store/cherry_api/public/api/email/'+email,
    
  })
  if(response.data.status == 1){
    this.http.get<any>('http://cherryproject.store/cherry_api/public/api/book/all').subscribe(result => {
      this.DataBus = result.data
      // alert(JSON.stringify(this.DataBus));
      // console.log(JSON.stringify(this.DataBus));
    });
  }else if(response.data.status == 2){
    this.http.get<any>('http://cherryproject.store/cherry_api/public/api/book/all/status3').subscribe(result => {
      this.DataBus = result.data
      // alert(JSON.stringify(this.DataBus));
      // console.log(JSON.stringify(this.DataBus));
    });
  }
 
  this.name = response.data.fullname;
  
  }
  feedNormal2(getResult){
    // alert(result)
    
    if(getResult == 'all'){
      this.http.get<any>('http://cherryproject.store/cherry_api/public/api/book/all').subscribe(result => {
      this.DataBus = result.data
      // alert(JSON.stringify(this.DataBus));
      // console.log(JSON.stringify(this.DataBus));
    });
    }else{
      this.http.get<any>('http://cherryproject.store/cherry_api/public/api/book/'+getResult).subscribe(result => {
      this.DataBus = result.data
      // alert(JSON.stringify(this.DataBus));
      // console.log(JSON.stringify(this.DataBus));
    });
    }
    
  }
  
  feedNormal4(){
    // alert(result)
    
      axios({
        method:'get',
        url:'http://cherryproject.store/cherry_api/public/api/book/0'
      }).then(result=>{
        this.cancel = result.data.total
      })
      axios({
        method:'get',
        url:'http://cherryproject.store/cherry_api/public/api/book/1'
      }).then(result=>{
        this.reject = result.data.total
      })
      axios({
        method:'get',
        url:'http://cherryproject.store/cherry_api/public/api/book/2'
      }).then(result=>{
        this.new = result.data.total
      })
      axios({
        method:'get',
        url:'http://cherryproject.store/cherry_api/public/api/book/3'
      }).then(result=>{
        this.approve = result.data.total
      })
      axios({
        method:'get',
        url:'http://cherryproject.store/cherry_api/public/api/book/4'
      }).then(result=>{
        this.complate = result.data.total
      })
      axios({
        method:'get',
        url:'http://cherryproject.store/cherry_api/public/api/book/5'
      }).then(result=>{
        this.close = result.data.total
      })
    
    
    
  }

  async  feedNormal3(){
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
   const response = await axios({
      method: 'get',
      url: 'http://cherryproject.store/cherry_api/public/api/book/detail/'+this.id,
      
    })
    this.Detailbook = response.data
    console.log(response.data)
    const responseimage = await axios({
      method: 'get',
      url: 'http://cherryproject.store/cherry_api/public/api/book/detail/images/'+this.id,
      
    })
    console.log(responseimage.data)
    // const response = await axios.get('http://cherryproject.store/cherry_api/public/api/book/detail/'+this.id);
    this.images = responseimage.data
    console.log(this.Detailbook)
    if(response.data.status == 2){
      this.classHeader = 'badge badge-success ml-2'
      this.textStatus = 'ตรวจสอบยืนยันแล้ว'
      this.textButton = 'ยกเลิกการอนุมัติ'
      this.classButton = 'btn btn-danger'
    }

    
   
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

  
  radioModel: string = 'Month';
}
