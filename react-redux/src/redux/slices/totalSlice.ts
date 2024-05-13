import { createSlice, createAction } from '@reduxjs/toolkit';

const getTotal = createAction<number>('GET_TOTAL');

const total = createSlice({
  name: 'total',
  initialState: 0 as number,
  reducers: {
    getTotal: (state, action) => {
      state = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTotal, (_state, action) => {
      return action.payload;
    });
  },
});

export default total;
