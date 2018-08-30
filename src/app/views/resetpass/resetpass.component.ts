import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Wiki } from '../../model/wiki';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.scss']
})
export class ResetpassComponent implements OnInit {
  wiki:Wiki = {name:'',description:'',test:'',email:'',pass:''}

  constructor(private router:Router,
              private auth:AngularFireAuth) { }

  ngOnInit() {
  }
  resetPassword(wiki){
    this.auth.auth.sendPasswordResetEmail(wiki.email).then(res=>{
      this.router.navigate([''])
    });
    
  }
}
