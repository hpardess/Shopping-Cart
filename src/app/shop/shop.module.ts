import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ShopComponent,
		pathMatch:  'full'
	},
];

@NgModule({
	declarations: [
		ShopComponent,
		ViewProductComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})
export class ShopModule { }
