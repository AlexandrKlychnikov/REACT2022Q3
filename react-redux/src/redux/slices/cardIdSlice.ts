import { createSlice, createAction } from '@reduxjs/toolkit';

const setId = createAction<string>('SET_ID');

const cardId = createSlice({
  name: 'cardId',
  initialState: '' as string,
  reducers: {
    cardId: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setId, (state, action) => {
      return action.payload;
    });
  },
});

export default cardId;
