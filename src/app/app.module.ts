import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { AngularMaterialModule } from './angular-material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from '@angular/cdk/dialog';
import { DigitOnlyModule } from '@uiowa/digit-only';

import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    DialogModule,
    DigitOnlyModule,
    AngularMaterialModule,
    UserModule
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AngularMaterialModule]
})

export class AppModule { }
