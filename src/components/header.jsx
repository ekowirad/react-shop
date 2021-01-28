import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from '../firebase/firebase.utils';
import { removeCurrentUser } from '../redux/user/user.action';
import { cartClear } from '../redux/cart/cart.action';
import { userState } from '../redux/user/user.selector';
import Button from './button.jsx'
import Cart from './cart';
import CartIcon from './cart-icon';
import MenuItem from './nav-item'

export default function Header() {
    const nav_items = [
        {
            name: "Shop",
            path: "/shop"
        },
        // {
        //     name: "Contact",
        //     path: "/contact"
        // },
    ]
    const { currentUser } = useSelector(userState)
    const dispatch = useDispatch()

    const handleSignin = () => {
        dispatch(cartClear())
        dispatch(removeCurrentUser())
    }

    return (
        <header className="header">
            <div className="inner">
                <div className="logo-container">
                    <Link to="/">
                        <Logo className="logo"></Logo>
                    </Link>
                </div>
                <ul className="menu">
                    {
                        nav_items.map((item, i) => {
                            return <li className="item" key={i}>
                                <Link to={item.path}>
                                    <MenuItem text={item.name}></MenuItem>
                                </Link>
                            </li>
                        })
                    }
                    <li className="item">
                        <Link to="/signin">
                            <Button onClick={handleSignin} text={currentUser != null ? "Sign out" : "Sign in"}></Button>
                        </Link>
                    </li>
                    <li className="item">
                        <CartIcon></CartIcon>
                    </li>
                </ul>
            </div>
        </header>
    )
}
