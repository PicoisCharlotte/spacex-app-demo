import { HistoryService } from './../services/history.service';
import { Observable } from 'rxjs';
import { History } from './../Models/history.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  histories: History[];
  history: History;
  searchTerm: string;
  date: string;

  observableHistory: Observable<History[]>;

  constructor(private historyService: HistoryService, private _location: Location) { }

  ngOnInit() {
    this.historyService.getHistories().subscribe(result => {
      this.histories = result;
      //this.date = this.convertUnixTimeToString(result.event_date_unix);
    });

    const launchId = this.getHistoryId();

    setTimeout(() => {
      this.observableHistory = this.historyService.getHistories();
    }, 2000);
  }

  previousPage(){
    this._location.back();
  }

  private getHistoryId(): string {
    return window.location.pathname.split("/").pop();
  }

  buttonClick(historyId: string){
    this.historyService.getHistory(historyId).subscribe(result => {
      this.history = result;
    });
  }

  valueChanged() {
    let val = this.searchTerm;
    this.historyService.getHistories().subscribe(result => {
      this.histories = result;
  
      console.log(this.histories.length);   
  
      if (val && val.trim() != '') {
        this.histories = this.histories.filter((item) => {
          return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        console.log(this.histories.length); 
      }
    });
  }

  convertUnixTimeToString(time_unix: number): string {
    var a = new Date(time_unix * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;

    return time;
  }
}
