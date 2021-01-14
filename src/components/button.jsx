import React from 'react'

export default function button(props) {
    return (
        <button className="button">
            <div className="text"> {props.text}</div>
            <div className="bg"> </div>
        </button>
    )
}
