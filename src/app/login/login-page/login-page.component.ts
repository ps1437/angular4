import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {MatSnackBar} from '@angular/material';
import {LoginModelComponent} from '../login-model/login-model.component'
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
dialogResult :string; 
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


loginPopUp() {
    let dialogRef = this.dialog.open(LoginModelComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

}
