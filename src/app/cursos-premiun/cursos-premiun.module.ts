import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosPremiunPageRoutingModule } from './cursos-premiun-routing.module';

import { CursosPremiunPage } from './cursos-premiun.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosPremiunPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [CursosPremiunPage]
})
export class CursosPremiunPageModule {}
