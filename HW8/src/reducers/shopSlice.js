import {createSlice} from "@reduxjs/toolkit";
import {catalogLoader} from "./loaders/catalogLoader";
import {offerLoader} from "./loaders/offerLoader";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        cart: [],
        catalog: [],
        offers: []
    },
    reducers: {
        cart: {
            addToCart: (state, action) => {
                state.cart.push(action.payload);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(catalogLoader.fulfilled, (state, {payload}) => {
                state.catalog = payload;
            })
            .addCase(offerLoader.fulfilled, (state, {payload}) => {
                state.offers = payload;
            })
    }
});

export const {cart} = shopSlice.actions;
export default shopSlice.reducer;