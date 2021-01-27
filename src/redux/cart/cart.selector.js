import { createSelector } from "reselect"

export const cartState = state => state.cart

export const selectCartQuantity = createSelector(
    [cartState],
    cart => cart.cartItems.reduce(
        (accumulated, item) => accumulated + item.quantity,
        0
    )
)

export const selectTotalPrice = createSelector(
    [cartState],
    cart => cart.cartItems.reduce(
        (accumulated, item) => accumulated + (item.quantity * item.price),
        0
    )

)