import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let root = "https://localhost:44309/api/books/"

@Injectable({
  providedIn: 'root'
})
export class DotnetHttpService {

  constructor(private http:HttpClient) { }
}
