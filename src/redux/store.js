import { configureStore } from '@reduxjs/toolkit'
import { reducerFillter } from '~/layouts/Filter/FillterSlice';
import { reducerProduct } from '~/pages/ProductPage/ProductPageSlice';
import { reducerAuth } from './authSlice';
import { reducerCart } from './cartSlice';


const store = configureStore({
    reducer: {
        fillter: reducerFillter,
        productList: reducerProduct,
        auth: reducerAuth,
        cart: reducerCart
    }
})

export default store;