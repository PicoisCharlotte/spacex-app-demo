import { Component, OnInit } from '@angular/core';
import {CoreUpcoming} from '../../Models/core-upcoming.model';
import {Observable} from 'rxjs';
import {CoreService} from '../../services/core.service';

@Component({
    selector: 'app-upcoming-cores',
    templateUrl: './upcoming-cores.page.html',
    styleUrls: ['./upcoming-cores.page.scss'],
})
export class UpcomingCoresPage implements OnInit {
    upcomingCores: CoreUpcoming[];
    observableUpcomingCores: Observable<CoreUpcoming[]>;

    constructor(private coreService: CoreService) { }

    ngOnInit() {
        this.coreService.getUpcomingCores().subscribe(result => {
            this.upcomingCores = result;
        });

        setTimeout(() => {
            this.observableUpcomingCores = this.coreService.getUpcomingCores();
        }, 2000);
    }
    redirectToSearchLaunchByIdPage(flightNumber: number) {
        location.href = 'http://localhost:8100/menu/launches/details/' + flightNumber;
    }
}
