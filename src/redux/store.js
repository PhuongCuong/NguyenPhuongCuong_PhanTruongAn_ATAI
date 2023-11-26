import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./listproductSlice";
import portfolioSlice from "./portfolioSlice";
import cartSlice from "./cartSlice";
import dataSlice from "./dataSlice";

export const store = configureStore({
  reducer: {
    uploaduserinfo: userReducer,
    listproductsell: productReducer,
    uploadportfolio: portfolioSlice,
    cartinfo: cartSlice,
    data: dataSlice,
  },
});
