import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { rootReducer } from './root-reducer';
import * as api from '../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument({
      client: axios,
      api,
    })
  )
));