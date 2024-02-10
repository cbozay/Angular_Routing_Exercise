import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsModule, HomeModule, AboutModule],
})
export class ComponentsModule {}
