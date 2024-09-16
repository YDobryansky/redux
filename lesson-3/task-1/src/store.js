import { createStore, combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import usersReducer from './users.reducer';

export const initialState = {
  counter: 0,
  users: {
    usersList: []
  }
};

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

export default store;