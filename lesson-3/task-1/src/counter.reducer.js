import { INCREMENT, DECREMENT, RESET } from './counter.actions.js';
import { initialState } from './store.js';

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}

export default counterReducer