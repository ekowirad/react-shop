import React from 'react'

export default function navItem(props) {
    return (
        <div className="nav-item">
            {props.text}
            <div className="border"></div>
        </div>
    )
}
