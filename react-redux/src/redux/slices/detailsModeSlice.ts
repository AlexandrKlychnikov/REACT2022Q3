import { createSlice, createAction } from '@reduxjs/toolkit';

const modeDetails = createAction<false>('MODE_DETAILS');

const detailsMode = createSlice({
  name: 'detailsMode',
  initialState: false as boolean,
  reducers: {
    detailsMode: (state) => {
      return !state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(modeDetails, (state) => {
      return !state;
    });
  },
});

export default detailsMode;
