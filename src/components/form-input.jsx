import React from 'react'

export default function FormInput({onChange, label, ...props}) {
    return (
        <div className="input-container">
            <label className="input-label">{label}</label>
            <input className="input" onChange={onChange} {...props}></input>
        </div>
    )
}
