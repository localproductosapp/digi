import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { ModalPageModule } from '../modal/modal.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedDirectivesModule,
    ModalPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
