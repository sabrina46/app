import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './assets/font/iconfont.css';
import './assets/css/common.scss';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import { Provider } from 'react-redux';
import Route from './view/Root/Router'


ReactDOM.render(
  <Provider store={store}>
    <Route></Route>
  </Provider>
 ,
  document.getElementById('root')
);
serviceWorker.unregister();
