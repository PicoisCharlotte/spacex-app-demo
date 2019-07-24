import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {LandingPad} from '../Models/landing-pad.model';

@Injectable({
  providedIn: 'root'
})
export class LandingPadService {
  landingPads: Observable<LandingPad[]>;

  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
      this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getLandingPads(): Observable<LandingPad[]> {
    const requestEndPoint = this.apiBaseUrl + 'landpads';
    return this.http.get<LandingPad[]>(requestEndPoint).pipe(
          map(landingPads => {
              return landingPads;
          })
      ) ;
  }

  getOneLandingPad(id: string): Observable<LandingPad> {
      const requestEndPoint = this.apiBaseUrl + 'landpads/' + id;
      return this.http.get<LandingPad>(requestEndPoint).pipe(
          map(landingPad => {
              return landingPad;
          })
      );
  }
}
