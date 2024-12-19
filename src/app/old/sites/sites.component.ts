import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISite, SiteService } from '../service/site.service';
import { LogService } from '../share/service/log.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
})
export class SitesComponent implements OnInit {
  datas!: Observable<ISite[]>;
  constructor(private log: LogService, private service: SiteService) {}

  ngOnInit(): void {
    // apps
    this.datas = this.service.Sites.pipe(
      catchError((err) => {
        // this.isLoading = false;
        this.log.Write("Error",err,undefined,true,true);
        return of<ISite[]>([]);
      })
    );
  }

  redirct(url: string) {
    window.open(url);
  }
}
