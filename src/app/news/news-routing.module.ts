import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsContentComponent } from './news-content/news-content.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailResolver } from './service/common.resolver';

const routes: Routes = [
  {
    path: 'content/:id',
    component: NewsContentComponent,
    resolve: {
      news: NewsDetailResolver,
    },
    data: { title: '新闻内容' },
  },
  {
    path: 'list',
    component: NewsListComponent,
    data: { title: '新闻列表' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
