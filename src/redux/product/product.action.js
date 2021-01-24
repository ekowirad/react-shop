import { docType } from "../../firebase/doc-type";
import { auth, firestore } from "../../firebase/firebase.utils"
import { productType } from "./product.type";

export const productStart = () => ({
    type: productType.PRODUCT_START
})

export const productSuccess = (data) => ({
    type: productType.PRODUCT_SUCCESS,
    payload: data
})

export const productFail = (errorMsg) => ({
    type: productType.PRODUCT_FAIL,
    payload: errorMsg
})

export const fetchProduct = (category) => {
    return async dispatch => {
        dispatch(productStart())
        try {
            const productRef = firestore.collection(docType.PRODUCTS)
            const snapShot = category != undefined ? await productRef.where("routeName", "==", category).get() : await productRef.get()
            const doc = snapShot.docs.map(doc => {
                return {
                    code: doc.id,
                    ...doc.data()
                }
            })
            dispatch(productSuccess(doc))
        } catch (e) {
            dispatch(productFail(e.message))
        }
    }
}