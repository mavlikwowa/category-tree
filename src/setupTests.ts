import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { matchers, createSerializer } from '@emotion/jest';
import snapshotRemoveProperties from 'jest-snapshot-remove-properties';

Enzyme.configure({ adapter: new Adapter() });
/* Добавляем проверку toHaveStyleRule */
expect.extend(matchers);
/* Добавляем serializer для корректного отображения стилей в snapshot`ах */
expect.addSnapshotSerializer(createSerializer());
/* Исключаем свойство theme из snapshot`ов */
expect.addSnapshotSerializer(snapshotRemoveProperties(['theme']));
