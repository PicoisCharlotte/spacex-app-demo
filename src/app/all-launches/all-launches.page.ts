import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-launches',
  templateUrl: './all-launches.page.html',
  styleUrls: ['./all-launches.page.scss'],
})
export class AllLaunchesPage implements OnInit {
  typeLaunch: string = "launch";

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    const urlPath = this.getLaunchUrlPath();
  }

  private getLaunchUrlPath(): string {
    return window.location.pathname.split("/").pop();
  }

  /*selectLaunch() {
    let val = this.typeLaunch;
    console.log(val);
    if(val == "launchpads"){
      this.navCtrl.navigateForward('/launchpad');
    }else{
      this.navCtrl.navigateForward('/launch');
    }
  }*/
}
