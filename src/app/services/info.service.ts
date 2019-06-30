import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiInfo } from '../Models/apiInfo.model';
import { CompanyInfo } from '../Models/companyInfo.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private readonly apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
  }

  getCompanyInfo(): Observable<CompanyInfo> {
    const requestEndpoint = this.apiBaseUrl + 'info';
    return this.http.get<CompanyInfo>(requestEndpoint).pipe(
      map(companyInfo => {
        return companyInfo;
      })
    );
  }

  getApiInfo(): Observable<ApiInfo> {
    const requestEndpoint = this.apiBaseUrl;
    return this.http.get<ApiInfo>(requestEndpoint).pipe(
      map(apiInfo => {
        return apiInfo;
      })
    );
  }
}
