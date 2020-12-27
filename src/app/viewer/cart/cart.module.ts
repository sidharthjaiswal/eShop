import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CartComponent } from "./cart.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ProductItemComponent } from "./cart-item/product-item/product-item.component";
import { SharedModule } from "src/app/model/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./cart-item/product-detail/product-detail.component";
import { AdressFormComponent } from "./cart-item/adress-form/adress-form.component";

const routes: Routes = [
  {
    path: "",
    component: CartComponent
  },
  {
    path: "product-detail/:id",
    component: ProductDetailComponent
  }
];
@NgModule({
  declarations: [
    CartItemComponent,
    CartComponent,
    ProductItemComponent,
    AdressFormComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartModule {}