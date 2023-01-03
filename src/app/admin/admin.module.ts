import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate, ROUTES } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AttributeComponent } from './attribute/attribute.component';
import { BaseProductsComponent } from './base-products/base-products.component';
import { EditproductdialogComponent } from './base-products/editproductdialog/editproductdialog.component';
import { VariantComponent } from './variant/variant.component';
import { EditVariantDialogComponent } from './variant/edit-variant-dialog/edit-variant-dialog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryItemComponent } from './admin-categories/category-item/category-item.component';

@NgModule({
  declarations: [
    AdminCategoriesComponent,
    AttributeComponent,
    BaseProductsComponent,
    EditproductdialogComponent,
    AdminDashboardComponent,
    AdminProfileComponent,
    VariantComponent,
    EditVariantDialogComponent,
    SidebarComponent,
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class AdminModule { }
