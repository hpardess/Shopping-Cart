import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: '/home',
				pathMatch: 'full',
			},
			{
				path: 'home',
				component: HomeComponent,
			},
			{
				path: 'shopping-cart',
				component: ShoppingCartComponent,
			},
			{
				path: 'checkout',
				component: CheckoutComponent,
			},
			{
				path: 'shop',
				loadChildren: () =>
				import('./shop/shop.module').then((m) => m.ShopModule),
			},
			{
				path: 'about-us',
				loadChildren: () =>
				import('./about-us/about-us.module').then((m) => m.AboutUsModule),
			},
			{
				path: 'contact-us',
				loadChildren: () =>
				import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
