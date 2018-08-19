import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Wiki } from '../model/wiki';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  wiki:Wiki = {name:'',description:'',test:'',email:'',pass:''}

  wikiList: AngularFireList<any>;
  constructor(private db:AngularFireDatabase,
  private router:Router) { 
    this.wikiList=db.list('test');
  }
  getWikiList():Observable<any[]>{
    return this.wikiList.snapshotChanges().map(action=>{
      return action.map(action=>({key:action.key,value:action.payload.val}))
    })
  };
  getWiki(id): Observable<any> {
    return this.db.object('test/' + id).snapshotChanges().map(res => {
    return res.payload.val();
    });
    }
  removeWiki(id):void{
    this.wikiList.remove(id);
  }
 
    
    editWiki(id, wiki) {
    return this.wikiList.update(id, wiki); 
    }
   
    wikiHome(){
      this.router.navigate(['/test/wiki-home'])
    }
  }