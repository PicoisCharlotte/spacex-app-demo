import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllRocketsPage } from './all-rockets.page';
import { ComponentsModule } from '../modules/components/components.module';

const routes: Routes = [
  {
    path: 'all',
    component: AllRocketsPage,
    children: [
      {
        path: 'rocket',
        loadChildren: '../rocket/rocket.module#RocketPageModule'
      },
      {
        path: 'roadster',
        loadChildren: '../roadster/roadster.module#RoadsterPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'all/rocket',
    pathMatch: 'full'
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
  declarations: [AllRocketsPage]
})
export class AllRocketsPageModule {}
