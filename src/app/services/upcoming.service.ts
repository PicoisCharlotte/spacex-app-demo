import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UpComing } from '../Models/upcoming.model';

@Injectable({
  providedIn: 'root'
})
export class UpComingService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getUpComing(): Observable<UpComing[]> {
    const requestEndpoint = this.apiBaseUrl + 'launches/upcoming';
    return this.http.get<UpComing[]>(requestEndpoint).pipe(
      map(upcomings => {
        console.log(upcomings);
        return upcomings;
      })
    );
  }

  convertDate(dateUTC): String {
    var myDate: String = new Date(dateUTC).toISOString();
    return myDate;
  }
}
