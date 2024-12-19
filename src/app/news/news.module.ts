import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ShareModule } from '../share/share.module';
import { NewsContentComponent } from './news-content/news-content.component';
import { NewsListComponent } from './news-list/news-list.component';

import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [NewsContentComponent, NewsListComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ShareModule.forChild(),
    TabsModule.forRoot(),
    NgOptimizedImage,
  ],
})
export class NewsModule {}
