import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Dragon } from '../Models/dragon.model';


@Injectable({
  providedIn: 'root'
})
export class DragonService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getDragons(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}dragons`).pipe(
        map(dragons => {
          return dragons;
        })
    );
  }

  getOneDragon(id): Observable<Dragon> {
    const requestEndPoint = this.apiBaseUrl + 'dragons/' + id;
    return this.http.get<Dragon>(requestEndPoint).pipe(
        map(dragon => {
          console.log("getOneDragon : " + dragon);
          return dragon;
        })
    );
  }
}
