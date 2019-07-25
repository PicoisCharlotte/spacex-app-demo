import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllDragonsPage } from './all-dragons.page';
import {ComponentsModule} from '../../modules/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AllDragonsPage
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
  declarations: [AllDragonsPage]
})
export class AllDragonsPageModule {}
