import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
  name: "client",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setClientData: (state, action) => {
      return action.payload;
    },
    clearClientData: (state) => {
      state.data = [];
    },
  },
});

export const { setClientData, clearClientData } = clientSlice.actions;

export default clientSlice.reducer;
