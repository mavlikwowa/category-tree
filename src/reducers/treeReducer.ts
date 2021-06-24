/** Библиотеки */
import { Reducer } from 'redux';

/** Интерфейсы */
import { CategoryProps } from '../api/interfaces';
import { TreeReduxAction, TreeActionTypes } from './interfaces';

const initialState = {};
/**
 * Reducer для получения дерева категорий
 * @param state
 * @param action
 */
export const treeReducer: Reducer = (
  state: CategoryProps[] | {} = initialState,
  action: TreeReduxAction
): CategoryProps[] | {} => {
  switch (action.type) {
    case TreeActionTypes.GET_TREE:
      return action.payload || state;
  }
  return state;
}
