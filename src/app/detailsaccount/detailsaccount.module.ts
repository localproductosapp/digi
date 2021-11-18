import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsaccountPageRoutingModule } from './detailsaccount-routing.module';

import { DetailsaccountPage } from './detailsaccount.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsaccountPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [DetailsaccountPage]
})
export class DetailsaccountPageModule {}
