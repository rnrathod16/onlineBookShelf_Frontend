import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './Customers/cart/cart.component';
import { MyprofileComponent } from './Customers/myprofile/myprofile.component';
import { UserHomePageComponent } from './Customers/user-home-page/user-home-page.component';
import { LoginComponent } from './LoginSignup/login/login.component';
import { RegisterComponent } from './LoginSignup/register/register.component';
import { BookpreviewComponent } from './Customers/bookpreview/bookpreview.component';

const routes: Routes = [
  {path:"userhomepage", component:UserHomePageComponent},
  {path:"myprofilepage", component:MyprofileComponent},
  {path:"mycartpage",component:CartComponent},
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"preview",component:BookpreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
