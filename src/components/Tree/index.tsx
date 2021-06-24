/** Библиотеки */
import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
  DraggableProvided,
  DropResult,
} from 'react-beautiful-dnd';
/** Компоненты */
import { Table } from 'react-bootstrap';
import CategoryRow from '../CategoryRow';
/** Actions */
import { changeTree } from '../../actionCreators/treeCreator';
/** Интерфейсы */
import { CategoryProps } from '../../api/interfaces'
import { DispatchProps, StateProps } from './interfaces';
/** API */
import { getTree, changeCategory } from '../../api/api'

/** Компонент с деревом категорий */
const Tree: FC<DispatchProps & StateProps> = ({
  categories,
  changeTree
}: DispatchProps & StateProps) => {
  /** Получает данные по категориям */
  const getData = async () => {
    const res = await getTree();
    if (!res) return;
    changeTree(res.sort(sortCategories) as CategoryProps[]);
  };

  /** Флаг показа дочерних категорий */
  const [showChildren, setShowChildren] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  /** Формирует новый список категорий */
  const onDragEnd = (result: DropResult) => {
    if (result.combine) {
      categories.splice(result.source.index, 1)
      changeTree(categories);
      return;
    }
    if (!result.destination) {
      return;
    }
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const newSortPosition = startIndex - endIndex;

    // В данном случае ждать ответа не обязательно
    changeCategory(categories[startIndex].id, newSortPosition);

    const [removed] = categories.splice(startIndex, 1);
    categories.splice(endIndex, 0, removed);

    changeTree(categories);
  };

  /** Сортирует категории по индексу сортировки */
  const sortCategories = (prev: CategoryProps, next: CategoryProps) => {
    if (prev.sort > next.sort) return 1;
    if (prev.sort < next.sort) return -1;
    return 0;
  };

  return (
    <Table bordered hover>
      <thead>
      <tr>
        <th>Наименование</th>
        <th>Цена</th>
        <th>Идентификатор игры</th>
        <th>Дата создания</th>
        <th>Дата обновления</th>
        <th>Комиссия сервиса</th>
        <th>Показывать цену</th>
        <th>Показывать количество</th>
        <th>Показывать время</th>
        <th>Можно продавать несколько раз</th>
        <th>Статус</th>
        <th>Моментальная доставка</th>
        <th>Создание нескольких предложений в категории</th>
        <th />
      </tr>
      </thead>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={e => setShowChildren(false)}>
        <Droppable droppableId="droppable" isCombineEnabled>
          {(provided: DroppableProvided): JSX.Element => (
            <tbody ref={provided.innerRef}>
              {categories?.length && categories.map((item: CategoryProps, index: number) => {
                return (
                  <React.Fragment key={item.id}>
                    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                      {(provided: DraggableProvided): JSX.Element => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`${showChildren && !item.isFinal && 'row_opened'}`}
                        >
                          <CategoryRow
                            showChildren={showChildren}
                            setShowChildren={setShowChildren}
                            {...item}
                          />
                        </tr>
                      )}
                    </Draggable>
                    {showChildren && item.children?.length && item.children.map(child => {
                        return (
                          <tr key={child.id} className={`${showChildren && 'row_child'}`}>
                            <CategoryRow {...child} />
                          </tr>
                        )
                    })}
                  </React.Fragment>
                )
              })}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </Table>
  );
}

const mapStateToProps = (state: CategoryProps[]): StateProps  => ({
  categories: state,
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => bindActionCreators({
  changeTree,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tree);
