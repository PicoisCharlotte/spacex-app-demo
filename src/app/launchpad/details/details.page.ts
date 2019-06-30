import { LaunchPad } from './../../Models/launchpad.model';
import { Observable } from 'rxjs';
import { LaunchPadService } from './../../services/launchPad.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  launchpad: LaunchPad;
  observableLaunchPad: Observable<LaunchPad[]>;
  wikipedia: string;

  constructor(private launchPadService: LaunchPadService, private _location: Location) { }

  private getLaunchPadId(): string {
    return window.location.pathname.split("/").pop();
  }

  ngOnInit() {
    const siteId = this.getLaunchPadId();
    console.log(siteId);

    this.launchPadService.getOneLaunchPad(siteId).subscribe(result => {
      this.launchpad = result;
      this.wikipedia = result.wikipedia;
    })

    setTimeout(() => {
      this.observableLaunchPad = this.launchPadService.getLaunches();
    }, 2000);
  }

  previousPage(){
    this._location.back();
  }

  urlWikipedia() {
    window.open(this.wikipedia,'_blank');
  }
}
