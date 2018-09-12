import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VerifyPhonenumber } from '../model/otp';

let api_key="1a50ae84"
let api_secret="dVRnz9vyf2p5hiq5"
let from="เน็ตประชารัฐ"
let text="OTP จาก เน็ตประชารัฐ"
let number=66623122792
let brand="NexmoVerifyTest"
@Injectable({
  providedIn: 'root'
})



export class NexmoService {
  

  partUrl = '';
  apiKey    = 'af6269c4';
  apiSecret = '071c66570685a8ca';
  verifyPhonenumber:Promise<VerifyPhonenumber>;
  

  constructor(
    public http: HttpClient,
   
  ) {
    
  }

  verify(phoneNumber:string){
    const massage     = "Your OTP";
    console.log('phoneNumber',phoneNumber);
    return new Promise((resolve, reject)=>{
      this.http.post(this.partUrl+'/verify/json',
                    {api_key:this.apiKey,api_secret:this.apiSecret,number:phoneNumber,brand:massage}  
                  ).subscribe(res => {
                    resolve(res);
                  }, (err) => {
                    reject(err);
                  });
    }); 
    
    //return this.verifyPhonenumber;
  }

  check(id:string,otp:string){
    return new Promise((resolve, reject)=>{
      this.http.post(this.partUrl+'/verify/check/json',
                          {api_key:this.apiKey,api_secret:this.apiSecret,request_id:id,code:otp}
                          ).subscribe(res => {
                            resolve(res);
                          }, (err) => {
                            reject(err);
                          });
    });
    

  }

}
