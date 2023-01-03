import { Component, OnInit } from '@angular/core';
import { Attribute } from '../../Models/attribute';
import { AttributeService } from '../../services/attribute.service';
import { Value } from '../../Models/value';
import { CategoryService } from '../../services/category.service';
import { Subcategory } from '../../Models/subcategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  addAttributeWasPressed: Boolean = false;
  inputV : boolean[] = [];
  inputS: boolean[] = [];
  newAttribute : string = "new attribute";
  newValue: string = "new value";
  listA : Attribute[] = [];
  dropV: boolean[] = [];
  dropS: boolean[] = [];
  showDropDown : boolean[] = [];
  page8: boolean = true;
  ngOnInit() {

  }
  list : Subcategory[] = [];

  currentSelected : {} = {};


  constructor(public attributeService: AttributeService, public categoryService: CategoryService, public router: Router) {

      attributeService.getAttributes().subscribe(
        data=>{
          this.listA = data;
          console.log(this.listA[0].subcategories);
          for (let index = 0; index < data.length; index++) {
            this.dropV[index] = true;
            this.dropS[index] = true;
            this.inputV[index] = false;
            this.inputS[index] = false;
            this.showDropDown[index] = false;
          }
        },
        error=>{
          console.log(error.error);
        }
      )
      categoryService.getSubcategories().subscribe(
        data=>{
          this.list = data;
        }
      )


  }
  logOut(){
    localStorage.removeItem('user');
   this.router.navigate(['']);
 }
  func(subcategories : Subcategory[],subCategory : Subcategory, ){
    return subcategories.some(({id}) => id == subCategory.id);
  }
  getIndexfunc(subCategory : Subcategory, i : number){
   let aux : Subcategory[] = this.listA[i].subcategories;
   for(let index =0 ; index <  aux.length ; index++)
        if(aux[index].id==subCategory.id)
            return index;
    return -1;
  }

    getSelectedValue(status:Boolean,value: Subcategory,id:number,i:number){
        if(status){
            this.listA[i].subcategories.push(value);
            this.attributeService.addSubcategory(id,value).subscribe();
        }else{
            var index = this.getIndexfunc(value,i);
            this.listA[i].subcategories.splice(index,1);
            if(id!=null)
              this.attributeService.deleteSubcategory(id,value).subscribe(data=>console.log(data,"delete"));

        }

        this.currentSelected = {checked : status,name:value};

    }


  newAttributeButton(){
    this.addAttributeWasPressed = true;
  }

  addAttribute(){
    this.attributeService.addAttribute(this.newAttribute).subscribe(
      data=>{
        console.log(data);
        let attribute : Attribute = new Attribute();
        attribute.id = data;
        attribute.name=this.newAttribute;
        attribute.subcategories=[];
        this.listA.push(attribute);
      }
    )

  }
  cancelAttribute(){
    this.addAttributeWasPressed = false;
  }
  deleteAttributeButton(id:number,index : number){
    if(id!=null){
      this.attributeService.deleteAttribute(id).subscribe(
        data=>console.log(data)
      )
    }
    this.listA.splice(index,1);

  }
  showValues(i:number){
    this.dropV[i]= !this.dropV[i];
  }
  showSubcategories(i:number){
    this.dropS[i]= !this.dropS[i];
  }
  addValueButton(index: number){
    this.inputV[index] = true;
    this.dropV[index] = true;
  }
  cancelValue(index: number){
    this.inputV[index]=false;
  }
  addValue(id : number,index : number){
    this.attributeService.addAttributeValue(id,this.newValue).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error.error);
      }
      );

   let value : Value = new Value();
   value.value=this.newValue;
   this.listA[index].values.push(value);
  }
  deleteValue(id:number,index : number ,i:number){
  if(id!=null){
    this.attributeService.deleteAttributeValue(id).subscribe(
      data=>{
        console.log(data);
      },
      error=>console.log(error.error)
    )
  }
    this.listA[i].values.splice(index,1);
  }

  addSubcategoryButton(index : number){
    this.inputS[index] = true;
    this.dropS[index] = true;
  }
  cancelSubcategory(index : number){
    this.inputS[index] = false;
  }
  deleteSubcategory(value : Subcategory, att_id : number, att_index : number, sub_index : number){
    this.listA[att_index].subcategories.splice(sub_index,1);
    if(value.id!=null){
      this.attributeService.deleteSubcategory(att_id,value).subscribe(data=>console.log(data,"delete"));
    }
  }
}
