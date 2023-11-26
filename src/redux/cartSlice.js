import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartDelete = createAsyncThunk(
  "cartinfo/constDelete",
  async (item) => {
    const response = await fetch(
      `https://65434e0301b5e279de202812.mockapi.io/User/${item.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...item, cart: [...item.cart] }),
      }
    );
    return await response.json();
  }
);
export const counterSlice = createSlice({
  name: "cartinfo",
  initialState,
  reducers: {
    uploadcart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { uploadcart } = counterSlice.actions;

export default counterSlice.reducer;
