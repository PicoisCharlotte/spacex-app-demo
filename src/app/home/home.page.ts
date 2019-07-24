import { Component } from '@angular/core';
import { SkeletonComponent } from '../components/skeleton/skeleton.component';
import { OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable, timer } from 'rxjs';
import { NextLaunch } from '../Models/nextLaunch.model';
import { NextLaunchService } from '../services/nextLaunch.service';
import { SettingsService } from '../Models/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  chrono: string;
  nextlaunch: NextLaunch;
  observableNextLaunch: Observable<NextLaunch>;

  selectedTheme: String;

  constructor(private nextLaunchService: NextLaunchService, public navCtrl: NavController, private settings: SettingsService/*, private mission: Mission*/) { 

    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

  }

  async ngOnInit() {
    this.nextLaunchService.getNextLaunch().subscribe(result => {
      this.nextlaunch = result;
      this.chrono = this.convertUnixTimeToString(result.launch_date_unix);
    })


    setTimeout(() => {
      this.observableNextLaunch = this.nextLaunchService.getNextLaunch();
    }, 2000);
  }

  convertUnixTimeToString(time_unix: number): string {
    var a = new Date(time_unix * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;

    return time;
  }
}
