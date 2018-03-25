import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
private isUserLoggedIn ;
  checkLogin(){
 this.isUserLoggedIn = false;
  }

setUserLogIn(){
  this.isUserLoggedIn = true;
}
getUserLogIn(){
  return this.isUserLoggedIn;
}
}
