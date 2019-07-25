import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Ship } from '../Models/ship.model';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getShips(): Observable<Ship[]> {
    const requestEndpoint = this.apiBaseUrl + 'ships';
    return this.http.get<Ship[]>(requestEndpoint).pipe(
      map(ships => {
        return ships;
      })
    );
  }

  getOneShip(shipId): Observable<Ship> {
    const requestEndPoint = this.apiBaseUrl + 'ships/' + shipId;
    return this.http.get<any>(requestEndPoint).pipe(
        map(ship => {
          return ship;
        })
    );
  }
}
