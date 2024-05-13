import { AppContext } from 'context';
import React, { useContext } from 'react';
import { Types } from 'reducers';
import { SortType } from './../../shared/types';
import s from './sort-control.module.sass';

function SortControl() {
  const { state, dispatch } = useContext(AppContext);
  const {
    searchForm: { orderBy },
  } = state;
  return (
    <div className={s.radios}>
      Sort by:
      <label htmlFor="relevancy">
        <input
          type="radio"
          className="relevancy"
          value={SortType.relevancy}
          checked={orderBy === SortType.relevancy}
          onChange={() => dispatch({ type: Types.OrderBy, payload: SortType.relevancy })}
        />{' '}
        relevancy
      </label>
      <label htmlFor="publishedAt">
        <input
          type="radio"
          value={SortType.publishedAt}
          checked={orderBy === SortType.publishedAt}
          onChange={() => dispatch({ type: Types.OrderBy, payload: SortType.publishedAt })}
        />{' '}
        publishedAt
      </label>
      <label htmlFor="popularity">
        <input
          type="radio"
          value={SortType.popularity}
          checked={orderBy === SortType.popularity}
          onChange={() => dispatch({ type: Types.OrderBy, payload: SortType.popularity })}
        />{' '}
        popularity
      </label>
    </div>
  );
}

export default SortControl;
