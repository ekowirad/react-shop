import { docType } from "../../firebase/doc-type";
import { firestore } from "../../firebase/firebase.utils";
import { cartType } from "./cart.type";

export const toggleHidden = (bool) => ({
    type: cartType.TOGGLE_CART,
    payload: bool
})

export const cartStart = () => ({
    type: cartType.CART_START,
})

export const cartSuccess = (cartList) => ({
    type: cartType.CART_SUCCESS,
    payload: cartList
})

export const cartFail = (errMsg) => ({
    type: cartType.CART_FAIL,
    payload: errMsg
})

export const cartClear = () => ({
    type: cartType.CART_CLEAR,
})

export const fetchCart = (user) => {
    return async dispatch => {
        dispatch(cartStart())
        const cartRef = firestore.collection(docType.CART)
        try {
            const snapShot = await cartRef.where('uid', '==', user.uid).get()
            const docs = snapShot.docs.map(doc => {
                return {
                    code: doc.id,
                    ...doc.data()
                }
            })
            dispatch(cartSuccess(docs))
        } catch (e) {
            dispatch(cartFail(e.message))
        }
    }
}

export const increaseItem = (user, newItem) => {
    return async dispatch => {
        dispatch(cartStart())
        const cartRef = firestore.collection(docType.CART)
        try {
            const cart = await cartRef.where('uid', '==', user.uid).where('id', '==', newItem.id).limit(1).get()
            if (cart.empty) {
                await cartRef.add({ ...newItem, uid: user.uid, quantity: 1 })
            } else {
                const doc = cart.docs[0]
                const item = { ...doc.data(), code: doc.id, quantity: doc.data().quantity + 1 }
                await cartRef.doc(item.code).set(item)
            }
        } catch (e) {
            dispatch(cartFail(e.message))
        }
    }
}

export const decreaseItem = (item) => {
    return async dispatch => {
        dispatch(cartStart())
        const cartRef = firestore.collection(docType.CART).doc(item.code)
        try {
            if (item.quantity <= 1) {
                await cartRef.delete()
            } else {
                await cartRef.set({ ...item, quantity: item.quantity - 1 })
            }

        } catch (e) {
            dispatch(cartFail(e.message))
        }
    }
}

export const deleteItem = (item) => {
    return async dispatch => {
        dispatch(cartStart())
        const cartRef = firestore.collection(docType.CART).doc(item.code)
        try {
           await cartRef.delete()
        } catch (e) {
            dispatch(cartFail(e.message))
        }
    }
}
