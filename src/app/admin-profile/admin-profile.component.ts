import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
 // user = [];
  user = JSON.parse(localStorage.getItem('user')!);
  new_user : User = new User();
  constructor(public router : Router,public userService : UserService) {
    this.user=JSON.parse(localStorage.getItem('user')!);
    this.new_user.firstname=this.user.firstname;
    this.new_user.lastname=this.user.lastname;
    this.new_user.phone=this.user.phone;
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
      {console.log(data);
        this.success="Updated succesfully";
        this.user.firstname=this.new_user.firstname;
        this.user.lastname=this.new_user.lastname;
        this.user.phone=this.new_user.phone;
        localStorage.setItem('user',JSON.stringify(this.user));
      },
      error=>{
        console.log(error.error);
        this.error=error.error;
      });
  }

}
