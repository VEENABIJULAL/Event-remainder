import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'dasboard',component:DashboardComponent
  },
  {
    path:'register',component:RegisterComponent

  },
  {
    path:'add',component:AddComponent
  },
  {
    path:'view',component:ViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
