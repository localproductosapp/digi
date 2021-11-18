import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosMasVistosPageRoutingModule } from './cursos-mas-vistos-routing.module';

import { CursosMasVistosPage } from './cursos-mas-vistos.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosMasVistosPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [CursosMasVistosPage]
})
export class CursosMasVistosPageModule {}
