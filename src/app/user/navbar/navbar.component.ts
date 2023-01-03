import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../Models/category';
import { CategoryService } from '../../services/category.service';
import { Subcategory } from '../../Models/subcategory';
import { Router } from '@angular/router';
import { User } from '../../Models/user';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onSubcategoryClicked = new EventEmitter<any>();

  subcategories : Subcategory [] = [];
  isLoggedIn: boolean=false;
  categories : Category [] = [];
  @Input() itemsCount!: number;
  constructor(categoryService: CategoryService,public router:Router, cartService:CartService) {
    categoryService.getCategories().subscribe(
      data=>{
        this.categories=data;
      }
    )
   
    
   }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem('user');
   this.router.navigate(['']);
 }
 showSubcategory: boolean  = false;

  showSucbategories(subcategoryList : Subcategory[]){
    this.subcategories=subcategoryList;
    this.showSubcategory=true;

  }
  getProducts(subcategory : Subcategory){
    this.onSubcategoryClicked.emit(subcategory.id);
    this.router.navigate(['/products-view',subcategory.id]);
  }
  hideSucbategories(){
    this.showSubcategory=false;
  }
}
