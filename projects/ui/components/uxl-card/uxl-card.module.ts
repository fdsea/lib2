import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {UxlCardComponent} from "./uxl-card.component";

//import {LtButtonModule} from '@lbaz/lib2/components'

@NgModule({
  imports: [
    CommonModule,
    //LtButtonModule
  ],
  declarations: [
    UxlCardComponent
  ],
  exports: [
    UxlCardComponent
  ]
})
export class UxlCardModule {}
