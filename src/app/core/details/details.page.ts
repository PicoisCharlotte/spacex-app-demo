import { Component, OnInit } from '@angular/core';
import {Core, Mission} from "../../Models/core.model";
import {Observable} from "rxjs";
import {CoreService} from "../../services/core.service";
import {MissionService} from "../../services/mission.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  core: Core;
  coreMissionIds: Mission[];
  observableCore: Observable<Core[]>;

  waterlanding: boolean;

  missions: Mission[];

  constructor(private coreService: CoreService) { }

  private getCoreSerial(): string {
    return window.location.pathname.split('/').pop();
  }

  ngOnInit() {
    const coreSerial = this.getCoreSerial();

      this.coreService.getOneCore(coreSerial).subscribe(result => {
      this.core = result;
      this.coreMissionIds = this.core.missions;

      if(this.core.water_landing == true) {
        this.waterlanding = true;
      }

    });

    setTimeout(() => {
      this.observableCore = this.coreService.getCores();
    });
  }
}
