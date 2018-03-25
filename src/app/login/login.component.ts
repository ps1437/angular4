import { Component, OnInit } from '@angular/core';
import {LoginService} from '../book/service/login.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
title = 'Login Form'; 
  constructor(private login : LoginService ,private route: Router) { }
 public status = false;
 public wrongCred = false;
 public userName ="";
  ngOnInit() {
  }
  onLogin(data) {

if(data.pwd =="" || data.userName  ==""){
 this.status = true;
}else
    if(data.pwd == "admin" && data.userName=="admin"){
         this.login.setUserLogIn();
         this.status = false;
         this.userName =data.userName;
         this.wrongCred = false;
          this.route.navigate(['bookHome']);
    }else{ this.status = false;
      this.wrongCred = true;
    }

  } 
  

  
}
