import { configureStore } from '@reduxjs/toolkit'
import { reducerFillter } from '~/layouts/Filter/FillterSlice';
import { reducerProduct } from '~/pages/ProductPage/ProductPageSlice';
import { reducerAuth } from './authSlice';


const store = configureStore({
    reducer: {
        fillter: reducerFillter,
        productList: reducerProduct,
        auth: reducerAuth,
    }
})

export default store;