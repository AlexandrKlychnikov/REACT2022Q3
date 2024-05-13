import { createSlice, createAction } from '@reduxjs/toolkit';
import { IResponseItem } from 'shared/types';

const getData = createAction<IResponseItem[]>('GET_DATA');

const cards = createSlice({
  name: 'cards',
  initialState: [] as IResponseItem[],
  reducers: {
    getData: (state, action) => {
      return [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData, (state, action) => {
      return [...action.payload];
    });
  },
});

export default cards;
