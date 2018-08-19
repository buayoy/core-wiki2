import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  mProduct:Product = new Product();
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isUploaded:boolean = false;

  task: AngularFireUploadTask;

  constructor(private location:Location,
              private db: AngularFireDatabase, 
              private storage: AngularFireStorage,
            private router:Router) { }

  ngOnInit() {
  }

  onClickSubmit(data: NgForm){
    this.db.list("/test").push(data.value)
  }

  onClickCancel(){
    this.location.back();
  }

  uploadFile(event) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `stock/upload/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'CodeMobiles.com' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })
    

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        console.log(snap)
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          // this.db.collection('photos').add( { path, size: snap.totalBytes })
          this.downloadURL.subscribe((url)=>{
            this.mProduct.imageUrl = url.toString();
            this.mProduct.imageName = path;
            this.isUploaded = true;
            console.log(`"imageUrl" : ${this.mProduct.imageUrl}`)
          })
        }
      })
    )


    // The file's download URL
    this.downloadURL = this.task.downloadURL();
  }

}

