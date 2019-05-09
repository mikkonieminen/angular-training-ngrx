import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'news'
  },
  {
    path: 'news',
    children: [
      {
        path: '',
        component: NewsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
