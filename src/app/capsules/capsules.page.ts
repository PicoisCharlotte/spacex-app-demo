import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Capsule } from '../Models/capsule.model';
import { CapsulesService } from '../services/capsules.service';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.page.html',
  styleUrls: ['./capsules.page.scss'],
})
export class CapsulesPage implements OnInit {

  capsules: Capsule[];
  capsule: Capsule;
  observableCapsule: Observable<any>;
  constructor(private capsuleService: CapsulesService) { }

  ngOnInit() {
    this.capsuleService.getCapsules().subscribe(result => {
      this.capsules = result;
    });

    setTimeout(() => {
      this.observableCapsule = this.capsuleService.getCapsules();
    }, 2000);
  }
  
  getOneCapsule(capsuleSerial: string) {
    this.capsuleService.getOneCapsule(capsuleSerial).subscribe(result => {
      this.capsule = result;
    });
  }

}
