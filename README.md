# SocialJet. Тестовое задание

## Запуск проекта
1. Установить зависимости командой `yarn`;
2. Запустить локальный сервер командой `yarn start`;

### Запуск тестов
Для запуска тестов воспользоваться командой `yarn jest`. При изменении компонента, выполнить перезапись snapshot'ов команой `yarn jest -u`.

# Тестовое задание

- Реализовать отображение вложенного дерева категорий (Данные ниже) и их настроек, используя своё представление о том, как это сделать, используя bootstrap.
- Реализовать сортировку перетаскиванием (Drag-n-drop). Учесть, что каждую из категорий можно перетащить в другую.
- UI - на ваше усмотрение, но нужно отобразить все данные. На это будет обращено внимание.
- Желательно написать unit тесты.

# Что использовать

- REACT.
- redux. Да, здесь он избыточен, но нужно посмотреть, как вы с ним работаете.

# Методы API

Ответы API заменить на mock

`GET` `/categories/tree` - получить древо категорий

`POST` `/categories/<categoryId>/sort/<sort>` - изменить позицию категории

| param | example | description |
| --- | --- | --- |
| categoryId<sup>*</sup> - в URL | 11 | ID объекта, который нужно переместить |
| sort<sup>*</sup> - в URL | -3 | Число ступенек на которое следует поднять или опустить объект |

Допустим, у нас есть список из категорий:

- Категория #1 (id:1)
- Категория #2 (id:2)
- Категория #3 (id:3)
- Категория #4 (id:4)

Мы хотим, чтобы "Категория #4" оказалась на первом месте, тогда запрос будем выглядеть следующим образом: `POST` `/v1/categories/4/sort/3`, где 3 - это положительное число (означает движение к верху), которое означает количество позиций, на которое необходимо поднять (В данном случае) объект "Категория #4".

Если мы хотим, чтобы "Категория #1" опустилась в списке до последней позиции, то запрос будет выглядеть следующим образом: `POST` `/v1/categories/1/sort/-3`, где (-3) - это отрицательное число (означает движение к низу), на которое необходимо опустить (В данном случае) объект "Категория #1".

# Данные

Результат выполнения запроса `POST` `/categories/<categoryId>/sort/<sort>`
```javascript
{
   "success": true,
   "data": {
     "category_id" : 1,
     "sort": 3
   }
}
```

Результат выполнения запроса `GET` `/categories/tree`

```javascript
{
   "success":true,
   "data":[
      {
         "id":6,
         "name":"Золото",                   // Отображаемое название
         "price_multiplier":1000,           // Мультипликатор цены
         "game_id":3,                       // id игры, в которой опубликована категория
         "created_at":1555732503,           // timestmap создания
         "updated_at":1555732503,           // timestamp последнего обновления
         "sort":5,                          // Порядок отображения
         "commission":3,                    // Комиссия сервиса
         "show_price":1,                    // Показывать цену
         "show_count":1,                    // Показывать количество
         "show_time":1,                     // Показывать время
         "multiple_sale":1,                 // Можно продавать несколько раз
         "status":1,                        // Текущий статус: 0 - не видна, 1 - видна всем
         "parent_id":null,                  // ID родителя или null, если категория корневая
         "is_instant_delivery":0,           // Моментальная доставка?
         "is_allow_multiple_offers":null,   // Можно создать несколько предложений в этой категории?
         "isFinal":true                     // Есть ли вложенные категории: true/false
      },
      {
         "id":7,
         "name":"Рейды",
         "price_multiplier":1,
         "game_id":3,
         "created_at":1555816711,
         "updated_at":1555816711,
         "sort":6,
         "commission":10,
         "show_price":0,
         "show_count":0,
         "show_time":0,
         "multiple_sale":0,
         "status":1,
         "parent_id":null,
         "is_instant_delivery":0,
         "is_allow_multiple_offers":null,
         "isFinal":false,
         "children":[                       // Дочерние категории, которых может быть неограниченное количество
            {
               "id":8,
               "name":"Дазар'Алор",
               "price_multiplier":1,
               "game_id":3,
               "created_at":1555817073,
               "updated_at":1555817073,
               "sort":1,
               "commission":10,
               "show_price":0,
               "show_count":0,
               "show_time":0,
               "multiple_sale":1,
               "status":1,
               "parent_id":7,
               "is_instant_delivery":0,
               "is_allow_multiple_offers":null,
               "isFinal":true
            },
            {
               "id":9,
               "name":"Горнило штормов",
               "price_multiplier":1,
               "game_id":3,
               "created_at":1555919373,
               "updated_at":1555919373,
               "sort":3,
               "commission":10,
               "show_price":0,
               "show_count":1,
               "show_time":1,
               "multiple_sale":1,
               "status":1,
               "parent_id":7,
               "is_instant_delivery":0,
               "is_allow_multiple_offers":null,
               "isFinal":true
            }
         ]
      },
      {
         "id":19,
         "name":"Серебро",
         "price_multiplier":1000,
         "game_id":3,
         "created_at":1559631163,
         "updated_at":1559631163,
         "sort":13,
         "commission":10,
         "show_price":1,
         "show_count":1,
         "show_time":1,
         "multiple_sale":1,
         "status":1,
         "parent_id":null,
         "is_instant_delivery":0,
         "is_allow_multiple_offers":1,
         "isFinal":true
      },
      {
         "id":51,
         "name":"Серебро",
         "price_multiplier":1000,
         "game_id":3,
         "created_at":1573635179,
         "updated_at":1574063841,
         "sort":25,
         "commission":10,
         "show_price":1,
         "show_count":1,
         "show_time":1,
         "multiple_sale":1,
         "status":1,
         "parent_id":null,
         "is_instant_delivery":0,
         "is_allow_multiple_offers":null,
         "isFinal":true
      }
   ]
}
```
