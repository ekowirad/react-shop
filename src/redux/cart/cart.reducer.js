import { cartType } from "./cart.type";

const INITIAL_STATE = {
  hidden: null,
  cartItems: [],
  load: false,
  err_msg: ''
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.TOGGLE_CART:
      return {
        ...state,
        hidden: action.payload != undefined ? action.payload : state.hidden
      };
    case cartType.CART_START:
      return {
        ...state,
        load: true
      }
    case cartType.CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        load: false
      }
    case cartType.CART_FAIL:
      return {
        ...state,
        err_msg: action.payload,
        load: false
      }
    case cartType.CART_CLEAR:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state;
  }
};
