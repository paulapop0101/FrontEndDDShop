import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(cartService:CartService,public router:Router) { 
    let t : User;
    if(localStorage.getItem('user')){
      this.isLoggedIn=true;
      console.log('isloggedIn');
      let t = new User();
    if(localStorage.getItem('user')!=null){
      t = JSON.parse( localStorage.getItem('user')!);
    cartService.getItemsCount(t.email).subscribe(data=>this.itemsCount=data)
    }
    }
    else{
      this.isLoggedIn=false;
      console.log('is not loggedIn');
    }
  }
 @Input() itemsCount!:number;
  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
