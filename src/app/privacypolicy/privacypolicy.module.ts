import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacypolicyPageRoutingModule } from './privacypolicy-routing.module';

import { PrivacypolicyPage } from './privacypolicy.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacypolicyPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [PrivacypolicyPage]
})
export class PrivacypolicyPageModule {}
