import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';
import { BaseHttpService } from '../share/service/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class SiteService extends BaseHttpService {
  private $sites = new AsyncSubject<ISite[]>();
  constructor(http: HttpClient) {
    super(http);
    this.GetDataHttp<ISite[]>(
      'GET',
      'https://service.yumao.tech/pms/api/domain/true/true'
    ).subscribe(this.$sites);
  }

  public get Sites(): Observable<ISite[]> {
    return this.$sites.asObservable();
  }
}

export interface ISite {
  domainid: string;
  name: string;
  backurl: string;
  description: string;
  imageurl: string;
  status: boolean;
  issite: boolean;
}
