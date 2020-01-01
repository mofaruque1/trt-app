import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewbagComponent } from './components/viewbag/viewbag.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { PaymentbikashComponent } from './components/paymentbikash/paymentbikash.component';
import { PaymentpaypalComponent } from './components/paymentpaypal/paymentpaypal.component';


const routes: Routes = [
  {path:'',component:LandingpageComponent},
  {path:'viewbag',component:ViewbagComponent},
  {path:'paymentbikash',component:PaymentbikashComponent},
  {path:'paymentpaypal',component:PaymentpaypalComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
