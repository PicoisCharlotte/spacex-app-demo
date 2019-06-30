import { ApiInfo } from './../Models/apiInfo.model';
import { CompanyInfo } from './../Models/companyInfo.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  companyInfo: CompanyInfo;
  infoAPI: ApiInfo;

  compagnyFounder: string;
  website: string;
  flickr: string;
  twitter: string;

  observableCompany: Observable<CompanyInfo>;
  observableAPI: Observable<ApiInfo>;

  constructor(private infoService: InfoService, private _location: Location) { }

  ngOnInit() {
    this.infoService.getCompanyInfo().subscribe(result => {
      this.companyInfo = result;
      this.website = result.links.website;
      this.flickr = result.links.flickr;
      this.twitter = result.links.twitter;
    });

    this.infoService.getApiInfo().subscribe(result => {
      console.log(typeof result);
      console.log(result);
      this.infoAPI = result;
    });

    setTimeout(() => {
      this.observableCompany = this.infoService.getCompanyInfo();
      this.observableAPI = this.infoService.getApiInfo();
    }, 2000);
  }

  previousPage(){
    this._location.back();
  }

  urlWebsite() {
    window.open(this.website,'_blank');
  }

  urlTwitter() {
    window.open(this.twitter,'_blank');
  }

  urlFlickr() {
    window.open(this.flickr,'_blank');
  }
}
