import React from 'react'
import { useHistory } from 'react-router-dom'

export default function BannerHome({ item }) {
    const history = useHistory()
    
    return (
        <div className="banner" onClick={() => {
            history.push(item.linkTo)
        }}>
            <div className="text">
                {item.title}
            </div>
            <div className="bg">
                <div className="inner"></div>
                <img src={item.imageUrl} alt={item.title} />
            </div>
        </div>
    )
}
