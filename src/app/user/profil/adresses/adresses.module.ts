import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdressesPageRoutingModule } from './adresses-routing.module';

import { AdressesPage } from './adresses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdressesPageRoutingModule
  ],
  declarations: [AdressesPage]
})
export class AdressesPageModule {}
