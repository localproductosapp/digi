import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnpolicyPage } from './returnpolicy.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnpolicyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnpolicyPageRoutingModule {}
