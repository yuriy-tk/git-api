import { reposReducer } from '@git-api/core/src/lib/repos.reducer';
import { watchSaga } from '@git-api/core/src/lib/sagas';
import { userReducer } from '@git-api/core/src/lib/user.reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import { App } from './app/app';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    users: userReducer,
    repos: reposReducer
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
