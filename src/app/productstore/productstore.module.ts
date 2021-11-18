import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductstorePageRoutingModule } from './productstore-routing.module';

import { ProductstorePage } from './productstore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductstorePageRoutingModule
  ],
  declarations: [ProductstorePage]
})
export class ProductstorePageModule {}
