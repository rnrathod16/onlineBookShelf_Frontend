import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './Customers/cart/cart.component';
import { MyprofileComponent } from './Customers/myprofile/myprofile.component';
import { SearchBookComponent } from './Customers/search-book/search-book.component';
import { UserHomePageComponent } from './Customers/user-home-page/user-home-page.component';
import { LoginComponent } from './LoginSignup/login/login.component';
import { RegisterComponent } from './LoginSignup/register/register.component';
import { BookpreviewComponent } from './Customers/bookpreview/bookpreview.component';
import { AddbookComponent } from './Admin/addbook/addbook.component';
import { AllbookComponent } from './Admin/allbook/allbook.component';
import { CheckoutComponent } from './Customers/checkout/checkout.component';
import { PaymentComponent } from './Customers/payment/payment.component';

import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AllcategoryComponent } from './Admin/allcategory/allcategory.component';


const routes: Routes = [
  {path:"userhomepage", component:UserHomePageComponent},
  {path:"myprofilepage", component:MyprofileComponent},
  {path:"mycartpage",component:CartComponent},
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"preview",component:BookpreviewComponent},
  {path:"addbook",component:AddbookComponent},
  {path:"searchbookpage",component:SearchBookComponent},
  {path:"allbook",component:AllbookComponent},
  {path:"checkoutpage",component:CheckoutComponent},
  {path:"paymentpage",component:PaymentComponent},
  {path:"addcategory",component:AddcategoryComponent},
  {path:"allcategory",component:AllcategoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
