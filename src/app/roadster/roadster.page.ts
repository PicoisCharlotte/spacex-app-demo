import {Component, OnInit, ViewChild} from '@angular/core';
import {RoadsterService} from '../services/roadster.service';
import {Roadster} from '../Models/roadster.model';
import {IonSlides} from '@ionic/angular';

@Component({
    selector: 'app-roadster',
    templateUrl: './roadster.page.html',
    styleUrls: ['./roadster.page.scss'],
})
export class RoadsterPage implements OnInit {

    constructor(private roadsterService: RoadsterService) { }
    @ViewChild('slider') slides: IonSlides;
    roadster: Roadster;
    roadsterImage: any = [];
    roadsterWiki: string;
    slideOpts = {
        zoom: false
    };

    ngOnInit() {
      this.roadsterService.getRoadsterInfo().subscribe(result => {
        this.roadster = result;
        this.roadsterWiki = result.wikipedia;
        this.roadsterImage = result.flickr_images;
      });
    }

    slidesDidLoad() {
        this.slides.startAutoplay();
    }
}
