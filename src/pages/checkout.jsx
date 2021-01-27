import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/button'
import CheckoutItem from '../components/checkout-item'
import Spinner from '../components/spinner'
import { cartState, selectCartQuantity, selectTotalPrice } from '../redux/cart/cart.selector'

function Checkout() {
    const { hidden, cartItems, err_msg, load } = useSelector(cartState)
    const totalQuantity = useSelector(selectCartQuantity)
    const totalPrice = useSelector(selectTotalPrice)

    const arr = Array(5).fill('a')
    return (
        <div className="inner-container">
            <div className="fluid-container">
                <h1>Your Cart</h1>
                <div className="checkout-list">
                    {load ? <Spinner></Spinner> : null}
                    {
                        cartItems.map((item, idx) => {
                            return <CheckoutItem key={idx} item={item}></CheckoutItem>
                        })
                    }
                </div>
                <div className="checkout-total">
                    <h3>Checkout your item</h3>
                    <hr />
                    <p className="checkout-price">Total item you buy <span>{totalQuantity} items</span></p>
                    <h2 className="checkout-price">Total Price <span>$ {totalPrice}</span></h2>
                    <br />
                    <Button text="Checkout Now"></Button>

                </div>
            </div>
            {err_msg != '' ? alert(err_msg) : null}
        </div>
    )
}

export default Checkout
