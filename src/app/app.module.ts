import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms'
import {AngularFireModule} from '@angular/fire'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountsComponent } from './components/account/accounts.component';
import { NavbarComponent } from './components/navbar/navbar.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    CartComponent,
    NavbarComponent,
    AccountsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyA2j9i57J5-FuIiV1zOLllmsOcfOVHkaWc",
        authDomain: "ecommerceapp-a3bcb.firebaseapp.com",
        databaseURL: "https://ecommerceapp-a3bcb.firebaseio.com",
        projectId: "ecommerceapp-a3bcb",
        storageBucket: "ecommerceapp-a3bcb.appspot.com",
        messagingSenderId: "705549383954",
        appId: "1:705549383954:web:40733f53a11e0d55e31bcb",
        measurementId: "G-CWWN8JV91N"
      }
    ), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
