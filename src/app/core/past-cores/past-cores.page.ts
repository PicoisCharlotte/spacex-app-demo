import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CoreService} from '../../services/core.service';
import {CorePast} from '../../Models/core-past.model';

@Component({
    selector: 'app-past-cores',
    templateUrl: './past-cores.page.html',
    styleUrls: ['./past-cores.page.scss'],
})
export class PastCoresPage implements OnInit {
    pastCores: CorePast[];
    observablePastCores: Observable<CorePast[]>;

    constructor(private coreService: CoreService) { }

    ngOnInit() {
        this.coreService.getPastCores().subscribe(result => {
            this.pastCores = result;
        });

        setTimeout(() => {
            this.observablePastCores = this.coreService.getPastCores();
        }, 2000);
    }

    redirectToSearchLaunchByIdPage(flightNumber: number) {
        location.href = 'http://localhost:8100/menu/launches/details/' + flightNumber;
    }

}
