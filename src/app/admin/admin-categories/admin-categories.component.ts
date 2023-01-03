import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../../Models/category';
import { CategoryService } from '../../services/category.service';
import { Subcategory } from '../../Models/subcategory';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  listC : Category[] =[];
  listS : Subcategory[] = [];
  drop : Boolean[] = [];
  inputS : Boolean[] = [];
  newCategory : string ="new category";
  newSubcategory: string = "new subcategory";

  constructor(public router: Router, public categoryService: CategoryService) {
    categoryService.getCategories().subscribe(
      data=>{
        this.listC=data;
        for (let index = 0; index < data.length; index++) {
          this.drop[index] = true;
          this.inputS[index] = false;

        }
      }
    );
   }

  page3: Boolean = true;
  addCategoryWasPressed: Boolean = false;



  ngOnInit(): void {
  }
  logOut(){
     localStorage.removeItem('user');
    this.router.navigate(['']);
  }
  showSubcategories(i: number){
    this.drop[i] = !this.drop[i];
  }

  newCategoryButton(){
    console.log("add new Category button pressed");
    this.addCategoryWasPressed=true;
  }

  addCategory(){
    console.log(this.newCategory);
    let category : Category = new Category();
    this.categoryService.addCategory(this.newCategory).subscribe(
      data=>{console.log(data)
      }
      );
     category.id=-1;
     category.name=this.newCategory;
     this.listC.push(category);

  }

  cancelCat(){
    this.addCategoryWasPressed=false;
  }
  DeleteCategoryButton(id : number){
    this.categoryService.deleteCategory(id).subscribe(
      data=>{
        console.log(data);
      },
      error => {console.log(error.error)}
    )

    window.location.reload();
  }


  // Subcateory service    !!!!!!!!!!!

  AddSubcategoryButton(i :number){
    this.inputS[i] = true;
    this.drop[i] = true;
  }
  addSubcategory(cat_id : number, i :number){

    console.log(this.newSubcategory);
    this.categoryService.addSubcategory(this.newSubcategory,cat_id).subscribe(
      data=>console.log(data),
      error=>console.log(error.error)
      );
     let subcategory : Subcategory = new Subcategory();
     subcategory.name = this.newSubcategory;

      this.listC[i].subcategories.push(subcategory);
      console.log(subcategory);
  }
  cancelSub(i : number){
    this.inputS[i] = false;
  }
  deleteSubcategory(sub : Subcategory, cat_index : number, sub_index : number){
    console.log(sub);
    if(sub.id>=0){

    this.categoryService.deleteSubcategory(sub.id).subscribe(
      data=>console.log(data),
      error=>{
        console.log(error.error);
      }
    )
    }else{
      console.log("not added in ");
    }
    this.listC[cat_index].subcategories.splice(sub_index,1);

  }


  // Product Attribute part

}

