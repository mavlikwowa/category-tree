/** Интерфейсы */
import { CategoryProps } from '../../api/interfaces';
/** Actions */
import { changeTree } from '../../actionCreators/treeCreator';

/** Интерфейс dispatch'ей компонента */
export interface DispatchProps {
  changeTree: typeof changeTree;
}
/** Интерфейс state store компонента */
export interface StateProps {
  categories: CategoryProps[];
}
