import { IRegCardProps } from './../../shared/types';
import { createSlice, createAction } from '@reduxjs/toolkit';
import { INITIAL_REGISTER_STATE } from 'shared/constants';

const setJoin = createAction<IRegCardProps>('SET_JOIN');

const registerForm = createSlice({
  name: 'registerForm',
  initialState: INITIAL_REGISTER_STATE,
  reducers: {
    registerForm: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        birth: action.payload.birth,
        size: action.payload.country,
        langueges: action.payload.langueges,
        receiving: action.payload.receiving,
        photo: action.payload.photo,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setJoin, (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        birth: action.payload.birth,
        size: action.payload.country,
        langueges: action.payload.langueges,
        receiving: action.payload.receiving,
        photo: action.payload.photo,
      };
    });
  },
});

export default registerForm;
