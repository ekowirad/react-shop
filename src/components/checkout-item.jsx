import React from 'react'
import Button from './button'
import { ReactComponent as TrashIcon } from '../assets/trash.svg';
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItem, deleteItem, fetchCart, increaseItem } from '../redux/cart/cart.action';
import { userState } from '../redux/user/user.selector';

function CheckoutItem({ item }) {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(userState)

    const handleIncrease = (item) => {
        return () => {
            dispatch(increaseItem(currentUser, item)).then(() => {
                dispatch(fetchCart(currentUser))
            })
        }
    }

    const handleDecrease = (item) => {
        return () => {
            dispatch(decreaseItem(item)).then(() => {
                dispatch(fetchCart(currentUser))
            })
        }
    }

    const handleRemove = (item) => {
        return () => {
            dispatch(deleteItem(item)).then(() => {
                dispatch(fetchCart(currentUser))
            })
        }
    }

    return (
        <div className="checkout-item">
            <div className="checkout-item-product">
                <div className="product-img-container">
                    <img src={item.imageUrl} alt="" />
                </div>
                <div className="checkout-item-caption">
                    <p className="title-caption">{item.name}</p>
                    <br />
                    <h4>$ {item.quantity * item.price}</h4>
                    <p>(x{item.quantity}) ${item.price}</p>
                </div>
            </div>
            <div className="checkout-item-action">
                <div className="icon-wrap">
                    <TrashIcon onClick={handleRemove(item)} className="icon"></TrashIcon>
                </div>
                <div className="item-action-quantity">
                    <Button onClick={handleDecrease(item)} text="<"></Button>
                    <p>{item.quantity}</p>
                    <Button onClick={handleIncrease(item)} text=">"></Button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem
