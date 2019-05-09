
import { NewsActions, NewsActionTypes } from './news.actions';
import {News} from './news';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  news: News[];
}

export const initialState: State = {
  news: []
};

export function reducer(state = initialState, action: NewsActions): State {
  switch (action.type) {

    case NewsActionTypes.LoadNewss:
      return state;

    case NewsActionTypes.SetNewss:
      return { ...state, news: action.news };

    default:
      return state;
  }
}

export const getNewsFeature = createFeatureSelector<State>('news');
export const getNewsSelector = createSelector(
  getNewsFeature,
  state => state.news
);
