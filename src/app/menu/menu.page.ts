import { LaunchPad } from './../Models/launchpad.model';
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';
import { SettingsService } from '../Models/settings.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath: string;
  selectedTheme: String;

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: '/assets/icon/menu/dashboard2.png'
    },
    {
      title: 'Missions',
      url: '/menu/missions',
      icon : '/assets/icon/menu/radar.png'
    },
    {
      title: 'Payloads',
      url: '/menu/payloads',
      icon: '/assets/icon/menu/payload.png'
    },
    {
      title: 'Rockets / Roadster',
      url: '/menu/rockets',
      icon: '/assets/icon/menu/rocket.png'
    },
    {
      title: 'Launches',
      url: '/menu/launches',
      icon: '/assets/icon/menu/cal.png'
    },
    {
      title: 'Launch Pads',
      url: '/menu/launchpads',
      icon: '/assets/icon/menu/bell.png'
    },
    {
      title: 'Core',
      url: '/menu/cores',
      icon: '/assets/icon/core.png'
    },
    {
      title: 'Dragon',
      url: '/menu/dragons',
      icon: '/assets/icon/dragon.png'

    },
    {
      title: 'Capsule',
      url: '/menu/all-capsules',
      icon: '/assets/icon/dragon.png'

    },
    {
      title: 'Ship',
      url: '/menu/ships',
      icon: '/assets/icon/dragon.png'

    }
    /*{
      title: 'About',
      url: '/menu/info',
      icon: '/assets/icon/menu/question.svg'
    }*/
  ];
  constructor(
    private router: Router,
    public progress: NgProgress,
    private settings: SettingsService
  ) {
    
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {
    this.progress.start();

    setTimeout(() => {
      /** progress ends after 2 seconds */
      this.progress.done();
    }, 10000);
  }

}
