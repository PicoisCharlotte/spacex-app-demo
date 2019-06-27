import { UpComingService } from './../services/upcoming.service';
import { UpComing } from './../Models/upcoming.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {
  upcomings: UpComing[];
  observableUpComing: Observable<UpComing[]>;

  constructor(private upcomingService: UpComingService) { }

  ngOnInit() {
    this.upcomingService.getUpComing().subscribe(result => {
      this.upcomings = result;
    });

    setTimeout(() => {
      this.observableUpComing = this.upcomingService.getUpComing();
    }, 2000);
  }

  buttonClick(upComingId: string) {
    console.log(upComingId);
  }

  filterUpComing(event) {
    let val = event.target.value;
    this.upcomingService.getUpComing().subscribe(result => {
      this.upcomings = result;
  
      console.log(this.upcomings.length);   
  
      if (val && val.trim() != '') {
        this.upcomings = this.upcomings.filter((item) => {
          return (item.mission_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        console.log(this.upcomings.length); 
      }
    });
  }
}
