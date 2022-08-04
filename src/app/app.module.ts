import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontComponent } from './front/front.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AdminComponent } from './admin/admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    NavbarComponent,
    FrontComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    AdminProfileComponent,
    SidebarComponent,
    AdminCategoriesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
