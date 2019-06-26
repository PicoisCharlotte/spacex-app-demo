import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Core} from '../Models/core.model';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getCores(): Observable<Core[]> {
    const requestEndPoint = this.apiBaseUrl + 'cores';
    return this.http.get<Core[]>(requestEndPoint).pipe(
        map(cores => {
          return cores;
        })
    );
  }

  getOneCore(coreSerial: string): Observable<Core> {
    const requestEndPoint = this.apiBaseUrl + 'cores/' + coreSerial;
    return this.http.get<Core>(requestEndPoint).pipe(
        map(core => {
          return core;
        })
    );
  }

  getUpcomingCores(): Observable<Core[]> {
    const requestEndPoint = this.apiBaseUrl + 'cores/upcoming';
    return this.http.get<Core[]>(requestEndPoint).pipe(
        map(upcomingCores => {
          return upcomingCores;
        })
    );
  }

  getPastCores(): Observable<Core[]> {
    const requestEndPoint = this.apiBaseUrl + 'cores/past';
    return this.http.get<Core[]>(requestEndPoint).pipe(
        map(pastCores => {
            return pastCores;
        })
      );
  }
}
