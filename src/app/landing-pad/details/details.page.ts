import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import leaflet from 'leaflet';
import {LandingPad} from '../../Models/landing-pad.model';
import {Observable} from 'rxjs';
import {LandingPadService} from '../../services/landing-pad.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    @ViewChild('map') mapContainer: ElementRef;

    map: any;
    landingPad: LandingPad;
    landingPadWiki: string;
    latitude: number;
    longitude: number;
    observableLandingPad: Observable<LandingPad[]>;

    constructor(private landingPadService: LandingPadService) {}

    private getLandingPadId(): string {
        return window.location.pathname.split('/').pop();
    }

    ngOnInit() {
        const landinPadId = this.getLandingPadId();

        this.landingPadService.getOneLandingPad(landinPadId).subscribe(result => {
            this.landingPad = result;
            this.landingPadWiki = this.landingPad.wikipedia;
            this.latitude = this.landingPad.location.latitude;
            this.longitude = this.landingPad.location.longitude;

            if (this.landingPad.location.name === 'Port Canaveral') {
                // Api forgot minus on longitude
                this.longitude *= -1;
            }
        });

        setTimeout(() => {
            this.observableLandingPad = this.landingPadService.getLandingPads();
        }, 2000);
    }

    ionViewDidEnter() {
        this.loadmap();
    }

    loadmap() {
        this.map = leaflet.map('map').fitWorld();
        leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: '<a href="http://openstreetmap.org"></a>',
            maxZoom: 100
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 100
        });
        this.map.setView([this.latitude, this.longitude], 4);
        const markerGroup = leaflet.featureGroup();
        const marker: any = leaflet.marker([this.latitude, this.longitude], 60);
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
    }

    redirectToWiki() {
        location.href = this.landingPadWiki;
    }

}
