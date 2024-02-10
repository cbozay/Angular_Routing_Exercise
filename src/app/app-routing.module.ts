import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'orders',
        loadChildren: () =>
          import('./admin/components/orders/orders.module').then(
            (module) => module.OrdersModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./admin/components/products/products.module').then(
            (module) => module.ProductsModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./admin/components/users/users.module').then(
            (module) => module.UsersModule
          ),
      },
    ],
  },
  { path: '', component: HomeComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('./ui/components/products/products.module').then(
        (module) => module.ProductsModule
      ),
  },
  {
    path: 'products/:pageNo',
    loadChildren: () =>
      import('./ui/components/products/products.module').then(
        (module) => module.ProductsModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./ui/components/about/about.module').then(
        (module) => module.AboutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
