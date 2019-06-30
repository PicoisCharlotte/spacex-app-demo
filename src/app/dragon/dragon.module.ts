import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DragonPage } from './dragon.page';
import {ComponentsModule} from '../modules/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: DragonPage
  },
  {
    path: 'dragon/:dragonId',
    loadChildren: '../dragon/dragon.module#DragonPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DragonPage]
})
export class DragonPageModule {}
