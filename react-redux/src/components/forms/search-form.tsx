import PageControl from 'components/search-control/page-control';
import SortControl from 'components/search-control/sort-control';
import SearchBar from 'components/searchbar/searchbar';
import React, { useEffect, useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import cardsSlice from 'redux/slices/cardsSlice';
import isErrorSlice from 'redux/slices/isErrorSlice';
import isLoadingSlice from 'redux/slices/isLoadingSlice';
import searchFormSlice from 'redux/slices/searchFormSlice';
import totalSlice from 'redux/slices/totalSlice';
import { KEY, MAIN_URL } from 'shared/constants';
import { ISearch } from 'shared/types';
import s from './search-form.module.sass';

export function SearchForm() {
  const dispatch = useAppDispatch();
  const searchForm = useAppSelector((state) => state.searchForm);
  const { query, number, size, orderBy } = searchForm;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const queryFromSearchBar = form.get('search') as string;
    dispatch(searchFormSlice.actions.setQuery(queryFromSearchBar));
  };

  const setChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchFormSlice.actions.setSearch(e.target.value));
  };

  const setCleared = () => {
    dispatch(searchFormSlice.actions.setSearch(''));
  };

  useLayoutEffect(() => {
    return () => {
      if (query !== '') {
        localStorage.setItem('searchBarValue', query);
      }
    };
  });

  useEffect(() => {
    const getData = async (page: Readonly<ISearch>) => {
      dispatch(isLoadingSlice.actions.isLoading());
      const res = await fetch(`${MAIN_URL}photos?query=${page.query}&page=${page.number}
        &per_page=${page.size}&orientation=landscape&order_by=${page.orderBy}&client_id=${KEY}`);
      if (!res.ok) {
        dispatch(isErrorSlice.actions.isError());
        return;
      }
      const data = await res.json();
      dispatch(cardsSlice.actions.getData(data.results));
      dispatch(totalSlice.actions.getTotal(data.total_pages));
      dispatch(isLoadingSlice.actions.isLoading());
    };
    getData(searchForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, number, size, orderBy]);

  return (
    <form
      className={s.searchForm}
      onSubmit={handleSubmit}
      autoComplete="off"
      data-testid="search-form"
    >
      <SearchBar search={searchForm} setChanged={setChanged} setCleared={setCleared} />
      <div className={s.serchControl}>
        <SortControl />
        <PageControl />
      </div>
    </form>
  );
}
