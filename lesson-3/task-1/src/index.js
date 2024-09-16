import store from './store';
import { increment, decrement, reset } from './counter.actions.js';
import { addUser, deleteUser, updateUser } from './users.actions.js';

// Додамо спостереження за станом магазину
store.subscribe(() => {
  console.log('State after dispatch:', store.getState());
});

// Запускаємо диспетчери
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ id: 1, name: 'John' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));
store.dispatch(addUser({ id: 3, name: 'Tom' }));

store.dispatch(deleteUser(1));
store.dispatch(deleteUser(2));

store.dispatch(updateUser(2, { name: 'Bob Martin', age: 30 }));
