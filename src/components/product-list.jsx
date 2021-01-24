import React, { useEffect } from 'react'
import { SHOP_DATA } from '../data/shop'
import ProductItem from './product-item';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/product/product.action';
import { productState } from '../redux/product/product.selector';
import Spinner from './spinner';

function ProductList() {
    const { category } = useParams()
    const { products, err_msg, load } = useSelector(productState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct(category))
    }, [])

    return (
        <>
            {load ? <Spinner></Spinner> : null}
            {
                products.map((data, idx) => {
                    return <ProductItem key={idx} data={data}></ProductItem>
                })
            }
            {err_msg != '' ? alert(err_msg) : null}
        </>
    )
}

export default ProductList
