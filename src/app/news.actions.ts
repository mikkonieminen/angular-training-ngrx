import { Action } from '@ngrx/store';

export enum NewsActionTypes {
  LoadNewss = '[News] Load Newss',
}

export class LoadNewss implements Action {
  readonly type = NewsActionTypes.LoadNewss;
}


export type NewsActions = LoadNewss;
