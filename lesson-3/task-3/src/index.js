import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions.js';
import { setUser, removeUser } from './user.actions';

// Subscribe to store changes
store.subscribe(() => {
  console.log('Store updated:', store.getState());
});
// Dispatch actions
store.dispatch(setLanguage('es'));
store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'apple' }));
store.dispatch(removeProduct(1));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());

