import { PastService } from './../services/past.service';
import { Past } from './../Models/past.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past',
  templateUrl: './past.page.html',
  styleUrls: ['./past.page.scss'],
})
export class PastPage implements OnInit {
  pasts: Past[];
  observablePast: Observable<Past[]>;

  constructor(private pastService: PastService) { }

  ngOnInit() {
    this.pastService.getPasts().subscribe(result => {
      this.pasts = result;
    });

  setTimeout(() => {
      this.observablePast = this.pastService.getPasts();
    }, 2000);
  }

  buttonClick(pastId: string) {
    console.log(pastId);
  }

  filterPast(event) {
    let val = event.target.value;
    this.pastService.getPasts().subscribe(result => {
      this.pasts = result;
  
      console.log(this.pasts.length);   
  
      if (val && val.trim() != '') {
        this.pasts = this.pasts.filter((item) => {
          return (item.mission_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        console.log(this.pasts.length); 
      }
    });
  }
}
