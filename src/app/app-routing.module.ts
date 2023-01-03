import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterFormComponent } from './user/register-form/register-form.component';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';
import {
  RoleGuardService as RoleGuard
} from './auth/role-guard.service';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AttributeComponent } from './admin/attribute/attribute.component';
import { BaseProductsComponent } from './admin/base-products/base-products.component';
import { VariantComponent } from './admin/variant/variant.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { ProductsViewComponent } from './user/products-view/products-view.component';
import { ProductViewComponent } from './user/product-view/product-view.component';
import { CartComponent } from './user/cart/cart.component';
const routes: Routes = [
  {path : 'home',component: HomepageComponent},
  {path : 'register', component: RegisterFormComponent},
  {path : 'login', component: LoginComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRole: 'normal_user'
    }
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'admin-profile',
    component: AdminProfileComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'admin-categories',
    component: AdminCategoriesComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'attribute',
    component: AttributeComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'base-products',
    component: BaseProductsComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'final-products',
    component: VariantComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  {
    path: 'products-view/:id',
    component: ProductsViewComponent,
    
  },
  {
    path: 'product-view',
    component: ProductViewComponent,
    
  },
  {
    path: 'cart',
    component: CartComponent,
    
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
