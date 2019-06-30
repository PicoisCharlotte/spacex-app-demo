import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Rocket } from '../Models/rocket.model';

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getRockets(): Observable<Rocket[]> {
    const requestEndpoint = this.apiBaseUrl + 'rockets';
    return this.http.get<Rocket[]>(requestEndpoint).pipe(
      // finalize(() => this.loader.stop()),
      map(rockets => {
        console.log(rockets);
        return rockets;
      })
    );
  }

  getOneRocket(string): Observable<Rocket> {
    const requestEndpoint = this.apiBaseUrl + 'rockets/' + string;
    return this.http.get<Rocket>(requestEndpoint).pipe(
      map(rocket => {
        console.log(rocket);
        return rocket;
      })
    );
  }
}
