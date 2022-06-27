import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required]
    })
  }

  registerSubmit(data: any){
    console.log(data);
  }

  goToSignUp(){
    this.router.navigate(['register']);
  }

}
