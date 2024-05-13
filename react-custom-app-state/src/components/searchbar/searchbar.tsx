import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { CgCloseO } from 'react-icons/cg';
import './searchbar.sass';
import { ISearchState } from 'shared/types';

function SearchBar(props: ISearchState) {
  return (
    <div className="search">
      <input
        type="text"
        className="search-field"
        placeholder="Enter your request"
        onInput={props.setChanged}
        value={props.search.search}
        data-testid="search"
        name="search"
      />
      <FaSearch className="search-icon" />
      <CgCloseO
        className={props.search.search !== '' ? 'search-clear active' : 'search-clear'}
        onClick={props.setCleared}
        data-testid="clear"
      />
    </div>
  );
}

export default SearchBar;
