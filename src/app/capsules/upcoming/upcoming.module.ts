import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpcomingPage } from './upcoming.page';
import { ComponentsModule } from 'src/app/modules/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: UpcomingPage
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
  declarations: [UpcomingPage]
})
export class UpcomingPageModule {}
