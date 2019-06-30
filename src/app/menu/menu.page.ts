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
      title: 'Rockets',
      url: '/menu/rockets',
      icon: '/assets/icon/menu/rocket.png'
    },
      {
      title: 'Départs',
      url: '/menu/launches',
      icon: '/assets/icon/menu/cal.png'
    },
    {
      title: 'Core',
      url: '/menu/cores',
      icon: '/assets/icon/menu/core.png'
      // children: [
      //     {
      //       title: 'All cores',
      //       url: '/menu/cores',
      //       icon: '/assets/icon/menu/coreTopMenu.png'
      //     },
      //     {
      //       title: 'Upcoming',
      //       url: '/menu/cores/upcoming',
      //       icon: '/assets/icon/menu/upcoming.png'
      //     },
      //     {
      //       title: 'Past',
      //       url: '/menu/cores/past',
      //       icon: 'rewind'
      //     }
      // ]
    },
    {
      title: 'Landing Pad',
      url: '/menu/landingPads',
      icon: '/assets/icon/menu/landing-pads.svg'
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
