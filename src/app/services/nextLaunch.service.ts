import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NextLaunch } from '../Models/nextLaunch.model';

@Injectable({
  providedIn: 'root'
})
export class NextLaunchService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getNextLaunch(): Observable<NextLaunch> {
    const requestEndpoint = this.apiBaseUrl + 'launches/next';
    return this.http.get<NextLaunch>(requestEndpoint).pipe(
      map(nextLaunch => {
        return nextLaunch;
      })
    );
  }
}
