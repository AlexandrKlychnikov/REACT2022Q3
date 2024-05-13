import PageControl from 'components/search-control/page-control';
import SortControl from 'components/search-control/sort-control';
import SearchBar from 'components/searchbar/searchbar';
import { AppContext } from 'context';
import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { Types } from 'reducers';
import { KEY, MAIN_URL } from 'shared/constants';
import { ISearch } from 'shared/types';
import s from './search-form.module.sass';

export function SearchForm() {
  const { state, dispatch } = useContext(AppContext);
  const {
    searchForm: { query, number, size, orderBy },
  } = state;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const queryFromSearchBar = form.get('search') as string;
    dispatch({ type: Types.Query, payload: queryFromSearchBar });
    console.log('query');
  };

  const setChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: Types.Search, payload: e.target.value });
  };

  const setCleared = () => {
    dispatch({ type: Types.Search, payload: '' });
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
      dispatch({ type: Types.IsLoading });
      fetch(`${MAIN_URL}photos?query=${page.query}&page=${page.number}
        &per_page=${page.size}&orientation=landscape&order_by=${page.orderBy}&client_id=${KEY}`)
        .then(
          (res) => res.json(),
          (err) => console.log(err)
        )
        .then((res) => {
          dispatch({ type: Types.GetData, payload: res.results });
          dispatch({ type: Types.GetTotal, payload: res.total_pages });
        })
        .finally(() => dispatch({ type: Types.IsLoading }));
    };
    getData(state.searchForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, number, size, orderBy]);

  return (
    <form
      className={s.searchForm}
      onSubmit={handleSubmit}
      autoComplete="off"
      data-testid="search-form"
    >
      <SearchBar search={state.searchForm} setChanged={setChanged} setCleared={setCleared} />
      <div className={s.serchControl}>
        <SortControl />
        <PageControl />
      </div>
    </form>
  );
}
