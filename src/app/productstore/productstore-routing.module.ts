import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductstorePage } from './productstore.page';

const routes: Routes = [
  {
    path: '',
    component: ProductstorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductstorePageRoutingModule {}
