import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

const sharedModules=[
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  NgbModule,
  FlexLayoutModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...sharedModules,
  ],
  exports: [
    ...sharedModules
  ]
})
export class SharedModule { }
