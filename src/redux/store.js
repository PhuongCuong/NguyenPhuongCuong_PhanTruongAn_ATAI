import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import productReducer from './listproductSlice'

export const store = configureStore({
    reducer: {
        uploaduserinfo: userReducer,
        listproductsell: productReducer,
    }
})