/** библиотеки */
import { Dispatch } from 'redux';
/** интерфейсы */
import { AppThunkAction, TreeReduxAction, TreeActionTypes } from '../reducers/interfaces';
import { CategoryProps } from '../api/interfaces';

/**
 * Получает дерево категорий
 * @return {Dispatch<TreeReduxAction>}
 */
export function changeTree(payload: CategoryProps[]): AppThunkAction<TreeReduxAction> {
  return (dispatch: Dispatch<TreeReduxAction>) => {
    dispatch(<TreeReduxAction>{
      type: TreeActionTypes.GET_TREE,
      payload,
    });
  };
}
