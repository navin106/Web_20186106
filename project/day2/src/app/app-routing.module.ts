import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CartComponent} from './cart/cart.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent },
  { path:'login-sign-up', component: LoginSignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent,LoginSignUpComponent,CartComponent]