import { createSlice, createAction } from '@reduxjs/toolkit';
import { INITIAL_SEARCH_STATE } from 'shared/constants';
import { ISearch } from 'shared/types';

const setSearchForm = createAction<ISearch>('SET_SEARCH_FORM');

const searchForm = createSlice({
  name: 'searchForm',
  initialState: INITIAL_SEARCH_STATE,
  reducers: {
    searchForm: (state, action) => {
      return {
        ...state,
        search: action.payload.search,
        query: action.payload.query,
        number: action.payload.number,
        size: action.payload.size,
        orderBy: action.payload.orderBy,
      };
    },
    setSearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
    setQuery: (state, action) => {
      return {
        ...state,
        query: action.payload,
      };
    },
    setNumber: (state, action) => {
      return {
        ...state,
        number: action.payload,
      };
    },
    setSize: (state, action) => {
      return {
        ...state,
        size: action.payload,
      };
    },
    setOrderBy: (state, action) => {
      return {
        ...state,
        orderBy: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setSearchForm, (state, action) => {
      return {
        ...state,
        search: action.payload.search,
        query: action.payload.query,
        number: action.payload.number,
        size: action.payload.size,
        orderBy: action.payload.orderBy,
      };
    });
  },
});

export default searchForm;
