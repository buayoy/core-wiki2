import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Wiki } from './model/wiki';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private router: Router,private auth:AngularFireAuth) {
    this.auth.authState.subscribe(user=>{
      if(user !=null){
        this.router.navigate([''])
      }else{
        this.router.navigate([''])
      }
    })
    
    
   }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  
}
