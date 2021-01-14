import React from 'react'
import { Route, Switch } from 'react-router-dom'
import contact from '../pages/contact'
import home from '../pages/home'
import shop from '../pages/shop'

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

]

export default function routeApp(props) {
    return (
        <Switch>
            {
                routes.map(route => {
                    return <Route {...route}>

                    </Route>
                })
            }
        </Switch>
    )
}
