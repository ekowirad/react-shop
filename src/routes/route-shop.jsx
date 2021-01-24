import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductList from '../components/product-list'

const routes = [
    {
        path: '/shop',
        component: ProductList,
        exact: true,
    },
    {
        path: '/shop/:category',
        component: ProductList,
        exact: true,
    },

]

export default function routeShop(props) {
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
