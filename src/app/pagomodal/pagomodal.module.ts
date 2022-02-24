import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagomodalPageRoutingModule } from './pagomodal-routing.module';

import { PagomodalPage } from './pagomodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagomodalPageRoutingModule
  ],
  declarations: [PagomodalPage]
})
export class PagomodalPageModule {}
