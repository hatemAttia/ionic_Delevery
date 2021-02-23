import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage
  },
  {
    path: 'profil-detail',
    loadChildren: () => import('./profil-detail/profil-detail.module').then( m => m.ProfilDetailPageModule)
  },
  {
    path: 'adresses',
    loadChildren: () => import('./adresses/adresses.module').then( m => m.AdressesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
