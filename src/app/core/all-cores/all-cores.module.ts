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
          path: 'cores',
          loadChildren: '../core.module#CorePageModule'
        },
        {
          path: 'core-upcoming',
          loadChildren: '../upcoming-cores/upcoming-cores.module#UpcomingCoresPageModule'
        },
        {
          path: 'core-past',
          loadChildren: '../past-cores/past-cores.module#PastCoresPageModule'
        }
    ]
  },
    {
        path: '',
        redirectTo: 'all/cores',
        pathMatch: 'full'
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
