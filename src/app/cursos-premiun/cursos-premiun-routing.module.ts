import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosPremiunPage } from './cursos-premiun.page';

const routes: Routes = [
  {
    path: '',
    component: CursosPremiunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosPremiunPageRoutingModule {}
