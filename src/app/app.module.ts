import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { LogoutComponent } from './logout/logout.component';
import { UserHomePageComponent } from './Customers/user-home-page/user-home-page.component';
import { RouterModule } from '@angular/router';
import { MyprofileComponent } from './Customers/myprofile/myprofile.component';
import { CartComponent } from './Customers/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersComponent,
    LogoutComponent,
    UserHomePageComponent,
    MyprofileComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
