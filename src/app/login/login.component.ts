import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorMessageComponent } from '../dialogs/error-message/error-message.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  users:any=[];
  errorMessage:any;

  constructor(public dialog: MatDialog, private fb:FormBuilder, private router:Router, private commserve:CommonService) {}

  ngOnInit(): void {
    this.login = this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required]
    });

    this.commserve.getUser().subscribe((data:any)=>{
      this.users=data;
    });
  }

  loginSubmit(data: any){
    let flag : boolean = false;
    
    for (const item of this.users) {
      if(item.name===data.name && item.password===data.password){
        flag = true;
        break;
      }
    }

    if(flag){
      localStorage.setItem("isLoggedIn","true");
      this.router.navigate(['home']);
    }else{
      localStorage.clear();
      this.errorMessage='Ups!, incorrect credentials, try again... 👻'
      //this.dialog.open(ErrorMessageComponent);
    }
  }

  goToSignUp(){
    this.router.navigate(['register']);
  }


}
