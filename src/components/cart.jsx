import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { cartHidden } from '../redux/cart/cart.selector'

function Cart() {
    const hidden = useSelector(cartHidden)

    useEffect(() => {
        console.log("cart component",hidden);
    },[hidden])

    return (
        <div className="cart">
            <div className="contanier">

            </div>
        </div>
    )
}

export default Cart
