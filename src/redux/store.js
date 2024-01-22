import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import movieReducer from './reducer/movieReducer';

let store = createStore(
  movieReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
