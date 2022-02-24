import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPremiunPageRoutingModule } from './detail-premiun-routing.module';

import { DetailPremiunPage } from './detail-premiun.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPremiunPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [DetailPremiunPage]
})
export class DetailPremiunPageModule {}
