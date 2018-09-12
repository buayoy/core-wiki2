import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { ScalarQuery, FirebaseListFactoryOpts } from 'angularfire2/database-deprecated/interfaces';
import { Personal } from '../model/personal';


@Injectable()
export class PersonalService {

  
  opts: FirebaseListFactoryOpts;
  persoanal = this.Database.object('/personal');
  constructor(
    public http: HttpClient,
    private Database:AngularFireDatabase
  ) {
    console.log('Hello PersonalServiceProvider Provider');
    
  }

  

  
 
  addPersonal(key:string,persoanal:Personal){
    return this.Database.object('personal/'+key).set(persoanal);
  }

  getPersonal(key:string):FirebaseObjectObservable<Personal>{      
      return this.Database.object('personal/'+key);
  }

  updatePersonal(key:string,personal:Personal){
    return this.Database.object('personal/'+key).update(personal);
  }
}
