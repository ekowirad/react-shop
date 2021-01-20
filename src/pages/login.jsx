import React from 'react'
import { useHistory } from 'react-router-dom'
import SignUpPage from './signup'

export default function LoginPage(props) {
    return (
        <div className="inner-container">
            <h1>This is blank login page</h1>
            <SignUpPage></SignUpPage>
        </div>
    )
}
