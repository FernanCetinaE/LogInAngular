import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { ErrorMessageComponent } from '../dialogs/error-message/error-message.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login: any = FormGroup;
  id: any = 5;
  users:any=[];
  
  errorMessage:any;
  errorColor:any;
  
  constructor(private fb:FormBuilder, private router:Router,private commService:CommonService,private commserve:CommonService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required]
    });

    this.commserve.getUser().subscribe((data:any)=>{
      this.users=data;
    });

  }

  registerSubmit(data: any){

    let dataToPass={
      name : data.name,
      password : data.password,
      id : Math.random()
    }

    if(this.validateNewUser(dataToPass)){
      this.commService.addUser(dataToPass).subscribe((data:any)=>{
        console.log(data);
      });
    }
  }

  validateNewUser(data: any): boolean{
    let flag : boolean = false;

    for (const item of this.users) {
      if(item.name===data.name){
        flag = true;
        break;
      }
    }

    if(flag){
      this.errorMessage='Ups!, that username is already taken, try again... 👻';
      this.errorColor=true;
    }else{ 
      this.errorColor=false;
      this.errorMessage='The register was a success! 🛎️';
      this.dialog.open(ErrorMessageComponent,{
        width: '250px',
        data: this.errorMessage,
      });
      this.users.push(data);
    }

    return !flag
  }

  goToLogIn(){this.router.navigate(['login']);}
}
