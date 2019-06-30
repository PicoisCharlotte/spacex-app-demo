import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShipsPage } from './ships.page';
import { ComponentsModule } from '../modules/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ShipsPage
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
  declarations: [ShipsPage]
})
export class ShipsPageModule {}
