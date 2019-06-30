import { Launch } from './../../../Models/launch.model';
import { LaunchService } from './../../../services/launch.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  launch: Launch;
  observableLaunch: Observable<Launch[]>;
  article: string;
  wikipedia: string;
  video: string;

  constructor(private launchService: LaunchService, private _location: Location) { }

  private getLaunchId(): string {
    return window.location.pathname.split("/").pop();
  }

  ngOnInit() {
    //console.log(this.navParams.get("launchId"));
    const launchId = this.getLaunchId();
    console.log(launchId);

    this.launchService.getOneLaunch(launchId).subscribe(result => {
      this.launch = result;
      this.article = result.links.article_link;
      this.wikipedia = result.links.wikipedia;
      this.video = result.links.video_link;
    })

    setTimeout(() => {
      this.observableLaunch = this.launchService.getLaunches();
    }, 2000);
  }

  previousPage(){
    this._location.back();
  }

  urlArticle() {
    window.open(this.article,'_blank');
  }

  urlWikipedia() {
    window.open(this.wikipedia,'_blank');
  }

  urlVideo() {
    window.open(this.video,'_blank');
  }
}
