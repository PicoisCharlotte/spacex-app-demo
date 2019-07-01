import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllCapsulesPage } from './all-capsules.page';
import { ComponentsModule } from 'src/app/modules/components/components.module';

const routes: Routes = [
  {
    path: 'all',
    component: AllCapsulesPage,
    children: [
      {
        path: 'capsules',
        loadChildren: '../capsules.module#CapsulesPageModule'
      },
      {
        path: 'upcoming', 
        loadChildren: '../upcoming/upcoming.module#UpcomingPageModule'
      },
      { 
        path: 'past', 
        loadChildren: '../past/past.module#PastPageModule' 
      }
    ]
  },
  {
    path: '',
    redirectTo: 'all/capsules',
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
  declarations: [AllCapsulesPage]
})
export class AllCapsulesPageModule {}
