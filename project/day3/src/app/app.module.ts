import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormGroup } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CartComponent } from './cart/cart.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeProductDetailsComponent } from './home-product-details/home-product-details.component';
import { LoginComponent } from './login-sign-up/login/login.component';
import { SignupComponent } from './login-sign-up/signup/signup.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
     
    CartComponent,
    LoginSignUpComponent,
    ProductDetailsComponent,
    HomeProductDetailsComponent,
    LoginComponent,
    SignupComponent,
    AllProductsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
