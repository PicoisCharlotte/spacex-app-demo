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
        loadChildren: '../all-rockets/rocket/rocket.module#RocketPageModule'
      },
      { 
        path: 'tab2', 
        loadChildren: '../all-rockets/tab2/tab2.module#Tab2PageModule' 
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
