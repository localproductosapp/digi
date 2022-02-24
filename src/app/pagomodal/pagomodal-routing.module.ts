import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagomodalPage } from './pagomodal.page';

const routes: Routes = [
  {
    path: '',
    component: PagomodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagomodalPageRoutingModule {}
