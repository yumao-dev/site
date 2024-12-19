import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService extends BaseHttpService {
  public static get appkey() {
    return 'BbUDE6IPL3I90yla9p4vBhtyj';
  }

  public static remoteconfig =
    'https://service.yumao.tech/config/api/startconfig';
  public RemoteConfig = new AsyncSubject<IConfig>();

  // // 是否整个站点都需要登录
  // public globalauth = true;

  public static isRemoteConfigUrl(url: string): boolean {
    return url.startsWith(ConfigService.remoteconfig);
  }

  constructor(http: HttpClient) {
    super(http);
    super
      .GetDataHttp<IConfig>(
        'GET',
        `${ConfigService.remoteconfig}/${ConfigService.appkey}`
      )
      .pipe(
        map((result) => {
          return {
            ...result,
            remoteconfig: ConfigService.remoteconfig,
          };
        })
      )
      .subscribe(this.RemoteConfig);
  }
}

export interface IConfig {
  oauthurl: string;
  oauthcodename: string;
  oauthstatename: string;
  redirecturlname: string;
  tokenname: string; // 本地存储的tokenname
  httptokenname: string; // 请求时header内的tokanname
  ishttplog: boolean;
  logurl: string;
  isconsole: boolean;
  // 本地化参数，非配置参数
  remoteconfig: string;
  appname: string;
  [k: string]: any;
}
