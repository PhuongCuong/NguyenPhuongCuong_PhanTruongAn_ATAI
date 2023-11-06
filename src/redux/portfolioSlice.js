import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ""
}

export const counterSlice = createSlice({
    name: "uploadportfolio",
    initialState,
    reducers: {
        uploadnameportfolio: (state, action) => {
            state.name = action.payload.name
        }
    }
})

export const { uploadnameportfolio } = counterSlice.actions;

export default counterSlice.reducer;