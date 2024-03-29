import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import reducers from './reducers';

const store = createStore(
  reducers
);

export default store;