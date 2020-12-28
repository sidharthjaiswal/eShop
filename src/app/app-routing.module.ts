import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './viewer/products/products.component';
import { SearchComponent } from './viewer/search/search.component';
import { PageNotFoundComponent } from './viewer/page-not-found/page-not-found.component';
const routes: Routes =
  [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'products' //first page in sight
    },
    {
      path: 'products',
      component: ProductsComponent
    },
    {
      path: 'warenkorb',
      loadChildren: () => import(`./viewer/cart/cart.module`).then(m => m.CartModule)
      
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
