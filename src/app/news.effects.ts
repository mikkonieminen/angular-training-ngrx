import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {catchError, concatMap, map, mergeMap} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {NewsActionTypes, NewsActions, SetNewss} from './news.actions';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class NewsEffects {


  @Effect()
  loadNewss$ = this.actions$.pipe(
    ofType(NewsActionTypes.LoadNewss),
    mergeMap(() => this.httpClient
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .pipe(
        // If successful, dispatch set action with result list
        map((data: any[]) => new SetNewss(data)),
        // If request fails, dispatch failed action
        catchError(() => EMPTY)
      )
    )
  );


  constructor(private actions$: Actions<NewsActions>, private httpClient: HttpClient) {}

}
