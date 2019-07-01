import { Component, OnInit } from '@angular/core';
import { CapsulesService } from 'src/app/services/capsules.service';
import { Observable } from 'rxjs';
import { Capsule } from 'src/app/Models/capsule.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-capsules',
  templateUrl: './all-capsules.page.html',
  styleUrls: ['./all-capsules.page.scss'],
})
export class AllCapsulesPage implements OnInit {

  typeLaunch: string = "capsules";

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    const urlPath = this.getLaunchUrlPath();
  }

  private getLaunchUrlPath(): string {
    return window.location.pathname.split("/").pop();
  }

}
