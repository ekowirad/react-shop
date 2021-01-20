import React from 'react'

export default function bannerHome({ item }) {
    return (
        <div className="banner" onClick={() => {
            console.log("HEELLP")
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
