import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: '',
    suitable: 'All',
    brands: [],
    colors: [],
    sizes: [],
    gender: ['Men', 'Women']
};

const sliceFillter = createSlice({
    name: 'fillter',
    initialState,
    reducers: {
        changeType: (state, action) => {
            state.type = action.payload;
            return state;
        },
        changeSuitable: (state, action) => {
            state.suitable = action.payload;
            return state;
        },
        addBrand: (state, action) => {
            state.brands.push(action.payload);
        },
        cancelBrand: (state, action) => {
            state.brands = state.brands.filter((brand) => action.payload !== brand);
            return state;
        },
        addColor: (state, action) => {
            state.colors.push(action.payload);
            return state;
        },
        cancelColor: (state, action) => {
            state.colors = state.colors.filter((col) => col !== action.payload)
            return state;
        },
        addSize: (state, action) => {
            state.sizes.push(action.payload);
            return state;
        },
        cancelSize: (state, action) => {
            state.sizes = state.sizes.filter((size) => size !== action.payload)
            return state;
        },
        addGender: (state, action) => {
            state.gender.push(action.payload);
        },
        cancelGender: (state, action) => {
            state.gender = state.gender.filter((gender) => gender !== action.payload);
        }
    }
})

export default sliceFillter;
export const reducerFillter = sliceFillter.reducer;
export const actionsFillter = sliceFillter.actions;