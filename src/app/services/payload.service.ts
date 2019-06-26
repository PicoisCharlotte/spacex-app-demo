import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Payload } from '../Models/payload.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getPayloads(): Observable<Payload[]> {
    const requestEndPoint = this.apiBaseUrl + 'payloads';
    return this.http.get<Payload[]>(requestEndPoint).pipe(
        map(payloads => {
          return payloads;
        })
    );
  }

  getOnePayload(id: string): Observable<Payload> {
    const requestEndPoint = this.apiBaseUrl + 'payloads/' + id;
    return this.http.get<Payload>(requestEndPoint).pipe(
        map(payload => {
            return payload;
        })
    );
  }
 }
