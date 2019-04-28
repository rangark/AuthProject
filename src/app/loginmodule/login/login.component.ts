import { Component, OnInit } from '@angular/core';
import { SecureSvcService } from '../../secure-svc.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  str: string;
  constructor(private secSvc:SecureSvcService) { }

  ngOnInit() {
    this.secSvc.getAllUsers().subscribe(x => {
      console.log(".."+JSON.stringify(x));
      // str=JSON.stringfy;
    })
  }



}
