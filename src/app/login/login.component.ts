import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router,public userService: UserService) { }

  user : User = new User();

  ngOnInit(): void {
  }
  response : String = "";
  onSubmit(){
    this.response = "";
    console.log(this.user);
    this.userService.logUser(this.user).subscribe(data=>
      {console.log(data);
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['profile']);
      },
      error=>{
        console.log(error);
        this.response=error.error;
      });
   
  }

}
