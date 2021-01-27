import React from 'react'

function CartItem({item}) {
    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={item.imageUrl} alt="" />
            </div>
            <div className="cart-item-caption">
                <p className="title-caption">{item.name}</p>
                <h4>(x{item.quantity}) ${item.price}</h4>
            </div>
        </div>
    )
}

export default CartItem
