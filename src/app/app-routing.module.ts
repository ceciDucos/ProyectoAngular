import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { BodyUpComponent } from './body-up/body-up.component';
import { BodyDownComponent } from './body-down/body-down.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';

const routes: Routes = [
  { path: 'bar-nav', component: BarNavComponent },
  { path: 'body-up', component: BodyUpComponent },
  { path: 'body-down', component: BodyDownComponent },
  { path: 'body-down/:tipo', component: BodyDownComponent },
  { path: 'footer-bar', component: FooterBarComponent },
  { path: 'list-products', component: ListProductsComponent },
  { path: 'list-products/:op', component: ListProductsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
