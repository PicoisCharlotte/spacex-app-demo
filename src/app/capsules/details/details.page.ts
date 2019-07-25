import { Component, OnInit } from '@angular/core';
import { CapsulesService } from 'src/app/services/capsules.service';
import { Capsule } from 'src/app/Models/capsule.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  capsules: Capsule[];
  capsule: Capsule;
  observableCapsules: Observable<Capsule[]>;

  constructor(private capsuleService: CapsulesService) { }

  private getCapsuleSerial(): string {
    return window.location.pathname.split("/").pop();
  }

  ngOnInit() {
    const capsuleSerial = this.getCapsuleSerial();

    this.capsuleService.getOneCapsule(capsuleSerial).subscribe(result => {
      this.capsule = result;
    })

    setTimeout(() => {
      this.observableCapsules = this.capsuleService.getCapsules();
    }, 2000);
  }

  hasMissions(){
    if(this.capsule.missions.length != 0){
      return true;
    } else {
      return false;
    }
  }
}
