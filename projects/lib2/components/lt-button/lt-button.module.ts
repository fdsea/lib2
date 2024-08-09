import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LtButtonComponent} from "./lt-button.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LtButtonComponent
  ],
  exports: [
    LtButtonComponent
  ]
})
export class LtButtonModule {}