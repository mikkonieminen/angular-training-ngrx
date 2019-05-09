import { Action } from '@ngrx/store';

export enum NewsActionTypes {
  LoadNewss = '[News] Load Newss',
  SetNewss = '[News] Set Newss'
}

export class LoadNewss implements Action {
  readonly type = NewsActionTypes.LoadNewss;
}

export class SetNewss implements Action {
  readonly type = NewsActionTypes.SetNewss;
  constructor( public news: any[] ) {
  }
}

export type NewsActions = LoadNewss | SetNewss;
