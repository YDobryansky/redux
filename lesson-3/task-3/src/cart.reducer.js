import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';
import { initialState } from './store';

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.product),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.productId),
      };
    default:
      return state;
  }
};

export default cartReducer;
