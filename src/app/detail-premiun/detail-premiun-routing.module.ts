import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPremiunPage } from './detail-premiun.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPremiunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPremiunPageRoutingModule {}
