
import { NewsActions, NewsActionTypes } from './news.actions';
import {News} from './news';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  news: News[];
}

export const initialState: State = {
  news: [{ title: 'Taxation is getting even higher' }, { title: 'Weather is cold, again' }]
};

export function reducer(state = initialState, action: NewsActions): State {
  switch (action.type) {

    case NewsActionTypes.LoadNewss:
      return state;

    default:
      return state;
  }
}

export const getNewsFeature = createFeatureSelector<State>('news');
export const getNewsSelector = createSelector(
  getNewsFeature,
  state => state.news
);
