import { Component, OnInit } from '@angular/core';
import { RocketService } from '../../services/rocket.service';
import { Rocket } from '../../Models/rocket.model';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.page.html',
  styleUrls: ['./rocket.page.scss'],
})
export class RocketPage implements OnInit {
  rockets: Rocket[];
  observableRockets: Observable<Rocket[]>;

  constructor(private rocketService: RocketService) { }

  ngOnInit() {
    this.rocketService.getRockets().subscribe(result => {
      this.rockets = result;
    });

    setTimeout(() => {
      this.observableRockets = this.rocketService.getRockets();
    },
      2000);
  }

  buttonClick(rocketId: string) {
    console.log(rocketId);
  }
}
