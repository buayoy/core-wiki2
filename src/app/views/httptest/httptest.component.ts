import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
  styleUrls: ['./httptest.component.scss']
})
export class HttptestComponent implements OnInit {

  constructor(private httpservice: HttpService) {
    
   }

  ngOnInit() {
  }

}
