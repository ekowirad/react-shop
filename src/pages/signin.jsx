import React, { useEffect, useState } from 'react'
import FormInput from '../components/form-input'
import Button from '../components/button'
import SigninSignupWrap from '../components/signin-signup'
import { Link, useHistory } from 'react-router-dom'
import { auth, googleSignin, storeNewUser } from '../firebase/firebase.utils'
import Spinner from '../components/spinner'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../redux/user/user.action'
import { fetchCart } from '../redux/cart/cart.action'

function SigninPage() {
    /**
     * VARIABLE SECTION 
     */
    const initData = {
        email: '',
        password: '',
    }
    const dispatch = useDispatch();
    const history = useHistory()
    const [data, setData] = useState(initData)
    const [load, setLoad] = useState(false)

    /**
     * FUNCTION SECTION 
     */
    const handleChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }

    const signInWithEmail = async () => {
        const { email, password } = data

        setLoad(true)
        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password)
            dispatch(fetchCart(user))
            dispatch(setCurrentUser(user))
            setData(initData)
            setLoad(false)
            history.push("/")

        } catch (e) {
            setLoad(false)
            console.log(e);
            alert(e.message)

        }


    }

    const googleSigninAct = async () => {
        setLoad(true)
        try {
            const { user } = await googleSignin()
            await storeNewUser(user)
            dispatch(fetchCart(user))
            dispatch(setCurrentUser(user))
            setData(initData)
            setLoad(false)
            history.push("/")

        } catch (e) {
            setLoad(false)
            console.log(e);
            alert(e.message)
        }
    }

    return (
        <SigninSignupWrap>
            <div className="inner-top">
                <h1>Sign In</h1>
                <FormInput onChange={handleChange} name="email" type="email" value={data.email} placeholder="example@mail.com" label="Email"></FormInput>
                <FormInput onChange={handleChange} name="password" type="password" value={data.password} placeholder="**********" label="Password"></FormInput>
                <p className="caption-form">
                    You don't have an account? <Link to="/signup"><span>Sign up here</span></Link>
                </p>
            </div>
            <div className="inner-bot">
                {
                    load ? <Spinner></Spinner> : <><Button text="Sign in" onClick={signInWithEmail}></Button>
                        <Button text="Sign in with Google" onClick={googleSigninAct}></Button> </>
                }
            </div>
        </SigninSignupWrap>
    )
}

export default SigninPage 
