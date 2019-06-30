import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoadsterPage } from './roadster.page';
import {ComponentsModule} from '../modules/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: RoadsterPage
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
  declarations: [RoadsterPage]
})
export class RoadsterPageModule {}
