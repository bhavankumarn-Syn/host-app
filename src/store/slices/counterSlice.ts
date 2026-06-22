import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  loading: false,
  error: null,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    resetCounter: () => initialState,
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  resetCounter,
} = counterSlice.actions;

export const selectCount = (state:any) => state.counter.value

export default counterSlice.reducer;

