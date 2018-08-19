import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  wikiList: AngularFireList<any>;
  constructor(private db:AngularFireDatabase){
   
  }

  Login(){
  }
 }
