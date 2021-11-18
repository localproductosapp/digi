import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosGuardadoPage } from './videos-guardado.page';

const routes: Routes = [
  {
    path: '',
    component: VideosGuardadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosGuardadoPageRoutingModule {}
