import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList:any=[];

  constructor(private router: Router,private commService:CommonService) { }

  ngOnInit(): void {
    
  }

  logOut(){
    localStorage.clear;
    this.router.navigate(['login']);
  }

}
