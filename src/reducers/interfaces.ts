import { CategoryProps } from '../api/interfaces';

export interface TreeReduxAction {
  type: TreeActionTypes;
  payload?: CategoryProps[];
}

/** Свойства Action Thunk */
export interface AppThunkAction<TAction> {
  (dispatch: <TAction>(action: TAction) => TAction, getState: () => any): void;
}

/** Список событий для treeReducer */
export enum TreeActionTypes {
  GET_TREE = 'GET_TREE',
}
