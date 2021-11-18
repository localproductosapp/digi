import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCategoriasPageRoutingModule } from './home-categorias-routing.module';

import { HomeCategoriasPage } from './home-categorias.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedDirectivesModule,
    HomeCategoriasPageRoutingModule
  ],
  declarations: [HomeCategoriasPage]
})
export class HomeCategoriasPageModule {}
