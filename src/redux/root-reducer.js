import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";

const presistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}
export const rootReducer = persistReducer(
    presistConfig,
    combineReducers({
        user: userReducer,
        cart: cartReducer, 
        product: productReducer, 
    })
) 