import { productType } from "./product.type";

const INITIAL_STATE = {
  products: [],
  load: false,
  err_msg: ''
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productType.PRODUCT_START:
      return {
        ...state,
        load: true,
        products: []
      };
    case productType.PRODUCT_SUCCESS:
      return {
        ...state,
        load: false,
        products: action.payload
      };
    case productType.PRODUCT_FAIL:
      return {
        ...state,
        load: false,
        err_msg: action.payload
      };
    default:
      return state;
  }
};