import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderLogoComponent } from './viewer/header/header-logo/header-logo.component';
import { WarenkorbComponent } from './viewer/header/warenkorb/warenkorb.component';
import { HeaderComponent } from './viewer/header/header.component';
import { HeaderTitleComponent } from './viewer/header/header-title/header-title.component';
import { NavigationComponent } from './viewer/nav/nav.component';
import { CartComponent } from './viewer/cart/cart.component';
import { CartItemComponent } from './viewer/cart/cart-item/cart-item.component';
import { AdressFormComponent } from './viewer/cart/cart-item/adress-form/adress-form.component';
import { ProductItemComponent } from './viewer/cart/cart-item/product-item/product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalculateFrancPipe } from './model/pipes/calculate-franc.pipe';
import { FooterComponent } from './viewer/footer/footer.component';
import { ProductsComponent } from './viewer/products/products.component';
import { SearchComponent } from './viewer/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLogoComponent,
    HeaderComponent,
    HeaderTitleComponent,
    HeaderLogoComponent,
    WarenkorbComponent,
    NavigationComponent,
    CartComponent,
    CartItemComponent,
    AdressFormComponent,
    ProductItemComponent,
    CalculateFrancPipe,
    CartComponent,
    FooterComponent,
    ProductsComponent,
    SearchComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
