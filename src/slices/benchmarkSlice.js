import { createSlice } from "@reduxjs/toolkit";

export const benchmarkSlice = createSlice({
  name: "benchmark",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setBenchmarkData: (state, action) => {
      state.data = action.payload;
    },
    clearBenchmarkData: (state) => {
      state.data = [];
    },
  },
});

export const { setBenchmarkData, clearBenchmarkData } = benchmarkSlice.actions;

export default benchmarkSlice.reducer;
