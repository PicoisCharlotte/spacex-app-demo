import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PayloadPage } from './payload.page';
import {ComponentsModule} from '../modules/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PayloadPage
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
  declarations: [PayloadPage]
})
export class PayloadPageModule {}
