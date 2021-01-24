import { cartType } from "./cart.type";

export const toggleHidden = (bool) => ({
    type: cartType.TOGGLE_CART,
    payload: bool
})