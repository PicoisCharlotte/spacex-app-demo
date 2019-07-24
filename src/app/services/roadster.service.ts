import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Roadster} from '../Models/roadster.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoadsterService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/roadster';
  }

  getRoadsterInfo(): Observable<Roadster> {
    return this.http.get<Roadster>(this.apiBaseUrl).pipe(
        map(roadster => {
          return roadster;
        })
    );
  }
}
