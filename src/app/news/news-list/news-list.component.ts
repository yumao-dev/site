import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICates, INews, NewsService } from '../service/newsservice';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  cates: Observable<ICates[]>;
  newss: Observable<INews[]>;
  constructor(public service: NewsService) {
    this.cates = this.service.GetCates();
    this.newss = this.service.GetAll();
  }

  ngOnInit() {
    // this.layoutservice.showheader.next(true);
    // this.route.queryParams.subscribe(param => {
    //   this.news = this.service.GetNews(param.id);
    // });
    // this.route.data.subscribe((data: { news: INewsDetail }) => {
    //   data.news.content = decodeURIComponent(data.news.content);
    //   this.news = data.news;
    // });
  }

  filternew(item: INews, arg: number) {
    return item.cate === arg;
  }
}
