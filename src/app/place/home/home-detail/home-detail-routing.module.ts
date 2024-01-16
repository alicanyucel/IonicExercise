import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDetailPage } from './home-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDetailPageRoutingModule {}
