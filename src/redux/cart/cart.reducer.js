import { cartType } from "./cart.type";

const INITIAL_STATE = {
  hidden: null
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.TOGGLE_CART:
      return {
        ...state,
        hidden: action.payload != undefined ? action.payload : state.hidden
      };
    default:
      return state;
  }
};
