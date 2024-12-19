import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { INewsDetail, NewsService } from '../service/newsservice';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css'],
  // providers: [NewsDetailResolver]
})
export class NewsContentComponent implements OnInit {
  news: INewsDetail | undefined;
  constructor(
    public service: NewsService,
    private title: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.layoutservice.showheader.next(true);
    // this.route.queryParams.subscribe(param => {
    //   this.news = this.service.GetNews(param.id);
    // });

    this.route.data.subscribe((data) => {
      this.news = data['news'];
      if (this.news?.title) this.title.setTitle(this.news?.title);
      if (this.news?.content)
        this.news.content = decodeURIComponent(this.news.content);
    });
  }
}
