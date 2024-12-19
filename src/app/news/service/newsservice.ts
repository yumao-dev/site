import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { concatMap, map, share } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/share/service/base-http.service';
import { ConfigService } from 'src/app/share/service/config.service';

@Injectable({ providedIn: 'root' })
export class NewsService extends BaseHttpService {
  constructor(http: HttpClient, private config: ConfigService) {
    super(http);
  }

  private get domain() {
    return 'https://service.yumao.tech/data';
  }

  GetAll(): Observable<Array<INews>> {
    return this.config.RemoteConfig.pipe(
      concatMap((c) => {
        return this.GetDataHttp<Array<INews>>(
          'GET',
          `${this.domain}/api/index/${c.appname}`
        );
      })
    );
  }

  GetCates(): Observable<ICates[]> {
    return this.config.RemoteConfig.pipe(
      concatMap((c) => {
        return this.GetDataHttp<ICates[]>(
          'GET',
          `${this.domain}/api/index/cates/${c.appname}`
        );
      }),
      map((a) => {
        return a.filter((b) => b.status == true);
      }),
      share()
    );
  }
  GetNews(id: number): Observable<INewsDetail> {
    return this.GetDataHttp<INewsDetail>(
      'GET',
      `${this.domain}/api/index/${id}`
    );
  }
}

export interface ICates {
  id: number;
  domainid: string;
  name: string;
  description: string;
  status: boolean;
}

export interface INews {
  // [ID],[Site] as domainid,[Cate],[Title],[IsHot],[linkurl],[Css],[PublishTime],[enabled]
  id: number;
  cate: number;
  title: string;
  ishot: boolean;
  linkurl: string;
  css: string;
  publishtime: string;
  status: boolean;
}
export interface INewsDetail extends INews {
  // [ID],[Site] as domainid,[Cate],[Title],[IsHot],[linkurl],[Css],[PublishTime],[enabled]
  content: string;
  createtime: string;
}
