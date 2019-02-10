import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CartComponent} from './cart/cart.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignupComponent} from './login-sign-up/signup/signup.component';
import { LoginComponent} from './login-sign-up/login/login.component';
import { AllProductsComponent } from './all-products/all-products.component';
import {  PaymentComponent} from './payment/payment.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  { path:'login-sign-up', component: LoginSignUpComponent},
  {path:'cart/:id',component:CartComponent},
  { path:'product-details/:id',component: ProductDetailsComponent},
  { path:'login-sign-up/login',component: LoginComponent},
  {path:'login-sign-up/signup', component: SignupComponent},
  {path:'all-products',component:AllProductsComponent},
  {path:'payment',component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[HomeComponent,LoginSignUpComponent,CartComponent,ProductDetailsComponent,SignupComponent,LoginComponent]