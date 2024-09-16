import store from './store';
import { addUser, deleteUser } from './users.actions';

// Додамо спостереження за станом магазину
store.subscribe(() => {
  console.log('State after dispatch:', store.getState());
});

// Запускаємо диспетчери
store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 77, name: 'Sarah' }));
store.dispatch(addUser({ id: 78, name: 'Sarah' }));
store.dispatch(addUser({ id: 79, name: 'Sarah' }));
store.dispatch(deleteUser(76));
