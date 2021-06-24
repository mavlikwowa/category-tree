import React, { FC } from 'react';
import format from 'date-fns/format';
import { CategoryRowProps } from './interfaces';

/** Дочерний компонент "Строка с категорией" */
const CategoryRow: FC<CategoryRowProps> = ({
  name,
  price_multiplier,
  game_id,
  created_at,
  updated_at,
  commission,
  show_price,
  show_count,
  show_time,
  multiple_sale,
  status,
  is_instant_delivery,
  is_allow_multiple_offers,
  isFinal,
  showChildren,
  setShowChildren,
}: CategoryRowProps) => {
  /** Показывает вложенные категории */
  const handlerChildren = () => {
    if (setShowChildren && typeof showChildren === 'boolean') {
      setShowChildren(!showChildren);
    }
  };

  /** Формирует дату из timestamp*/
  const createDateFromTimestamp = (timestamp: number) => {
    return format(new Date(timestamp * 1000), 'dd/LL/yyyy HH:mm:SS');
  }

  return (
    <>
      <td>{name}</td>
      <td>{price_multiplier}</td>
      <td>{game_id}</td>
      <td>{createDateFromTimestamp(created_at)}</td>
      <td>{createDateFromTimestamp(updated_at)}</td>
      <td>{commission}</td>
      <td>{Boolean(show_price) ? 'Да' : 'Нет'}</td>
      <td>{Boolean(show_count) ? 'Да' : 'Нет'}</td>
      <td>{Boolean(show_time) ? 'Да' : 'Нет'}</td>
      <td>{Boolean(multiple_sale) ? 'Да' : 'Нет'}</td>
      <td>{Boolean(status) ? 'Виден' : 'Скрыт'}</td>
      <td>{Boolean(is_instant_delivery) ? 'Да' : 'Нет'}</td>
      <td>{Boolean(is_allow_multiple_offers) ? 'Можно' : 'Нельзя'}</td>
      {isFinal ? <td /> :
        <td
          onClick={handlerChildren}
          className={`${!isFinal && 'show_button'}`}
        >
          {!isFinal ? `${showChildren ? 'Скрыть' : 'Показать'} вложенные категории` : ''}
        </td>}
    </>
  );
};

export default CategoryRow;
