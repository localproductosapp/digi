import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsaccountPage } from './detailsaccount.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsaccountPageRoutingModule {}
