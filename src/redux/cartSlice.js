import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const counterSlice = createSlice({
    name: "cartinfo",
    initialState,
    reducers: {
        uploadcart: (state, action) => {
            state.cart = action.payload
        },

    }
})

export const { uploadcart } = counterSlice.actions;

export default counterSlice.reducer;