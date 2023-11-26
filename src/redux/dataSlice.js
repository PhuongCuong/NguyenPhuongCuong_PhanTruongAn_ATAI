import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk("data/getData", async () => {
  const response = await fetch(
    "https://65434e0301b5e279de202812.mockapi.io/User"
  );
  return await response.json();
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
export default dataSlice.reducer;
