import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/Models/ship.model';
import { Observable } from 'rxjs';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  ship: Ship;
  shipUrl: string;
  shipImage: any;
  observableShips: Observable<Ship[]>;
  constructor(private shipService: ShipsService) { }
  private getShipId(): string {
    return window.location.pathname.split("/").pop();
  }
  ngOnInit() {
    const shipId = this.getShipId();

    this.shipService.getOneShip(shipId).subscribe(result => {
      this.shipUrl = result.url;
      this.ship = result;
      this.shipImage = result.image;
    })

    setTimeout(() => {
      this.observableShips = this.shipService.getShips();
    }, 2000);
  }

  
  urlShip() {
    window.open(this.shipUrl,'_blank');
  }
}


