import { Component, OnInit } from '@angular/core';
import { Bigdata } from '../../cherry';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-swe442',
  templateUrl: './swe442.component.html',
  styleUrls: ['./swe442.component.scss']
})
export class Swe442Component implements OnInit {
  bigdataList: AngularFireList<any>;
  List: any[];
  result:any[];


  bigdata:Bigdata={age:0,sex:0,chestpaintype:0,restingbloodpressure:0,serumcholestoralinmgdl:0,oldpeakST:0}
  constructor(private db:AngularFireDatabase) {
    this.bigdataList = db.list('swe442');
   }

  ngOnInit() {
    this.bigdataList.snapshotChanges().map(actions=>{
      return actions.map(action => ({ key: action.key, value: action.payload.val() }))
    }).subscribe(items=>{
      this.List = items
    })
  }
  submitMining(bigdata){
    let yes='yes'
    let no='no'
    if(bigdata.chestpaintype<=3 && bigdata.sex<=0) {
      window.alert('คุณไม่มีความเสี่ยงเป็นโรคหัวใจ: '+no)
    } if(bigdata.chestpaintype<=3 && bigdata.sex>0 && bigdata.age<=55) {
      window.alert('คุณไม่มีความเสี่ยงเป็นโรคหัวใจ: '+no)
    }if(bigdata.chestpaintype<=3 && bigdata.sex>0 && bigdata.age>55 && bigdata.serumcholestoralinmgdl<=245 && bigdata.oldpeakST<=2.4) {
      window.alert('คุณไม่มีความเสี่ยงเป็นโรคหัวใจ: '+no)
    }if(bigdata.chestpaintype<=3 && bigdata.sex>0 && bigdata.age>55 && bigdata.serumcholestoralinmgdl<=245 && bigdata.oldpeakST>2.4) {
      window.alert('คุณมีความเสี่ยงเป็นโรคหัวใจ: '+yes)
    }if(bigdata.chestpaintype<=3 && bigdata.sex>0 && bigdata.age>55 && bigdata.serumcholestoralinmgdl>245) {
      window.alert('คุณมีความเสี่ยงเป็นโรคหัวใจ: '+yes)
    }if(bigdata.chestpaintype>3 && bigdata.oldpeakST<=0.7 && bigdata.sex<=0 && bigdata.age<=58) {
      window.alert('คุณไม่มีความเสี่ยงเป็นโรคหัวใจ: '+no)
    }if(bigdata.chestpaintype>3 && bigdata.oldpeakST<=0.7 && bigdata.sex<=0 && bigdata.age>58 && bigdata.age<=61) {
      window.alert('คุณมีความเสี่ยงเป็นโรคหัวใจ: '+yes)
    }if(bigdata.chestpaintype>3 && bigdata.oldpeakST<=0.7 && bigdata.sex<=0 && bigdata.age>58 && bigdata.age>61) {
      window.alert('คุณไม่มีความเสี่ยงเป็นโรคหัวใจ: '+no)
    }if(bigdata.chestpaintype>3 && bigdata.oldpeakST<=0.7 && bigdata.sex>0) {
      window.alert('คุณมีความเสี่ยงเป็นโรคหัวใจ: '+yes)
    }if(bigdata.chestpaintype>3 && bigdata.oldpeakST>0.7) {
      window.alert('คุณมีความเสี่ยงเป็นโรคหัวใจ: '+yes)
    }
    this.db.list('/swe442').push(bigdata)
  }
  delWiki(data){
    this.bigdataList.remove(data.key)

  }

  agianSubmit(data){
   
      let yes='yes'
      let no='no'
      if(data.chestpaintype<=3 && data.sex<=0) {
        window.alert('คุณไม่มีความเสี่ยงเป็นโรคหัวใจ: '+no)
      } if(data.chestpaintype<=3 && data.sex>0 && data.age<=55) {
        window.alert('คุณไม่มีความเสี่ยงเป็นโรคหัวใจ: '+no)
      }if(data.chestpaintype<=3 && data.sex>0 && data.age>55 && data.serumcholestoralinmgdl<=245 && data.oldpeakST<=2.4) {
        window.alert('คุณไม่มีความเสี่ยงเป็นโรคหัวใจ: '+no)
      }if(data.chestpaintype<=3 && data.sex>0 && data.age>55 && data.serumcholestoralinmgdl<=245 && data.oldpeakST>2.4) {
        window.alert('คุณมีความเสี่ยงเป็นโรคหัวใจ: '+yes)
      }if(data.chestpaintype<=3 && data.sex>0 && data.age>55 && data.serumcholestoralinmgdl>245) {
        window.alert('คุณมีความเสี่ยงเป็นโรคหัวใจ: '+yes)
      }if(data.chestpaintype>3 && data.oldpeakST<=0.7 && data.sex<=0 && data.age<=58) {
        window.alert('คุณไม่มีความเสี่ยงเป็นโรคหัวใจ: '+no)
      }if(data.chestpaintype>3 && data.oldpeakST<=0.7 && data.sex<=0 && data.age>58 && data.age<=61) {
        window.alert('คุณมีความเสี่ยงเป็นโรคหัวใจ: '+yes)
      }if(data.chestpaintype>3 && data.oldpeakST<=0.7 && data.sex<=0 && data.age>58 && data.age>61) {
        window.alert('คุณไม่มีความเสี่ยงเป็นโรคหัวใจ: '+no)
      }if(data.chestpaintype>3 && data.oldpeakST<=0.7 && data.sex>0) {
        window.alert('คุณมีความเสี่ยงเป็นโรคหัวใจ: '+yes)
      }if(data.chestpaintype>3 && data.oldpeakST>0.7) {
        window.alert('คุณมีความเสี่ยงเป็นโรคหัวใจ: '+yes)
      }
    

  }

  
}
    

    