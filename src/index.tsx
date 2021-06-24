import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tree from './components/Tree';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Tree />
  </Provider>,
  document.getElementById('root')
);
