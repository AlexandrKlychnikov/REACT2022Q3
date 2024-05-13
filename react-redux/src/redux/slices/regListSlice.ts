import { createSlice, createAction } from '@reduxjs/toolkit';
import { IRegCardProps } from 'shared/types';

const getData = createAction<IRegCardProps[]>('PUSH_LIST');

const regList = createSlice({
  name: 'regList',
  initialState: [] as IRegCardProps[],
  reducers: {
    regList: (state, action) => {
      return [...state, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export default regList;
