import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from 'src/app/components/skeleton/skeleton.component';
import { IonicModule } from '@ionic/angular';
import {PreviousComponent} from '../../components/previous/previous.component';

@NgModule({
  declarations: [SkeletonComponent, PreviousComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [SkeletonComponent, PreviousComponent]
})
export class ComponentsModule { }
