import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'first',
        loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
      },
      {
        path: 'second/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'launches',
        loadChildren: '../all-launches/all-launches.module#AllLaunchesPageModule'
      },
      {
        path: 'launches/details/:launchId',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'missions',
        loadChildren: '../mission/mission.module#MissionPageModule'
      },
      {
        path: 'missions/details/:missionId',
        loadChildren: '../mission/details/details.module#DetailsModule'
      },
      {
        path: 'payloads',
        loadChildren: '../payload/payload.module#PayloadPageModule'
      },
      {
        path: 'payloads/details/:payloadId',
        loadChildren: '../payload/details/details.module#DetailsPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
