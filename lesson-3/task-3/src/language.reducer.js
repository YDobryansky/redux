import { SET_LANGUAGE} from './language.actions.js';
import { initialState } from './store.js';

const languageReducer = (state = initialState.language, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload
    default:
      return state;
  }
}

export default languageReducer;
