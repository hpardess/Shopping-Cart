import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ViewProductComponent } from './view-product/view-product.component';



@NgModule({
  declarations: [
    ShopComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
