import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login: any = FormGroup;
  id: any = 5;
  
  constructor(private fb:FormBuilder, private router:Router,private commService:CommonService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required]
    })
  }

  registerSubmit(data: any){
    console.log(data);
    let dataToPass={
      name : data.name,
      password : data.password,
      id : Math.random()
    }

    this.commService.addUser(dataToPass).subscribe((data:any)=>{
      console.log(data);
    })
  }

  goToLogIn(){
    this.router.navigate(['login']);
  }

}
