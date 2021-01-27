import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as BagIcon} from '../assets/shopping-bag.svg';
import { toggleHidden } from '../redux/cart/cart.action';
import { selectCartQuantity } from '../redux/cart/cart.selector';

export default function CartIcon() {
    const dispatch = useDispatch()
    const totalQuantity = useSelector(selectCartQuantity)
    
    return (
        <div onClick={() => {dispatch(toggleHidden(false))}} className="icon-container">
            <BagIcon className="icon"></BagIcon>
            <div className="counter">{totalQuantity}</div>
        </div>
    )
}
