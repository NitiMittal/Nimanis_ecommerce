import {createStore,combineReducers,compose, applyMiddleware} from "redux"
import {productListReducer,productDetailsReducer} from "./reducers/productListReducers";
import thunk from "redux-thunk"
import { cartReducer } from "./reducers/CartReducers";
import Cookie from "js-cookie"

const cartItems = Cookie.getJSON("cartItems") || [];
const initalState={cart:{cartItems}};
const reducer=combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer


});

const composeEnhnacer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store=createStore(reducer,initalState,composeEnhnacer(applyMiddleware(thunk)))

export default store;