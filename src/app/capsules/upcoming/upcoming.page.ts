import { Component, OnInit } from '@angular/core';
import { Capsule } from 'src/app/Models/capsule.model';
import { Observable } from 'rxjs';
import { CapsulesService } from 'src/app/services/capsules.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {

  capsules: Capsule[];
  capsule: Capsule;
  observableCapsule: Observable<any>;
  constructor(private capsuleService: CapsulesService) { }

  ngOnInit() {
    this.capsuleService.getCapsulesUpcoming().subscribe(result => {
      this.capsules = result;
    });

    setTimeout(() => {
      this.observableCapsule = this.capsuleService.getCapsulesUpcoming();
    }, 2000);
  }
  
  getOneCapsule(capsuleSerial: string) {
    this.capsuleService.getOneCapsule(capsuleSerial).subscribe(result => {
      this.capsule = result;
    });
  }

}
