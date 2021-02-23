import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidateOrderPageRoutingModule } from './validate-order-routing.module';

import { ValidateOrderPage } from './validate-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidateOrderPageRoutingModule
  ],
  declarations: [ValidateOrderPage]
})
export class ValidateOrderPageModule {}
