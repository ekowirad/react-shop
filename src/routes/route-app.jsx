import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SigninSignupWrap from '../components/signin-signup'
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
        exact: true,
    },
    {
        path: '/contact',
        component: contact,
        exact: true,
    },
    {
        path: '/signin',
        component: SigninPage,
        exact: true,
    },
    {
        path: '/signup',
        component: SignupPage,
        exact: true,
    },

]

export default function routeApp(props) {
    return (
        routes.map((route, i) => {
            return <Switch key={i} >
                <Route {...route}>
                </Route>
            </Switch>
        })
    )
}
