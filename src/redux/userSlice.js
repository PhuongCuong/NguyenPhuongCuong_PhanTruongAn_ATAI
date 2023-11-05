import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

export const counterSlice = createSlice({
    name: "uploaduserinfo",
    initialState,
    reducers: {
        uploaduser: (state, action) => {
            state.user = action.payload.user
        }
    }
})

export const { uploaduser } = counterSlice.actions;

export default counterSlice.reducer;