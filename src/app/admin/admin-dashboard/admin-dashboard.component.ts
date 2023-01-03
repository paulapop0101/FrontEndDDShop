import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public router : Router) { }
  page1: Boolean = true;
  ngOnInit(): void {
  }
  logOut(){
    console.log("herreee");
     localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
