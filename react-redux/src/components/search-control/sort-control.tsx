import React from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import searchFormSlice from 'redux/slices/searchFormSlice';
import { SortType } from './../../shared/types';
import s from './sort-control.module.sass';

function SortControl() {
  const dispatch = useAppDispatch();
  const { orderBy } = useAppSelector((state) => state.searchForm);
  return (
    <div className={s.radios}>
      Sort by:
      <label htmlFor="relevancy">
        <input
          type="radio"
          className="relevancy"
          value={SortType.relevancy}
          checked={orderBy === SortType.relevancy}
          onChange={() => dispatch(searchFormSlice.actions.setOrderBy(SortType.relevancy))}
        />{' '}
        relevancy
      </label>
      <label htmlFor="publishedAt">
        <input
          type="radio"
          value={SortType.publishedAt}
          checked={orderBy === SortType.publishedAt}
          onChange={() => dispatch(searchFormSlice.actions.setOrderBy(SortType.publishedAt))}
        />{' '}
        publishedAt
      </label>
      <label htmlFor="popularity">
        <input
          type="radio"
          value={SortType.popularity}
          checked={orderBy === SortType.popularity}
          onChange={() => dispatch(searchFormSlice.actions.setOrderBy(SortType.popularity))}
        />{' '}
        popularity
      </label>
    </div>
  );
}

export default SortControl;
