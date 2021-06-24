/** Свойства ответа метода getTree */
export interface GetTreeProps {
  /** Успешность ответа */
  success: boolean;
  /** Данные */
  data: CategoryProps[];
}

/** Свойство категории */
export interface CategoryProps {
  id: number;
  /** Отображаемое название */
  name: string;
  /** Мультипликатор цены */
  price_multiplier: number;
  /** id игры, в которой опубликована категория */
  game_id: number;
  /** timestmap создания */
  created_at: number;
  /** timestamp последнего обновления */
  updated_at: number;
  /** Порядок отображения */
  sort: number;
  /** Комиссия сервиса */
  commission: number;
  /** Показывать цену */
  show_price: number;
  /** Показывать количество */
  show_count: number;
  /** Показывать время */
  show_time: number;
  /** Можно продавать несколько раз */
  multiple_sale: number;
  /** Текущий статус: 0 - не видна, 1 - видна всем */
  status: number;
  /** ID родителя или null, если категория корневая */
  parent_id: number | null;
  /** Моментальная доставка? */
  is_instant_delivery: number;
  /** Можно создать несколько предложений в этой категории? */
  is_allow_multiple_offers: number | null;
  /** Есть ли вложенные категории: true/false */
  isFinal: boolean;
  /** Дочерние категории, которых может быть неограниченное количество */
  children?: CategoryProps[];
}
