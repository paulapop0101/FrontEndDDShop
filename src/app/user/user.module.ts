import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { AngularMaterialModule } from '../angular-material.module';
import { SharedModule } from '../shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ItemEditComponent } from './cart/item-edit/item-edit.component';



@NgModule({
  declarations: [
    HomepageComponent,
    ProductViewComponent,
    ProductsViewComponent,
    NavbarComponent,
    RegisterFormComponent,
    LoginComponent,
    CartComponent,
    HeaderComponent,
    ItemEditComponent 
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class UserModule { }
