import {Component, OnInit} from '@angular/core';
import {Mission} from '../../Models/mission.model';
import {Observable} from 'rxjs';
import {MissionService} from '../../services/mission.service';


@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    mission: Mission;
    missionWiki: string;
    missionTwitter: string;
    missionWebsite: string;
    missionPayloadIds: string[];
    observableMission: Observable<Mission[]>;

    constructor(private missionService: MissionService) { }

    private getMissionId(): string {
        return window.location.pathname.split('/').pop();
    }

    ngOnInit() {
        const missionId = this.getMissionId();
        console.log(missionId);


        this.missionService.getOneMission(missionId).subscribe(result => {
            this.mission = result;
            this.missionWiki = this.mission.wikipedia;
            this.missionTwitter = this.mission.twitter;
            this.missionWebsite = this.mission.website;
            this.missionPayloadIds = this.mission.payload_ids;
        });

        setTimeout(() => {
            this.observableMission = this.missionService.getMissions();
        }, 2000);
    }

    redirectToWiki() {
        window.open(this.missionWiki, '_blank');
    }

    redirectToTwitter() {
        window.open(this.missionTwitter, '_blank');
    }

    redirectToWebsite() {
        window.open(this.missionWebsite, '_blank');
    }

    redirectToSearchPayloadByIdPage(payloadId: string) {
        console.log("payload Id : " + payloadId);
        location.href =  'http://localhost:8100/menu/payloads/details/' + payloadId;
    }
}
