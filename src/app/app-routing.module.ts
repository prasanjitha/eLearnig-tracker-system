import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'',component:TestComponent},
{path:"register",component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:"home",component:HomeComponent},
{path:"test",component:TestComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
