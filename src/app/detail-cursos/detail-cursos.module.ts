import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCursosPageRoutingModule } from './detail-cursos-routing.module';

import { DetailCursosPage } from './detail-cursos.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCursosPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [DetailCursosPage]
})
export class DetailCursosPageModule {}
