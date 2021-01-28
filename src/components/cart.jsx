import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartState } from '../redux/cart/cart.selector'
import Button from '../components/button'
import { setRemoteCart, toggleHidden } from '../redux/cart/cart.action'
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import CartItem from './cart-item'
import { Link } from 'react-router-dom'
import { userState } from '../redux/user/user.selector'
import EmptyItem from './empty-item'

function Cart() {
    const { hidden, cartItems, err_msg } = useSelector(cartState)
    const { currentUser } = useSelector(userState)
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
                <div className="title">
                    <h2>Your Cart</h2>
                    <div className="icon-wrap">
                        <CloseIcon onClick={() => { dispatch(toggleHidden(true)) }} className="icon"></CloseIcon>
                    </div>
                </div>
                {
                    cartItems.length > 0 ? cartItems.map((item, idx) => {
                        return <CartItem key={idx} item={item}></CartItem>
                    }) : <EmptyItem></EmptyItem>
                }
            </div>

            <div className="cart-bottom">
                <Link to="/checkout">
                    <Button onClick={() => { dispatch(toggleHidden(true)) }} text="Checkout"></Button>
                </Link>
            </div>
        </div>
    )
}

export default Cart
