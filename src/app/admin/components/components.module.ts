import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    UsersModule,
    OrdersModule,
    DashboardModule,
  ],
})
export class ComponentsModule {}
