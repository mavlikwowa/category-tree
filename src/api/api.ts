/** Библиотеки */
import axios from 'axios';
/** Константы */
import { API_URL } from './config';
import { TEST_TREE } from './testData';
/** Интерфейсы */
import { CategoryProps } from './interfaces';

/**
 * Возвращает дерево категорий
 */
export const getTree = async (): Promise<CategoryProps[] | void> => {
  try {
    // const res = await axios.get(`${API_URL}/categories/tree`);
    // if (!res.data.success) throw 'request error';
    // return res.data.data;
    const res = await new Promise(resolve => setTimeout(() => { resolve(TEST_TREE.data) }, 1000));
    return res as CategoryProps[];
  } catch (e) {
    console.log(e);
  }
};

/**
 * Меняет позицию категории
 * @param categoryId - идентификатор категории
 * @param sort - индекс сортировки
 */
export const changeCategory = async (
  categoryId: number,
  sort: number,
): Promise<void> => {
  try {
    const res = await axios({
      method: 'post',
      url: `${API_URL}/categories/${categoryId}/sort/${sort}`,
      headers: {},
    })
    // if (!res.data.success) throw 'request error';
  } catch (e) {
    console.log(e);
  }
}
