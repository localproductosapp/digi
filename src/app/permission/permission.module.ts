import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermissionPageRoutingModule } from './permission-routing.module';

import { PermissionPage } from './permission.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermissionPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [PermissionPage]
})
export class PermissionPageModule {}
