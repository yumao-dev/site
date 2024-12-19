import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { INews, NewsService } from '../news/service/newsservice';
import { ISite, SiteService } from '../service/site.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = '首页main';
  hotnews: Observable<INews[]>;
  sites: Observable<ISite[]>;
  constructor(public service: NewsService, public siteservice: SiteService) {
    this.hotnews = this.service
      .GetAll()
      .pipe(map((b) => b.filter((c) => c.ishot).slice(0, 5)));
    this.sites = siteservice.Sites.pipe(
      tap((result) => {
        result.forEach((item, i) => {
          let n = Math.round((Math.random() * 10) % 7);
          n = n || 7;
          item.imageurl = `assets/images/pic0${n}.jpg`;
          item.backurl = new URL(item.backurl).origin;
        });
      })
    );
  }

  ngOnInit(): void {}
}
