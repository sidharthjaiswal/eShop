import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './viewer/products/products.component';
import { SearchComponent } from './viewer/search/search.component';
import { PageNotFoundComponent } from './viewer/page-not-found/page-not-found.component';
const routes: Routes =
  [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'products'
    },
    {
      path: 'products',
      component: ProductsComponent
    },
    {
      path: 'warenkorb',
      loadChildren: './viewer/cart/cart.module#CartModule'
    },
    {
      path: 'search',
      component: SearchComponent
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
