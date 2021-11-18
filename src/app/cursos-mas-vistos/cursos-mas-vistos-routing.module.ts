import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosMasVistosPage } from './cursos-mas-vistos.page';

const routes: Routes = [
  {
    path: '',
    component: CursosMasVistosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosMasVistosPageRoutingModule {}
