import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateOrderPage } from './validate-order.page';

const routes: Routes = [
  {
    path: '',
    component: ValidateOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateOrderPageRoutingModule {}
