import {Component, Inject, OnInit} from '@angular/core';
import {Dialog, DIALOG_DATA} from '@angular/cdk/dialog';
import { Baseproducts } from 'src/app/Models/products/baseproducts';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editproductdialog',
  templateUrl: './editproductdialog.component.html',
  styleUrls: ['./editproductdialog.component.css']
})
export class EditproductdialogComponent {



  product : Baseproducts = new Baseproducts();
  category! : Category[];
  constructor( public dialogRef: MatDialogRef<EditproductdialogComponent>,@Inject(MAT_DIALOG_DATA) public prod: Baseproducts, category : CategoryService,public productService : ProductService) {

    this.product.id = prod.id;
    this.product.name=prod.name;
    this.product.description=prod.description;
    this.product.subcategory=prod.subcategory;
    category.getCategories().subscribe(
      data=>this.category=data
    )
   // prod = this.newproduct;
  }


  onSubmit(){
      console.log(this.product);
      this.productService.updateProduct(this.product).subscribe(
        data=>window.location.reload()
      )
  }

}
