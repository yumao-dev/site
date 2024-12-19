import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { catchError, of } from 'rxjs';
import { INewsDetail, NewsService } from './newsservice';

export const NewsDetailResolver: ResolveFn<INewsDetail | undefined> = (
  route: ActivatedRouteSnapshot
) => {
  const newsservice = inject(NewsService);
  // const router = inject(Router);
  let id = parseInt(route.params['id'], 10);
  return newsservice.GetNews(id).pipe(
    catchError((err) => {
      return of(undefined);
    })
  );
};
