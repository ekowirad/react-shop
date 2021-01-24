import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartState } from '../redux/cart/cart.selector'
import Button from '../components/button'
import { toggleHidden } from '../redux/cart/cart.action'

function Cart() {
    const { hidden } = useSelector(cartState)
    const dispatch = useDispatch()
    const [cartClass, setcartClass] = useState(null)
    const arr = Array(30).fill("a")


    useEffect(() => {
        if (hidden != null) {
            setcartClass(hidden ? 'cart--hide' : 'cart--show')
        }
    }, [hidden])

    return (
        <div className={"cart " + cartClass}>
            <div className="cart-content">
                <h2>Your Cart</h2>
                {
                    arr.map(a => {
                        return <h1>Item cart</h1>
                    })
                }
            </div>

            <div className="cart-bottom">
                <Button text="Checkout" onClick={() => { dispatch(toggleHidden(true)) }}></Button>
            </div>
        </div>
    )
}

export default Cart
