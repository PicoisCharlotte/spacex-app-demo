import { Launch } from './../../Models/launch.model';
import { LaunchService } from './../../services/launch.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  launch: Launch;
  observableLaunch: Observable<Launch[]>;

  constructor(private launchService: LaunchService) { }

  private getLaunchId(): string {
    return window.location.pathname.split("/").pop();
  }

  ngOnInit() {
    //console.log(this.navParams.get("launchId"));
    const launchId = this.getLaunchId();
    console.log(launchId);

    this.launchService.getOneLaunch(launchId).subscribe(result => {
      this.launch = result;
    })

    setTimeout(() => {
      this.observableLaunch = this.launchService.getLaunches();
    }, 2000);
  }
}
