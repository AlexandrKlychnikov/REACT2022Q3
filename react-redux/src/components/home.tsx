import React from 'react';
import CardList from './cards/cardlist';
import s from './home.module.sass';
import { SearchForm } from './forms/search-form';
import { ErrorBoundary } from 'shared/errors';
import { useAppSelector } from 'redux/hooks';

export function Home() {
  const isError = useAppSelector((state) => state.isError);

  return (
    <main className={s.main}>
      <SearchForm />
      <ErrorBoundary isError={isError}>
        <CardList />
      </ErrorBoundary>
    </main>
  );
}
