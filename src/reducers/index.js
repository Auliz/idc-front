import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './user';
import location from './location';
import places from './places'
import swipe from './swipe'

const reducers = combineReducers({
  user,
  location,
  places,
  swipe
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
