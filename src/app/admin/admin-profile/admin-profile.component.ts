import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, windowWhen } from 'rxjs';
import { User } from '../../Models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user')!);
  myData : any;
  new_user : User = new User();
  constructor(public router : Router,public userService : UserService, public http: HttpClient) {
    this.user=JSON.parse(localStorage.getItem('user')!);
    this.new_user.firstname=this.user.firstname;
    this.new_user.lastname=this.user.lastname;
    this.new_user.phone=this.user.phone;
    this.new_user.email= this.user.email;
    this.new_user.postalCode=this.user.postalCode;
    this.new_user.streetLine=this.user.streetLine;
    this.new_user.city=this.user.city;
    this.new_user.county=this.user.county;
    this.new_user.country=this.user.country;
    console.log(this.user.role);

   }
  page2:Boolean = true;
  ngOnInit(): void {
  }
  logOut(){
    console.log("herreee");
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
  success="";
  error="";
  onUpdate(){
    this.success="";
    this.error="";
    this.userService.updateUser(this.user.id,this.new_user).subscribe(data=>
      { console.log(data);
        this.success="Updated succesfully";
        this.user.firstname=this.new_user.firstname;
        this.user.lastname=this.new_user.lastname;
        this.user.phone=this.new_user.phone;
        this.user.email=this.new_user.email;
        this.user.streetLine=this.new_user.streetLine;
        this.user.postalCode=this.new_user.postalCode;
        this.user.city=this.new_user.city;
        this.user.county=this.new_user.county;
        this.user.country=this.new_user.country;

        localStorage.setItem('user',JSON.stringify(this.user));
      },
      error=>{
        console.log(error.error);
        this.error=error.error;
      });
  }

}
