import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Capsule } from '../Models/capsule.model';


@Injectable({
  providedIn: 'root'
})
export class CapsulesService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getCapsules(): Observable<Capsule[]> {
    const requestEndpoint = this.apiBaseUrl + 'capsules';
    return this.http.get<Capsule[]>(requestEndpoint).pipe(
      map(capsules => {
        return capsules;
      })
    );
  }

  getOneCapsule(capsuleSerial): Observable<Capsule> {
    const requestEndPoint = this.apiBaseUrl + 'capsules/' + capsuleSerial;
    return this.http.get<any>(requestEndPoint).pipe(
        map(capsule => {
          return capsule;
        })
    );
  }
}
