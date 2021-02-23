import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilDetailPage } from './profil-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilDetailPageRoutingModule {}
