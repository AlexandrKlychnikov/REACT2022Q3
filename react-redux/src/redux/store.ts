import { IRegCardProps, IResponseItem, ISearch } from './../shared/types';
import { configureStore } from '@reduxjs/toolkit';
import isError from './slices/isErrorSlice';
import isLoading from './slices/isLoadingSlice';
import total from './slices/totalSlice';
import cards from './slices/cardsSlice';
import { INITIAL_REGISTER_STATE, INITIAL_SEARCH_STATE } from 'shared/constants';
import searchForm from './slices/searchFormSlice';
import cardId from './slices/cardIdSlice';
import detailsMode from './slices/detailsModeSlice';
import registerForm from './slices/registerFormSlice';
import regList from './slices/regListSlice';

const reducer = {
  total: total.reducer,
  isLoading: isLoading.reducer,
  isError: isError.reducer,
  cards: cards.reducer,
  cardId: cardId.reducer,
  searchForm: searchForm.reducer,
  detailsMode: detailsMode.reducer,
  register: registerForm.reducer,
  regList: regList.reducer,
};

type InitialStateType = {
  cards: IResponseItem[];
  total: number;
  cardId: string;
  isLoading: boolean;
  isError: boolean;
  searchForm: ISearch;
  detailsMode: boolean;
  register: IRegCardProps;
  regList: IRegCardProps[];
};

const preloadedState: InitialStateType = {
  cards: [],
  total: 0,
  cardId: '',
  searchForm: INITIAL_SEARCH_STATE,
  isLoading: false,
  detailsMode: false,
  isError: false,
  register: INITIAL_REGISTER_STATE,
  regList: [],
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
