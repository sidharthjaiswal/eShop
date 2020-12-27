import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { HeaderLogoComponent } from "./header-logo/header-logo.component";
import { HeaderTitleComponent } from "./header-title/header-title.component";
import { WarenkorbComponent } from "./warenkorb/warenkorb.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { OrderService } from "src/app/model/services/order.service";

const moduleComponents = [
  HeaderComponent,
  HeaderLogoComponent,
  HeaderTitleComponent,
  WarenkorbComponent
];

@NgModule({
  declarations: moduleComponents,
  imports: [CommonModule, FontAwesomeModule],
  providers: [OrderService],
  exports: [HeaderComponent]
})
export class HeaderModule {}