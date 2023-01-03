import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FlexAlignDirective } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Cart } from 'src/app/Models/cart';
import { CartEntry } from 'src/app/Models/cart-entry';
import { User } from 'src/app/Models/user';
import { CartService } from 'src/app/services/cart.service';
import { ItemEditComponent } from './item-edit/item-edit.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  cartCount : number = 0;
  cart : Cart = new Cart();

  constructor(public cartService:CartService, public dialog: MatDialog) {
    this.loadCart();
   }

  ngOnInit(): void {}

  private loadCart(){
    let t = new User();
    if(localStorage.getItem('user')!=null){
      t = JSON.parse( localStorage.getItem('user')!);
    this.cartService.getUserCart(t.email).subscribe(
      data=>{
        this.cart=data;
        
        this.cartService.getItemsCount(t.email).subscribe(data=>this.cartCount=data)
      }
    )
   }
  }

  changeQuantity(number : number,quantity:number,i:number){
    
      if(number==1 && quantity<10){
        let entry = new CartEntry();
        entry.quantity=1;
        entry.variant_id=this.cart.entries[i].variant_id;
        let t = new User();
    if(localStorage.getItem('user')!=null){
      t = JSON.parse( localStorage.getItem('user')!);
        this.cartService.addToCart(entry,t.email).subscribe(
          data=>{
            console.log(data);
            this.loadCart();
          }
        )
    }
      }
      else if(number==-1 && quantity > 1){
        this.cartService.decreaseItemQuantity(this.cart.entries[i].id).subscribe(
          data=>{
            console.log(data);
            this.loadCart();
          }
        )
      }
    

  }

  removeItem(entry_id:number){
    this.cartService.deleteCartEntry(entry_id).subscribe(
      data=>{
          this.loadCart();
      }
    )
  }

  openDialog(entry : CartEntry) {

    const dialogRef =this.dialog.open(ItemEditComponent, {
      minWidth: '200px',
      width:'500px',
      height:'500px',
    
      data: entry
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  
  }

}
