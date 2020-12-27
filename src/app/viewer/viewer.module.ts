import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HeaderModule } from "./header/header.module";
import { NavigationComponent } from "./nav/nav.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductsModule } from "./products/products.module";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations: [
      FooterComponent,
      NavigationComponent,
      PageNotFoundComponent,
      SearchComponent
    ],
    imports: [
      CommonModule,
      HeaderModule,
      ProductsModule,
      FormsModule,
      RouterModule
    ],
    exports: [FooterComponent, HeaderComponent, NavigationComponent]
  })
  export class ViewerModule {}