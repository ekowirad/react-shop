import React from 'react'
import { useDispatch } from 'react-redux';
import { ReactComponent as BagIcon} from '../assets/shopping-bag.svg';
import { toggleHidden } from '../redux/cart/cart.action';

export default function CartIcon() {
    const dispatch = useDispatch()
    
    return (
        <div onClick={() => {dispatch(toggleHidden(false))}} className="icon-container">
            <BagIcon className="icon"></BagIcon>
            <div className="counter">0</div>
        </div>
    )
}
