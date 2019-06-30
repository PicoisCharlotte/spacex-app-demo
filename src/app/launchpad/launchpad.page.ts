import { Observable } from 'rxjs';
import { LaunchPad } from './../Models/launchpad.model';
import { LaunchPadService } from './../services/launchPad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.page.html',
  styleUrls: ['./launchpad.page.scss'],
})
export class LaunchpadPage implements OnInit {
  searchTerm: string;
  launchPads: LaunchPad[];
  oneLaunchPad: LaunchPad;
  observableLaunchPads: Observable<LaunchPad[]>;

  textInput: string;

  constructor(private launchPadService: LaunchPadService) { }

  ngOnInit() {
    this.launchPadService.getLaunches().subscribe(result => {
      this.launchPads = result;
    });

    const launchPadId = this.getLaunchPadId();
    console.log(launchPadId);

    setTimeout(() => {
      this.observableLaunchPads = this.launchPadService.getLaunches();
    }, 2000);
  }

  private getLaunchPadId(): string {
    return window.location.pathname.split("/").pop();
  }

  buttonClick(launchPadId: string) {
    this.launchPadService.getOneLaunchPad(launchPadId).subscribe(result => {
      this.oneLaunchPad = result;
    });
  }

  valueChanged() {
    let val = this.searchTerm;
    this.launchPadService.getLaunches().subscribe(result => {
      this.launchPads = result;
  
      console.log(this.launchPads.length);   
  
      if (val && val.trim() != '') {
        this.launchPads = this.launchPads.filter((item) => {
          return (item.site_name_long.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        console.log(this.launchPads.length); 
      }
    });
  }
}
