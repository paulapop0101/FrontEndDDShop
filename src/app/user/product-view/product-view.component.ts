import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartEntry } from 'src/app/Models/cart-entry';
import { User } from 'src/app/Models/user';
import { CartService } from 'src/app/services/cart.service';
import { Colors } from '../../Models/colors';
import { VariantModel } from '../../Models/products/variantModel';
import { Sizes } from '../../Models/sizes';
import { Subcategory } from '../../Models/subcategory';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  itemsCount!:number;
  public productId: number;
  colors : Colors[] = [];
  sizes: Sizes[]=[];
  colorsPressed : boolean[]=[];
  sizesPressed : boolean[]=[];
  variant: VariantModel= new VariantModel();
  variantId!: number;
  sizeSelected:boolean = false;
  constructor(public cartService: CartService,public productService: ProductService, private route :ActivatedRoute) { 
    this.productId=parseInt(this.route.snapshot.paramMap.get('productId')!);
    const variant_id=parseInt(this.route.snapshot.paramMap.get('variantId')!);
    productService.getColors(this.productId).subscribe(
      data=>{
        this.colors=data;
        console.log(variant_id,this.colors);
        for (let index = 0; index < this.colors.length; index++) {
          this.colorsPressed[index]=false;
        }
      }
    )
    let t = new User();
    if(localStorage.getItem('user')!=null){
      t = JSON.parse( localStorage.getItem('user')!);
    cartService.getItemsCount(t.email).subscribe(data=>this.itemsCount=data)
    }
    productService.getVariant(variant_id).subscribe(
      data=>this.variant=data
    )
  }

  ngOnInit() {
  }
  colorSelect(colorIndex: number,color: Colors){
    for (let i = 0; i < this.colors.length; i++) {
        this.colorsPressed[i]=false;
    }
    this.colorsPressed[colorIndex]=true;
    this.productService.getSizes(this.productId,color.value).subscribe(
      data=>{
        this.sizes=data;
        for (let index = 0; index < this.sizes.length; index++) {
          this.sizesPressed[index]=false;
        }
        console.log(this.sizes);
      }
    )
    this.sizeSelected=false;
  }
  sizeSelect(sizeIndex: number){
    for (let i = 0; i < this.sizes.length; i++) {
      this.sizesPressed[i]=false;
    }
    this.sizesPressed[sizeIndex]=true;
    this.variantId = this.sizes[sizeIndex].id;
    this.sizeSelected=true;
  }
  addToCart(){
    if(this.sizeSelected){
      
        let entry = new CartEntry();
        entry.quantity=1;
        entry.variant_id=this.variantId;
        
        let t = new User();
        if(localStorage.getItem('user')!=null){
          t = JSON.parse( localStorage.getItem('user')!);
            this.cartService.addToCart(entry,t.email).subscribe(
              data=>{
                console.log(data);
                let t = new User();
                if(localStorage.getItem('user')!=null){
                  t = JSON.parse( localStorage.getItem('user')!);
                this.cartService.getItemsCount(t.email).subscribe(data=>this.itemsCount=data)
                }
              }
            )
        }
    }
    //error message
  }
}
