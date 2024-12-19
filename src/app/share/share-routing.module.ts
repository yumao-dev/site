import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '**',
    component: ErrorComponent,
    data: { title: 'ERROR' },
  },
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class ShareRoutingModule {}
