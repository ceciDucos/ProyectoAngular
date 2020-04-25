import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { BodyUpComponent } from './body-up/body-up.component';
import { BodyDownComponent } from './body-down/body-down.component';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    BarNavComponent,
    FooterBarComponent,
    BodyUpComponent,
    BodyDownComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
