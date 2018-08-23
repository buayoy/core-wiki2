import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { Wiki } from '../../../model/wiki';

@Component({
  selector: 'app-wiki-home',
  templateUrl: './wiki-home.component.html',
  styleUrls: ['./wiki-home.component.scss']
})
export class WikiHomeComponent implements OnInit {
  wikiList: AngularFireList<any>;
  wiki:Wiki = {name:'',description:'',test:'',email:'',pass:''}
  test: any[];
  constructor(db: AngularFireDatabase,private router:Router,private storage:AngularFireStorage) { 
    this.wikiList = db.list('benz');
  }

  ngOnInit() {
    this.wikiList.snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
    this.test = items;
    });

    
  }
  delWiki(data){
    this.wikiList.remove(data.key)
    console.log(data);
    
    
    
  }
  editWiki(data){
    this.router.navigate([`/editWiki/${data.key}`]);
  }

}