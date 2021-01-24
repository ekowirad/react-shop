import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import Button from './button'

function ProductItem({ data }) {
    const history = useHistory()
    const match = useRouteMatch()
    const goTo = `${match.path}/${data.routeName}`

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
                            <Button text="Add to Cart"></Button>
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
