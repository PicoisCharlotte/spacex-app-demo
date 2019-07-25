import { Component, OnInit } from '@angular/core';
import { Capsule } from 'src/app/Models/capsule.model';
import { Observable } from 'rxjs';
import { CapsulesService } from 'src/app/services/capsules.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.page.html',
  styleUrls: ['./past.page.scss'],
})
export class PastPage implements OnInit {

  capsules: Capsule[];
  capsule: Capsule;
  observableCapsule: Observable<any>;
  constructor(private capsuleService: CapsulesService) { }

  ngOnInit() {
    this.capsuleService.getCapsulesPast().subscribe(result => {
      this.capsules = result;
    });

    setTimeout(() => {
      this.observableCapsule = this.capsuleService.getCapsulesPast();
    }, 2000);
  }
  
  getOneCapsule(capsuleSerial: string) {
    this.capsuleService.getOneCapsule(capsuleSerial).subscribe(result => {
      this.capsule = result;
    });
  }

}
