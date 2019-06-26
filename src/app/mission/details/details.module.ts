import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DetailsPage} from './details.page';
import {ComponentsModule} from '../../modules/components/components.module';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: DetailsPage
    }
];

@NgModule({
  declarations: [DetailsPage],
  imports: [
    CommonModule,
      FormsModule,
      IonicModule,
      ComponentsModule,
      RouterModule.forChild(routes)
  ]
})
export class DetailsModule { }
