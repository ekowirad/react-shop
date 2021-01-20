import { cartType } from "./cart.type";

const INITIAL_STATE = {
    hidden: false
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};
