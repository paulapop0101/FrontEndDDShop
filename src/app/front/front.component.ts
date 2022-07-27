import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(private userService: UserService) { 
    userService.getUsers().subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
