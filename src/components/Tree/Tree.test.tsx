/* Библиотеки */
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { treeReducer } from '../../reducers/treeReducer';

/* Компоненты */
import Tree from './index';
/* Интерфейсы */
import { StateProps, DispatchProps } from './interfaces';
/* Тестовые данные */
import { TEST_TREE } from '../../api/testData';

export function createTestStore() {
  const store = createStore(treeReducer);
  return store;
}

/** Настройки */
const setUp = () => {
  /* mock для функции changeTree */
  const mockChangeTree = jest.fn();
  /* Тестовые данные */
  const props: DispatchProps & StateProps = {
    categories: TEST_TREE.data,
    changeTree: mockChangeTree,
  };
  /* Компонент */
  const wrapper = shallow(
    <Provider store={createTestStore()}>
      <Tree {...props} />
    </Provider>
  );

  return { wrapper, props };
};

describe('Test component Link', () => {
  let wrapper: ShallowWrapper;
  let props: DispatchProps & StateProps;

  beforeEach(() => {
    ({ wrapper, props } = setUp());
  });

  afterEach(() => {
    if (!wrapper) return;
    wrapper.unmount();
  });

  it('should render component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
