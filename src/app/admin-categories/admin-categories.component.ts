import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { Subcategory } from '../subcategory/subcategory';

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
  newSub : Subcategory = new Subcategory();
  newSubcategory: string = "new subcategory";
  constructor(public router: Router, public categoryService: CategoryService) {
    categoryService.getCategories().subscribe(
      data=>{
        this.listC=data;
        this.listS = data[0].subcategories;
        for (let index = 0; index < data.length; index++) {
          this.drop[index] = false;
          this.inputS[index] = false;
          
        }
      }
    );
   }

  page3: Boolean = true;
  add: Boolean = false;
 // addS: Boolean = false;
  ngOnInit(): void {
  }
  logOut(){
     localStorage.removeItem('user');
    this.router.navigate(['']);
  }
  clickCat(i: number){
    console.log(i);
   
    this.drop[i] = !this.drop[i];
    this.listS = this.listC[i].subcategories;
  }
  newCat(){
    console.log("new Cat");
    this.add=true;
  }
  cancelCat(){
    this.add=false;
  }
  clickDel(id : number){
    this.categoryService.deleteCategory(id).subscribe(
      data=>{
        console.log(data);
      },
      error => {console.log(error.error)}
    )
    window.location.reload();
  }
  addCategory(){
    console.log(this.newCategory);
    this.categoryService.addCategory(this.newCategory).subscribe(
      data=>console.log('here')
      );
     this.add=false;
     this.categoryService.getCategories().subscribe(
      data=>{
        this.listC=data;
        this.listS = data[0].subcategories;
      }
    );
    window.location.reload();
   
  }
  addSub(i :number){
    //this.addS=true;
    this.inputS[i] = true;
    this.newSub.name="new subcategory";
    this.drop[i] = true;
  }
  addSubcategory(cat_id : number, i :number){
    
    console.log(this.newSub.name);
    this.categoryService.addSubcategory(this.newSub.name,cat_id).subscribe(
      data=>console.log(data),
      error=>console.log(error.error)
      );
    
    this.inputS[i]=false;

    this.categoryService.getCategories().subscribe(
      data=>{
        this.listC=data;
      },
      error=>console.log(error.error)
    );
     //this.addS=false;
    window.location.reload();
  }
  cancelSub(i : number){
    this.inputS[i] = false;
  }
  deleteSub(id : number){
    this.categoryService.deleteSubcategory(id).subscribe(
      data=>console.log(data),
      error=>{
        console.log(error.error);
      }
    )
    window.location.reload();
  }
}

