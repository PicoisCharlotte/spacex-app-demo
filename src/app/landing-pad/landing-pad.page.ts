import {Component, OnInit} from '@angular/core';
import {LandingPad} from '../Models/landing-pad.model';
import {Observable} from 'rxjs';
import {LandingPadService} from '../services/landing-pad.service';

@Component({
  selector: 'app-landing-pad',
  templateUrl: './landing-pad.page.html',
  styleUrls: ['./landing-pad.page.scss'],
})
export class LandingPadPage implements OnInit {
  landingPads: LandingPad[];
  landingPad: LandingPad;
  observableLandingPads: Observable<LandingPad[]>;

  constructor(private landingPadService: LandingPadService) { }

  ngOnInit() {
    this.landingPadService.getLandingPads().subscribe(result => {
      this.landingPads = result;
    });

    setTimeout(() => {
      this.observableLandingPads = this.landingPadService.getLandingPads();
    }, 2000);
  }

  getOneLandingPad(id: string) {
    this.landingPadService.getOneLandingPad(id).subscribe(result => {
      this.landingPad = result;
    });
  }

}
