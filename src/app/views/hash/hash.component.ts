import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Pool } from '../../model/pool';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataProfileService } from '../../service/data-profile.service';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.scss']
})
export class HashComponent implements OnInit {

  minerstatus:Observable<any[]>;
  api = '';
  history:Pool[]=[] ;
  walkername='';
  address='';
  root='https://api-zcash.flypool.org/miner/';
  pools:Pool[] = [
    { 
      poolname:'flypool',
      urlmining: 'eu1-zcash.flypool.org',
      port:'3333',
      address: '',
      walkername: '',
      walkerpass: 'x',
    },
    { 
      poolname:'nanopool',
      urlmining: 'zec-eu1.nanopool.org',
      port:'6666',
      address: '',
      walkername: '',
      walkerpass: 'x',
    },
    { 
      poolname:'dwarfpool',
      urlmining: ' zec-eu1.dwarfpool.com ',
      port: '3333',
      address: '',
      walkername: '',
      walkerpass: 'x',
    }
  ] ;
  constructor(
              private http:HttpClient,
              private router: Router,
              private angularFireAuth:AngularFireAuth,
              private database:AngularFireDatabase,
              private service:DataProfileService,

  ) {}

  
  ngOnInit() {
    
  }

  mining(pool:Pool){
    
    let addresss='miner --server ' + pool.urlmining + ' --port ' + pool.port +' --user ' + this.address+'.'+this.walkername + ' --pass ' + pool.walkerpass
  console.log(addresss);

  this.api=addresss
  let historyPool =  { 
    poolname:pool.poolname,
    urlmining:pool.urlmining,
    port:pool.port,
    address: this.address,
    walkername: this.walkername,
    walkerpass: pool.walkerpass,

    
  }
  this.service.saveaddress(historyPool)
  
}





Logout(){
  this.angularFireAuth.auth.signOut();
  this.router.navigate(['/'])
}
}