import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllLaunchesPage } from './all-launches.page';

const routes: Routes = [
  {
    path: 'all',
    component: AllLaunchesPage,
    children: [
      {
        path: 'launch',
        loadChildren: './launch/launch.module#LaunchPageModule'
      },
      {
        path: 'upcoming', 
        loadChildren: './upcoming/upcoming.module#UpcomingPageModule'
      },
      { 
        path: 'past', 
        loadChildren: './past/past.module#PastPageModule' 
      }
    ]
  },
  {
    path: '',
    redirectTo: 'all/launch',
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
  declarations: [AllLaunchesPage]
})
export class AllLaunchesPageModule {}
