import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { DisplayUsersComponent } from './display-users/display-users.component';
//import { LogoutComponent } from './logout/logout.component';
import { UserHomePageComponent } from './Customers/user-home-page/user-home-page.component';
import { RouterModule } from '@angular/router';
import { MyprofileComponent } from './Customers/myprofile/myprofile.component';
import { CartComponent } from './Customers/cart/cart.component';

import { DisplayUsersComponent } from './LoginSignup/display-users/display-users.component';
import { LogoutComponent } from './LoginSignup/logout/logout.component';
import { RegisterComponent } from './LoginSignup/register/register.component';
import { LoginComponent } from './LoginSignup/login/login.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookpreviewComponent } from './Customers/bookpreview/bookpreview.component';
import { UsernavbarComponent } from './Customers/usernavbar/usernavbar.component';
import { AddbookComponent } from './Admin/addbook/addbook.component';
import { NavbaradminComponent } from './Admin/navbaradmin/navbaradmin.component';
import { SearchBookComponent } from './Customers/search-book/search-book.component';
import { AllbookComponent } from './Admin/allbook/allbook.component';
import { CheckoutComponent } from './Customers/checkout/checkout.component';
import { PaymentComponent } from './Customers/payment/payment.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AllcategoryComponent } from './Admin/allcategory/allcategory.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersComponent,
    LogoutComponent,
    UserHomePageComponent,
    MyprofileComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    BookpreviewComponent,
    UsernavbarComponent,
    AddbookComponent,
    NavbaradminComponent,
    SearchBookComponent,
    AllbookComponent,
    CheckoutComponent,
    PaymentComponent,
    AddcategoryComponent,
    AllcategoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,progressBar:true,
      progressAnimation:'decreasing'
    }),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
