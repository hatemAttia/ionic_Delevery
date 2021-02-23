import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRestoPage } from './detail-resto.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRestoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRestoPageRoutingModule {}
