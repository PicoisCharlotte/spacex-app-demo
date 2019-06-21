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
      icon: '/assets/icon/dashboard.png'
    },
    {
      title: 'Rockets',
      url: '/menu/first',
      icon:'/assets/icon/rocket.png'
    },
    {
      title: 'Départs',
      url: '/menu/launches',
      icon: '/assets/icon/cal.png'
    },
    {
      title: 'Missions',
      url: '/menu/mission',
      icon : '/assets/icon/radar.png'
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
