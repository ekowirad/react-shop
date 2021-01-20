import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import Button from './button.jsx'
import Cart from './cart';
import CartIcon from './cart-icon';
import MenuItem from './nav-item'

export default function header() {
    const nav_items = [
        {
            name: "Shop",
            path: "/shop"
        },
        {
            name: "Contact",
            path: "/contact"
        },
    ]

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
                            <Button text="Sign in"></Button>
                        </Link>
                    </li>
                    <li className="item">
                        <CartIcon></CartIcon>
                    </li>
                </ul>
            </div>
            <Cart></Cart>
        </header>
    )
}
