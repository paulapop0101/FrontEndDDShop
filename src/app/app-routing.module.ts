import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path : '',component: FrontComponent},
  {path : 'register', component: RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
