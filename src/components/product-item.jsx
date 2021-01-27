import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import {fetchCart, increaseItem } from '../redux/cart/cart.action'
import { cartState } from '../redux/cart/cart.selector'
import { userState } from '../redux/user/user.selector'
import Button from './button'

function ProductItem({ data }) {
    const history = useHistory()
    const { cartItems } = useSelector(cartState)
    const { currentUser } = useSelector(userState)
    const dispatch = useDispatch()
    const match = useRouteMatch()
    const goTo = `${match.path}/${data.routeName}`

    const items = [
        {
            id: 1,
            name: 'Brown Brim',
            imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
            price: 25
        },
        {
            id: 2,
            name: 'Blue Beanie',
            imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
            price: 18
        }
    ]

    // useEffect(() => {
    //     dispatch(fetchCart(currentUser))
    // }, [])

    const handleAddItem = (item) => {
        return async () => {
            if (currentUser != null) {
                dispatch(increaseItem(currentUser, item)).then(() => {
                    dispatch(fetchCart(currentUser))
                })
            }
        }
    }

    return (
        <div className="product-container">
            <h1 onClick={() => {
                if (match.params.category != data.routeName) {
                    history.push(goTo)
                }
            }}>{data.title}</h1>
            <div className="item-container">
                {
                    data.items.map((item, idx) => {
                        return <div key={idx} className="product-item">
                            <Button onClick={handleAddItem(item)} text="Add to Cart"></Button>
                            <div className="product-info">
                                <div className="text">
                                    <h3>{item.name}</h3>
                                    <h4>$ {item.price}</h4>
                                </div>
                                <img src={item.imageUrl} alt={item.name} />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProductItem
