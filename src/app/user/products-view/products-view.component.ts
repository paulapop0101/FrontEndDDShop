import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VariantModel } from '../../Models/products/variantModel';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  variants: VariantModel[] = [];
  wishListIcons: boolean[] = [];
  num !: number; 
  constructor(public productService: ProductService, private route: ActivatedRoute) {
   
  }
  ngOnInit(): void {
    let num1 = this.route.snapshot.paramMap.get('id');
    console.log(num1);
    this.num=parseInt(num1!);
    this.setProductList(parseInt(num1!));
  }
  setProductList(subcategoryId: number){
    this.productService.getVariantsBySubcategory(subcategoryId).subscribe(
      data=>{
      this.variants=data;
      console.log(this.variants);
      
      for(let index = 0; index < data.length; index++) {
        this.wishListIcons[index] = false;
      }
    }
    )
  }
  addToWishList(index : number){
    this.wishListIcons[index] = !this.wishListIcons[index];
  }
  
}
