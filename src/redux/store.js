import { configureStore } from '@reduxjs/toolkit'
import { reducerFillter } from '~/layouts/Filter/FillterSlice';

const store = configureStore({
    reducer: {
        fillter: reducerFillter,
    }
})

export default store;