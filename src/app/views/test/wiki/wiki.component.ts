import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseService } from '../../../service/firebase.service';
import { Wiki } from '../../../model/wiki';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  // Angular 2 Input Mask

  public dateModel = '';
  public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  public phoneModel = '';
  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public taxModel = '';
  public taxMask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  public ssnModel = '';
  public ssnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public eyeScriptModel = '';
  public eyeScriptMask = ['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/];

  public ccnModel = '';
  public ccnMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
 wiki:Wiki = {name:'',description:'',test:'',email:'',pass:''}
 title: string = "เพิ่ม Wiki";
 id;

 constructor(
  private firebaseService: FirebaseService, private route: ActivatedRoute, private router: Router , private db:AngularFireDatabase) {

 }

 ngOnInit() {
   this.id = this.route.snapshot.paramMap.get("id");
   if (this.id) {
     this.title = "แก้ไข wiki";
     this.getWikiByKey(this.id);
   }
 }
 addWiki(data: NgForm) {
   if (this.id) {
     this.firebaseService.editWiki(this.id, data.value).then(this.goToHome);
   } else {
     this.db.list("/wikis").push(data.value).then(this.goToHome);    }
 }

 goToHome = () => {
   this.router.navigate(['/test/wiki-home']);
 }

 getWikiByKey(id) {
  this.firebaseService.getWiki(id).subscribe(data => {
    this.wiki = data;
  })
}
 addWiki2(wiki){
   if(this.id){   
    this.firebaseService.editWiki(this.id,wiki).then(this.goToHome)
  }else{
    this.db.list("/benz").push(wiki).then(
      this.goToHome
    )
  }

 }
}
