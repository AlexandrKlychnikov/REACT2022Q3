import { createSlice, createAction } from '@reduxjs/toolkit';

const is_error = createAction<number>('IS_ERROR');

const isError = createSlice({
  name: 'isError',
  initialState: false as boolean,
  reducers: {
    isError: (state) => {
      return !state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(is_error, (state) => {
      return !state;
    });
  },
});

export default isError;
