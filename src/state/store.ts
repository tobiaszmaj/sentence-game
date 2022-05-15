import reducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
