import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: AboutUsComponent,
		pathMatch:  'full'
	},
];

@NgModule({
	declarations: [
		AboutUsComponent
	],
	imports: [
		CommonModule
	]
})
export class AboutUsModule { }
