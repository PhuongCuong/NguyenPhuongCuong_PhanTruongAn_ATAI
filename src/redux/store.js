import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import productReducer from './listproductSlice';
import portfolioSlice from "./portfolioSlice";

export const store = configureStore({
    reducer: {
        uploaduserinfo: userReducer,
        listproductsell: productReducer,
        uploadportfolio: portfolioSlice
    }
})