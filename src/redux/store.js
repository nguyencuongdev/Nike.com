import { configureStore } from '@reduxjs/toolkit'
import { reducerFillter } from '~/layouts/Filter/FillterSlice';
import { reducerProduct } from '~/pages/ProductPage/ProductPageSlice';

const store = configureStore({
    reducer: {
        fillter: reducerFillter,
        productList: reducerProduct,
    }
})

export default store;