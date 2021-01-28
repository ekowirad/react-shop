import React, { useEffect, useState } from 'react'
import FormInput from '../components/form-input'
import Button from '../components/button'
import SigninSignupWrap from '../components/signin-signup'
import { Link, useHistory } from 'react-router-dom'
import { auth, storeNewUser } from '../firebase/firebase.utils'
import Spinner from '../components/spinner'
import { useDispatch } from 'react-redux'
import { fetchCart } from '../redux/cart/cart.action'

function SignupPage() {
    /**
     * VARIABLE SECTION 
     */
    const initData = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const [data, setData] = useState(initData)
    const [load, setLoad] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    /**
     * FUNCTION SECTION 
     */
    const handleChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async () => {
        const { email, password, confirmPassword } = data

        if (password != confirmPassword) {
            return
        }

        setLoad(true)
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await storeNewUser({ ...user, displayName: data.displayName })
            dispatch(fetchCart(user))
            setData(initData)
            setLoad(false)
            history.push("/")

        } catch (error) {
            setLoad(false)
            console.log(error);
            alert(error.message)
        }

    }


    return (
        <SigninSignupWrap>
            <div className="inner-top">
                <h1>Sign Up</h1>
                <FormInput onChange={handleChange} name="displayName" value={data.displayName} type="text" placeholder="john doe" label="Display name"></FormInput>
                <FormInput onChange={handleChange} name="email" type="email" value={data.email} placeholder="example@mail.com" label="Email"></FormInput>
                <FormInput onChange={handleChange} name="password" type="password" value={data.password} placeholder="**********" label="Password"></FormInput>
                <FormInput onChange={handleChange} name="confirmPassword" type="password" value={data.confirmPassword} placeholder="**********" label="Confirm Password"></FormInput>
                <p className="caption-form">
                    You already have an account? <Link to="/signin"><span>Sign in here</span></Link>
                </p>
            </div>
            <div className="inner-bot">
                {
                    load ? <Spinner></Spinner> : <Button text="Sign up" onClick={handleSubmit}></Button>
                }
            </div>
        </SigninSignupWrap>
    )
}

export default SignupPage 
