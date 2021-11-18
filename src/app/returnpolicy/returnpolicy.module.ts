import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnpolicyPageRoutingModule } from './returnpolicy-routing.module';

import { ReturnpolicyPage } from './returnpolicy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnpolicyPageRoutingModule
  ],
  declarations: [ReturnpolicyPage]
})
export class ReturnpolicyPageModule {}
