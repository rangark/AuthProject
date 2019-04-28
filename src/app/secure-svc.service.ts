import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecureSvcService {
  private url:string = "http://localhost:8080/users";
  constructor(private httpCli:HttpClient) { 

  }

  getAllUsers() {
    let svcHdrs:HttpHeaders = new HttpHeaders();
    // let basicred = btoa("user:9da323ff-d365-4bad-b9f3-50b5459e9bf7");
    let basicred = btoa("admin:password");
    svcHdrs = svcHdrs.append('Authorization','Basic '+basicred);
    svcHdrs= svcHdrs.append('Content-Type',"application/x-www-form-urlencoded");
    // console.log();
    return this.httpCli.get(this.url, {headers:svcHdrs});
  }

}
