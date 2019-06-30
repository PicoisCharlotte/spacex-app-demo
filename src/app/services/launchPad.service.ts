import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LaunchPad } from '../Models/launchpad.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchPadService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getLaunches(): Observable<LaunchPad[]> {
    const requestEndpoint = this.apiBaseUrl + 'launchpads';
    return this.http.get<LaunchPad[]>(requestEndpoint).pipe(
      map(launchpads => {
        console.log(launchpads);
        return launchpads;
      })
    );
  }

  getOneLaunchPad(string): Observable<LaunchPad> {
    const requestEndpoint = this.apiBaseUrl + 'launchpads/' + string;
    return this.http.get<LaunchPad>(requestEndpoint).pipe(
      map(launchpad => {
        console.log(launchpad);
        return launchpad;
      })
    );
  }

  convertDate(dateUTC): String {
    var myDate: String = new Date(dateUTC).toISOString();
    return myDate;
  }
}
