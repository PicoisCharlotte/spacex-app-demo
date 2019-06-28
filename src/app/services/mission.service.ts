import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mission} from '../Models/mission.model';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MissionService {
    missions: Observable<Mission[]>;

    private readonly apiBaseUrl: string;

    constructor(private http: HttpClient) {
        this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
    }

    getMissions(): Observable<Mission[]> {
        const requestEndPoint = this.apiBaseUrl + 'missions';
        return this.http.get<Mission[]>(requestEndPoint).pipe(
            map(missions => {
                console.log(missions);
                return missions;
            })
        ) ;
    }

    getOneMission(id: string): Observable<Mission> {
        const requestEndPoint = this.apiBaseUrl + 'missions/' + id;
        return this.http.get<Mission>(requestEndPoint).pipe(
            map(mission => {
                console.log('mission : ' + mission);
                return mission;
            })
        );
    }

    getMissionByName(name: string): string{
        this.missions = this.getMissions();

        console.log('this.missions : ', this.missions);

        for(let mission in this.missions) {
            console.log(mission);
            if(mission == name) {
                console.log(mission);

                return mission;
            }
        }
       // const requestEndPoint = this.apiBaseUrl + 'missions/'
    }
    test() {
        console.log("test");
    }
}
