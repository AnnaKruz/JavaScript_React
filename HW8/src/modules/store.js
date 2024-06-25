import {configureStore} from "@reduxjs/toolkit";
import shopReducer from "../reducers/shopSlice";

const store = configureStore({
    reducer: shopReducer
});

export default store;