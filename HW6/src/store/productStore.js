import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../reducers/productSlice";

const productStore = configureStore({
    reducer: {
        product: productReducer,
    }
});

export default productStore;