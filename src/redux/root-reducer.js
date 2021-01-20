import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";

const presistConfig = {
    key: 'root',
    storage,
}
export const rootReducer = persistReducer(
    presistConfig,
    combineReducers({
        user: userReducer,
        cart: cartReducer 
    })
) 