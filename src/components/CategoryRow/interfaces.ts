/** Интерфейсы */
import { CategoryProps } from '../../api/interfaces';
import { SetStateAction, Dispatch } from 'react';

export interface CategoryRowProps extends CategoryProps {
  /** Функция изменения флага */
  setShowChildren?: Dispatch<SetStateAction<boolean>>;
  /** Флаг отображения вложенных категорий */
  showChildren?: boolean;
}
