import { Component, OnInit } from '@angular/core';
import { Dragon } from '../../Models/dragon.model';
import { DragonService } from '../../services/dragon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-dragons',
  templateUrl: './all-dragons.page.html',
  styleUrls: ['./all-dragons.page.scss'],
})
export class AllDragonsPage implements OnInit {
  
  dragons: Dragon[];
  dragon: Dragon;
  observableDragons: Observable<any>;

  constructor(private dragonService: DragonService) { }

  ngOnInit() {
    /*this.dragonService.getDragons().subscribe(result => {
      this.dragons = result;
    });

    setTimeout(() => {
      this.observableDragons = this.dragonService.getDragons();
    }, 2000);*/
    this.observableDragons = this.dragonService.getDragons();
    console.log(this.observableDragons);
  }
  getOneDragon(id: string) {
    console.log("DRAGON : " + id);
    this.dragonService.getOneDragon(id).subscribe(result => {
      this.dragon = result;
    });
  }

}
