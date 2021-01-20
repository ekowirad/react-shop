import React from 'react'

export default function button({text, ...props}) {
    return (
        <button className="button" {...props}>
            <div className="text"> {text}</div>
            <div className="bg"> </div>
        </button>
    )
}
