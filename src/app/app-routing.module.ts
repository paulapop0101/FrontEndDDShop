import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { 
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';
import { 
  RoleGuardService as RoleGuard 
} from './auth/role-guard.service';
import { AdminComponent } from './admin/admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
const routes: Routes = [
  {path : '',component: FrontComponent},
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
    component: AdminComponent, 
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
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
