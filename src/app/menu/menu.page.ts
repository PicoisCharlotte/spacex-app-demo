import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath: string;

  pages = [
    {
      title: 'Home',
      url: '/menu/home',
      icon: '/assets/icon/dashboard2.png'
    },
    {
      title: 'Missions',
      url: '/menu/missions',
      icon : '/assets/icon/radar.png'
    },
    {
      title: 'Payloads',
      url: '/menu/payloads',
      icon: '/assets/icon/payload.png'
    },
    {
      title: 'Rockets',
      url: '/menu/first',
      icon: '/assets/icon/rocket.png'
    },
    {
      title: 'Second',
      url: '/menu/second',
      icon: 'home'
    },
    {
      title: 'Départs',
      url: '/menu/launches',
      icon: '/assets/icon/cal.png'
    },
    {
      title: 'Core',
      url: '/menu/cores',
      icon: '/assets/icon/core.png'
    },
    {
      title: 'Dragon',
      url: '/menu/dragons',
      icon: '/assets/icon/core.png'
    }
  ];
  constructor(
    private router: Router,
    public progress: NgProgress
  ) {
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
