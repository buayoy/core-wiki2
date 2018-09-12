import { Injectable } from '@angular/core';
import {  AngularFireDatabase } from 'angularfire2/database';

import { Profile } from '../model/profile';
import { Pool } from '../model/pool';

@Injectable({
  providedIn: 'root'
})
export class DataProfileService {

  constructor(private database:AngularFireDatabase) { }

  save(profile:Profile){
    
    return this.database.list('/profile').push(profile);
  }

  saveaddress(pool:Pool){
    return this.database.list('/pool').push(pool);
  }

  

}