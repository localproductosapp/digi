import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminoscondicionesPageRoutingModule } from './terminoscondiciones-routing.module';

import { TerminoscondicionesPage } from './terminoscondiciones.page';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminoscondicionesPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [TerminoscondicionesPage]
})
export class TerminoscondicionesPageModule {}
