import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: '首页，测试记录' },
  },
  {
    path: 'news',
    // component: SitesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./news/news.module').then((mod) => mod.NewsModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
