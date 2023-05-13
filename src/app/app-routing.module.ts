import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Customers/cart/cart.component';
import { MyprofileComponent } from './Customers/myprofile/myprofile.component';
import { UserHomePageComponent } from './Customers/user-home-page/user-home-page.component';

const routes: Routes = [
  {path:"", component:UserHomePageComponent},
  {path:"myprofilepage", component:MyprofileComponent},
  {path:"mycartpage",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
