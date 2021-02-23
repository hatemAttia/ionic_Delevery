import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdressesPage } from './adresses.page';

const routes: Routes = [
  {
    path: '',
    component: AdressesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdressesPageRoutingModule {}
