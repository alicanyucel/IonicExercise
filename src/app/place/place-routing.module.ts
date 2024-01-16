import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacePage } from './place.page';

const routes: Routes = [
  {
    path: '',
    component: PlacePage,
    children: [{
      path: '',
      loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
      path: 'home',
      children: [
        {
          path: '',
          loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
        },
        {
          path: 'home-detail',

          loadChildren: () => import('./home/home-detail/home-detail.module').then(m => m.HomeDetailPageModule)
        }

      ]

    },
    {
      path: 'speakers',
      loadChildren: () => import('./speakers/speakers.module').then(m => m.SpeakersPageModule)
    },
    {
      path: 'map',
      loadChildren: () => import('./map/map.module').then(m => m.MapPageModule)
    }
    ]
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(m => m.MapPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacePageRoutingModule { }
