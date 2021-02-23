import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilDetailPageRoutingModule } from './profil-detail-routing.module';

import { ProfilDetailPage } from './profil-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilDetailPageRoutingModule
  ],
  declarations: [ProfilDetailPage]
})
export class ProfilDetailPageModule {}
