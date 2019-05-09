import { Component, OnInit } from '@angular/core';
import {getNewsSelector, State} from '../news.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {News} from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: Observable<News[]>;

  constructor(private store: Store<State>) {
    this.news = this.store.select(getNewsSelector)
  }

  ngOnInit() {
  }

}
