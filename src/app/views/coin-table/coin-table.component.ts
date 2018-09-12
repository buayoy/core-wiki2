import { Component, OnInit } from '@angular/core';
import { MarketApiService } from '../../service/market-api.service';

@Component({
  selector: 'app-coin-table',
  templateUrl: './coin-table.component.html',
  styleUrls: ['./coin-table.component.scss']
})
export class CoinTableComponent implements OnInit {


  constructor(private marketApiService:MarketApiService) { 
    this.marketApiService.getcurrency().subscribe((res:any)=>{
      let objs = res.data;

      let arr = Object.keys(objs).map((index) => objs[index]);
    
      console.log("array",arr);

      let sorts = arr.sort((a,b)=> a.rank - b.rank );

      let arr2 = sorts.filter(rank => rank.rank <= 20);

      this.markets = arr2
      console.log(arr2);
      
      
      
    })
  }
markets=[];

  ngOnInit() {
  }

}