import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDetailPageRoutingModule } from './home-detail-routing.module';

import { HomeDetailPage } from './home-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDetailPageRoutingModule
  ],
  declarations: [HomeDetailPage]
})
export class HomeDetailPageModule {}
