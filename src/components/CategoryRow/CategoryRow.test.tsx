/* Библиотеки */
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

/* Компоненты */
import CategoryRow from './index';
/* Интерфейсы */
import { CategoryRowProps } from './interfaces';
/* Тестовые данные */
import { TEST_TREE } from '../../api/testData';

/** Настройки */
const setUp = () => {
  /* mock для функции setShowChildren */
  const mockSetShowChildren = jest.fn();
  /* Тестовые данные */
  const props: CategoryRowProps = {
    ...TEST_TREE.data[0],
    setShowChildren: mockSetShowChildren,
    showChildren: true,
  };
  /* Компонент */
  const wrapper = shallow(
      <CategoryRow {...props} />
  );

  return { wrapper, props };
};

describe('Test component Link', () => {
  let wrapper: ShallowWrapper;
  let props: CategoryRowProps;

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
