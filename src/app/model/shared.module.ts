  
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalculateFrancPipe } from "./pipes/calculate-franc.pipe";
import { ChangeBorderDirective } from "./directives/directives.service";

@NgModule({
  declarations: [CalculateFrancPipe, ChangeBorderDirective],
  imports: [CommonModule],
  exports: [CalculateFrancPipe, ChangeBorderDirective]
})
export class SharedModule {}