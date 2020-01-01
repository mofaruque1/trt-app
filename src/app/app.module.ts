import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ViewbagComponent } from './components/viewbag/viewbag.component';
import { PaymentbikashComponent } from './components/paymentbikash/paymentbikash.component';
import { PaymentpaypalComponent } from './components/paymentpaypal/paymentpaypal.component';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ProductsComponent,
    LandingpageComponent,
    ViewbagComponent,
    PaymentbikashComponent,
    PaymentpaypalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
