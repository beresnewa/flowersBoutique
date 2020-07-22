import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';

import reducer from './reducers';
import './index.css';

import Navigator from '../src/navigation';

const Store = createStore(reducer, applyMiddleware(reduxLogger));


ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Navigator/>
    </React.StrictMode>
  </Provider>,
  
  document.getElementById('root')
);

