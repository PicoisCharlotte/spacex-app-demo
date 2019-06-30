import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dragon } from '../Models/dragon.model';
import { DragonService } from '../services/dragon.service';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.page.html',
  styleUrls: ['./dragon.page.scss'],
})
export class DragonPage implements OnInit {
  
  dragons: Dragon[];
  dragon: Dragon;
  observableDragons: Observable<Dragon[]>;

  constructor(private dragonService: DragonService) { }

  private getDragonId(): string {
    return window.location.pathname.split("/").pop();
  }

  ngOnInit() {
    const dragonId = this.getDragonId();

    this.dragonService.getOneDragon(dragonId).subscribe(result => {
      this.dragon = result;
    })

    setTimeout(() => {
      this.observableDragons = this.dragonService.getDragons();
    }, 2000);
  }
}
