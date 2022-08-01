import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import decode from 'jwt-decode';
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

    this.userService.logUser(this.user).subscribe(data=>
      {console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        if(data.role=='admin')
          this.router.navigate(['admin']);
        else this.router.navigate(['profile']);
      },
      error=>{
        console.log(error);
        this.response=error.error;
      });
   
  }

}
