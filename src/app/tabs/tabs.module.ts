import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { SharedComponentsModule } from '../components/shared-components.module';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,

    SharedComponentsModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
