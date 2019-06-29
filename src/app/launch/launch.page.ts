import { LaunchService } from './../services/launch.service';
import { Observable } from 'rxjs';
import { Launch } from './../Models/launch.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { forEach } from '@angular/router/src/utils/collection';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.page.html',
  styleUrls: ['./launch.page.scss'],
})
export class LaunchPage implements OnInit {
  searchTerm: string;
  launches: Launch[];
  oneLaunch: Launch;
  observableLaunches: Observable<Launch[]>;

  textInput: string;

  constructor(private launchService: LaunchService, public navCtrl: NavController) { }

  ngOnInit() {
    this.launchService.getLaunches().subscribe(result => {
      this.launches = result;
    });

    const launchId = this.getLaunchId();
    console.log(launchId);

    setTimeout(() => {
      this.observableLaunches = this.launchService.getLaunches();
    }, 2000);
  }

  private getLaunchId(): string {
    return window.location.pathname.split("/").pop();
  }

  buttonClick(launchId: string) {
    //console.log(launchId);
    this.launchService.getOneLaunch(launchId).subscribe(result => {
      this.oneLaunch = result;
    });
  }

  valueChanged() {
    let val = this.searchTerm;
    this.launchService.getLaunches().subscribe(result => {
      this.launches = result;
  
      console.log(this.launches.length);   
  
      if (val && val.trim() != '') {
        this.launches = this.launches.filter((item) => {
          return (item.mission_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        console.log(this.launches.length); 
      }
    });
  }
}
