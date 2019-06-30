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
        path: 'rockets',
        loadChildren: '../all-rockets/all-rockets.module#AllRocketsPageModule'
      },
      {
        path: 'launches',
        loadChildren: '../all-launches/all-launches.module#AllLaunchesPageModule'
      },
      {
        path: 'launches/details/:launchId',
        loadChildren: '../all-launches/launch/details/details.module#DetailsPageModule'
      },
      {
        path: 'launchpads', 
        loadChildren: '../launchpad/launchpad.module#LaunchpadPageModule' 
      },
      {
        path: 'launchpads/details/:siteId', 
        loadChildren: '../launchpad/details/details.module#DetailsPageModule'
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
      },
      {
        path: 'cores',
        loadChildren: '../core/core.module#CorePageModule'
      },
      {
        path: 'dragons',
        loadChildren: '../dragon/all-dragons/all-dragons.module#AllDragonsPageModule'
      },
      {
        path: 'dragons/dragon/:dragonId',
        loadChildren: '../dragon/dragon.module#DragonPageModule'
      },
      {
        path: 'capsules',
        loadChildren: '../capsules/capsules.module#CapsulesPageModule'
      },
      {
        path: 'capsules/capsule/:capsuleSerial',
        loadChildren: '../capsules/details/details.module#DetailsPageModule'
      },
      {
        path: 'ships',
        loadChildren: '../ships/ships.module#ShipsPageModule'
      },
      {
        path: 'ships/ship/:shipId',
        loadChildren: '../ships/details/details.module#DetailsPageModule'
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
