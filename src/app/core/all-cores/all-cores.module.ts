import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllCoresPage } from './all-cores.page';

const routes: Routes = [
  {
    path: 'all',
    component: AllCoresPage,
    children: [
        {
          path: 'core',
          loadChildren: '../core.module#CorePageModule'
        },
        {
          path: 'upcoming',
          loadChildren: '../../upcoming/upcoming.module#UpcomingPageModule'
        },
        {
          path: 'past',
          loadChildren: '../../past/past.module#PastPageModule'
        }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AllCoresPage]
})
export class AllCoresPageModule {}
