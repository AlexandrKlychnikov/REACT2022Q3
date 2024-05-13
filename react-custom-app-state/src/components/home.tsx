import React, { useContext } from 'react';
import CardList from './cards/cardlist';
import s from './home.module.sass';
import { SearchForm } from './forms/search-form';
import { ErrorBoundary } from 'shared/errors';
import { AppContext } from 'context';

export function Home() {
  const { state } = useContext(AppContext);

  return (
    <main className={s.main}>
      <SearchForm />
      <ErrorBoundary isError={state.isError}>
        <CardList />
      </ErrorBoundary>
    </main>
  );
}
