import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SigninSignupWrap from '../components/signin-signup'
import Checkout from '../pages/checkout'
import contact from '../pages/contact'
import home from '../pages/home'
import shop from '../pages/shop'
import SigninPage from '../pages/signin'
import SignupPage from '../pages/signup'

const routes = [
    {
        path: '/',
        component: home,
        exact: true,
    },
    {
        path: '/shop',
        component: shop,
        exact: false,
    },
    // {
    //     path: '/contact',
    //     component: contact,
    //     exact: false,
    // },
    {
        path: '/signin',
        component: SigninPage,
        exact: false,
    },
    {
        path: '/signup',
        component: SignupPage,
        exact: false,
    },
    {
        path: '/checkout',
        component: Checkout,
        exact: false,
    },

]

export default function routeApp(props) {
    return (
        <Switch>
            {
                routes.map((route, i) => {
                    return <Route key={i} {...route}>
                    </Route>
                })
            }
        </Switch>
    )
}
