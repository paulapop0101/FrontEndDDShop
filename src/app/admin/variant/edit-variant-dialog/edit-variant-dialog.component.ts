import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { observable } from 'rxjs';
import { Attribute } from 'src/app/Models/attribute';
import { Value } from 'src/app/Models/value';
import { ProductService } from 'src/app/services/product.service';
import { VariantModel } from 'src/app/Models/products/variantModel';

@Component({
  selector: 'app-edit-variant-dialog',
  templateUrl: './edit-variant-dialog.component.html',
  styleUrls: ['./edit-variant-dialog.component.css']
})
export class EditVariantDialogComponent implements OnInit {


  variant : VariantModel = new VariantModel();
  selection : Map<Value,boolean> = new Map();
  assignedValues : Attribute[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public prod: VariantModel, public productService : ProductService) {


    this.variant.id=prod.id
    this.variant.quantity=prod.quantity;
    this.variant.price=prod.price;
    // this.variant.attributes = prod.attributes;
    this.variant.productId=prod.productId;
    console.log(this.variant);
    this.productService.getAssignedValues(this.variant.productId).subscribe(
      data=>{

        this.assignedValues=data;
        this.assignedValues.forEach(element => {
              element.values.forEach(el => {
                  this.selection.set(el,false);
         });
        });
        console.log(this.selection.values);

      }

    )
   }
   attributeSelected(attribute: Attribute , value : Value, data:any){
    for(let val of attribute.values)
        this.selection.set(val,data.selected);
      this.selection.set(value,false);
   }

  ngOnInit(): void {
  }
 onSubmit(){


  console.log(this.variant);
  if(this.variant.attributes!=null)
      this.productService.updateVariant(this.variant,this.variant.id).subscribe(
        data=>{
          console.log(data)
          window.location.reload()
        }
      )

 }
}
