import { History } from './../Models/history.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getHistories(): Observable<History[]> {
    const requestEndpoint = this.apiBaseUrl + 'history';
    return this.http.get<History[]>(requestEndpoint).pipe(
      map(histories => {
        return histories;
      })
    );
  }

  getHistory(number): Observable<History> {
    const requestEndpoint = this.apiBaseUrl + 'history' + number;
    return this.http.get<History>(requestEndpoint).pipe(
      map(history => {
        return history;
      })
    );
  }
}
