import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRestoPageRoutingModule } from './detail-resto-routing.module';

import { DetailRestoPage } from './detail-resto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRestoPageRoutingModule
  ],
  declarations: [DetailRestoPage]
})
export class DetailRestoPageModule {}
