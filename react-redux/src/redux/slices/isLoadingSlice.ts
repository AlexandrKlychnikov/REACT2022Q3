import { createSlice, createAction } from '@reduxjs/toolkit';

const is_loading = createAction<number>('IS_LOADING');

const isLoading = createSlice({
  name: 'isLoading',
  initialState: false as boolean,
  reducers: {
    isLoading: (state) => {
      return !state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(is_loading, (state) => {
      return !state;
    });
  },
});

export default isLoading;
