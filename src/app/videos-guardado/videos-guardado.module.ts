import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosGuardadoPageRoutingModule } from './videos-guardado-routing.module';

import { VideosGuardadoPage } from './videos-guardado.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideosGuardadoPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [VideosGuardadoPage]
})
export class VideosGuardadoPageModule {}
