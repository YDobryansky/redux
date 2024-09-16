import { createStore, combineReducers } from 'redux';
import languageReducer from './language.reducer';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';

export const initialState = {
  language: 'en',
  user: null,
  cart: {
    products: []
  }
};

const appReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer
});

const store = createStore(appReducer);

export default store;