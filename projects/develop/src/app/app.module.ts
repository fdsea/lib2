import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LtButtonModule, LtPinModule} from "@lbaz/lib2";
import {UxlCardModule} from "@lbaz/ui";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LtButtonModule,
    LtPinModule,
    UxlCardModule
  ],
  declarations: [
    AppComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
