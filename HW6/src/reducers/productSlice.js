import {createSlice} from "@reduxjs/toolkit";
import {addProductReducer} from "./addProductReducer";
import {removeProductReducer} from "./removeProductReducer";
import {updateProductReducer} from "./updateProductReducer";
import {initialState} from "../initialState";

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: addProductReducer,
        removeProduct: removeProductReducer,
        updateProduct: updateProductReducer
    }
});

export const {addProduct, removeProduct, updateProduct} = productSlice.actions;
export default productSlice.reducer;