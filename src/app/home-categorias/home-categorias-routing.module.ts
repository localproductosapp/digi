import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCategoriasPage } from './home-categorias.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCategoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCategoriasPageRoutingModule {}
