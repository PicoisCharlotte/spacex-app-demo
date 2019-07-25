import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../Models/ship.model';
import { ShipsService } from '../services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.page.html',
  styleUrls: ['./ships.page.scss'],
})
export class ShipsPage implements OnInit {

  ships: Ship[];
  ship: Ship;
  observableShip: Observable<any>;
  constructor(private shipService: ShipsService) {
  }

  ngOnInit() {
    this.shipService.getShips().subscribe(result => {
      this.ships = result;
    });

    setTimeout(() => {
      this.observableShip = this.shipService.getShips();
    }, 2000);
  }
  
  getOneShip(shipId: string) {
    this.shipService.getOneShip(shipId).subscribe(result => {
      this.ship = result;
    });
  }

}
