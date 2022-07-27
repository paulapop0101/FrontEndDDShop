import { Component, Injectable, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
@Injectable({ providedIn: 'root' })
export class RegisterFormComponent implements OnInit {

  user: User = new User() ;
  constructor(private userService:UserService) { }
  
  ngOnInit(): void{}
  message = "";
  onSubmit() {
   
    this.userService.addUser(this.user).subscribe(data=>
      {console.log(data);
      },
      error=>{
        console.log(error);
        this.message=error.error;
      });

}
}
