import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CartComponent } from './cart/cart.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
     
    CartComponent,
    LoginSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
