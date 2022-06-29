import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  users:any=[];

  constructor(private fb:FormBuilder, private router:Router, private commserve:CommonService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required]
    })

    this.commserve.getUser().subscribe((data:any)=>{
      this.users=data;
    })
  }

  loginSubmit(data: any){
    console.log(data);
    /*
    if(data.name){
      this.users.forEach((item:any) => {
        console.log('loop: '+item.name+"  "+item.password);

        if(item.name===data.name && item.password===data.password){
          console.log('match!');

          localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['home']);
          
        }else{
          localStorage.clear();
        }

      });
    }*/

    if(data.name){
      for (const item of this.users) {
          if(item.name===data.name && item.password===data.password){
            console.log('match!');
            localStorage.setItem("isLoggedIn","true");
            this.router.navigate(['home']);
            break;
          }else{
            localStorage.clear();
          }
      }
    }

    
  }

  goToSignUp(){
    this.router.navigate(['register']);
  }

}
