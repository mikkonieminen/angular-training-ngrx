import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { NewsActionTypes, NewsActions } from './news.actions';


@Injectable()
export class NewsEffects {


  @Effect()
  loadNewss$ = this.actions$.pipe(
    ofType(NewsActionTypes.LoadNewss),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<NewsActions>) {}

}
